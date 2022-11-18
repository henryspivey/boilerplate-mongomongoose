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

const findPersonById = async (personId, done) => {
  try {
    const data = await Person.findById(personId)
    if(data) console.log(data)
    return done(null,data)
  } catch (error) {
    return done(error)
  }
};

const findEditThenSave = async (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err, pers) {
    if(err) return console.log(err)
    pers.favoriteFoods.push(foodToAdd)
    pers.save(function(err, updatedPers){
      if(err) return console.error(err)
      done(null, updatedPers)
    })
  })
};

const findAndUpdate = async (personName, done) => {
  const ageToSet = 20;
  try {
    const filter = { name: personName };
    const update = { age: ageToSet };

    // `doc` is the document _before_ `update` was applied
    let doc = await Person.findOneAndUpdate(filter, update, {new:true});
    return done(null, doc)
  } catch (error) {
    return(error)
  }
  
};

const removeById = async (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, data){
    if(err) return console.error(error)
    return done(null, data)
  })
};

const removeManyPeople = async (done) => {
  const nameToRemove = "Mary";
  await Person.remove({name: nameToRemove}, function(error, data) {
    if (err) return done(error)
    return done(null, data)
  })
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
