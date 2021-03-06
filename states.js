const addressFile = require('./usAddress.json')
let addressList = addressFile.addresses

const helpers = {
  randomAddress: (state) => {
    const filteredAddresses = []
    if (state) {
      addressList.forEach(address => {
        if (address.state === state) {
          filteredAddresses.push(address)
        }
      })

      if (filteredAddresses.length > 1) {
        addressList = filteredAddresses
      } else {
        console.log('\n**No address for that state.**\n')
      }
    }

    const randomAdd = addressList[Math.floor(Math.random() * addressList.length)]

    randomAdd.fullAddress = randomAdd.address1 + ' ' + randomAdd.city + ' ' + randomAdd.state + ' ' + randomAdd.postalCode

    return randomAdd

    // return [randomAdd.address1 + ' ' + randomAdd.city + ' ' + randomAdd.state + ' ' + randomAdd.postalCode, randomAdd.coordinates]
  }
}
module.exports = {
  helpers: helpers
}
