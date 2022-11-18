require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://henryspivey:y4%25kdxDKrQDx%23%403@cluster0.ezqbz.mongodb.net/fcc-mongodb-and-mongoose?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: Array
})

let Person = mongoose.model('Person',personSchema)


const createAndSavePerson = (done) => {
  const p = Person({name:"henry", age: 29, favoriteFoods: ['spaghetti']})
  p.save(function(err, data) { 
    if(err) return done(err)
    done(null, data);
  })
  
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople).then(data => {
    return done(null,data)
  }).catch(err => {
    return done(err)
  })
  
};

const findPeopleByName = async (personName, done) => {
  try {
    const data = await Person.find({name: personName})
    if(data) console.log(data)
    return done(null, data)
  } catch (error) {
    return done(error)
  }
  
};

const findOneByFood = async (food, done) => {
  try {
    const data = await Person.findOne({favoriteFoods: food})
    if (data) console.log(data)
    return done(null, data)
  } catch (error) {
    return done(error)
  }
};

const findPersonById = (personId, done) => {
  try {
    const data = Person.findById(personId)
    if(data) console.log(data)
    return done(null,data)
  } catch (error) {
    return done(error)
  }
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
