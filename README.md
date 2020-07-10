# fun-faker
make it fake but fun

## Helpers

First & Last Name

```javascript
// require module
const funFaker = require('./funFaker')
// helpers
const helpers = funFaker.helpers
// themes
const hp = funFaker.hp

// ramdom character
const randomCharacter = helpers.randomItem(hp.characters)
// first & last name
const firstName = helpers.fullName(randomCharacter)[0]
const lastName = helpers.fullName(randomCharacter)[1]

console.log(`First Name: ${firstName}`)
console.log(`Last Name: ${lastName}`)
/*
Result:
First Name: Vernon
Last Name: Dursley
*/
```

Job & Email

```javascript
// require module
const funFaker = require('./funFaker')
// helpers
const helpers = funFaker.helpers
// themes
const hp = funFaker.hp
const medical = funFaker.medical

// ramdom character
const randomCharacter = helpers.randomItem(hp.characters)
// First Name: Vernon
// Last Name: Dursley

// asign job
const job = helpers.randomItem(medical.jobs)
// Job: Massage Therapist

// assign email
const email = helpers.userEmail(randomCharacter)
// Email: vdursley@email.com
```

## Themes

### Books
Harry Potter
  - characters
  - quotes
  - schools
  - Hogwarts Houses
  - dwellings
  - locations
  - wand ceremony

### Shows
The Office
  - characters
  - quotes
  
### Games
The Witcher
  - characters
  - quotes

### Industries
Medical
  - conditions
  - jobs

### Standard stuff
Address
  - Zip codes by State
    - Oregon