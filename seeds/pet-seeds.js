const { Pet } = require('../models');

const petdata = [
  {
	"name":"scooter",
	"type":"cat",
	"breed":"tabby",
	"age":"3",
	"owner_id":1,
  "gender": "female"
  },
  {
	"name":"bike",
	"type":"dog",
	"breed":"corgi",
	"age":"1",
	"owner_id":1,
  "gender": "male"
  },
  {
	"name":"vespa",
	"type":"ferret",
	"breed":"black sable",
	"age":"4",
	"owner_id":2,
  "gender": "male"
  },
  {
	"name":"Maximus",
	"type":"dog",
	"breed":"golden retriever",
	"age":"5",
	"owner_id":3,
  "gender": "male"
  },
  {
	"name":"Darla",
	"type":"cat",
	"breed":"siamese",
	"age":"6",
	"owner_id":4,
  "gender": "female"
  },
  {
	"name":"Venus",
	"type":"dog",
	"breed":"",
	"age":"3",
	"owner_id":5,
  "gender": "male"
  },
  {
	"name":"Logan",
	"type":"cat",
	"breed":"munchkin",
	"age":"1",
	"owner_id":6,
  "gender": "male"
  },
  {
	"name":"Phoebe",
	"type":"Bird",
	"breed":"parakeet",
	"age":"3",
	"owner_id":7,
  "gender": "female"
  },
  {
	"name":"Peter",
	"type":"bird",
	"breed":"parakeet",
	"age":"3",
	"owner_id":7,
  "gender": "male"
  },
  {
	"name":"max",
	"type":"dinosaur",
	"breed":"trex",
	"age":"500",
	"owner_id":8,
  "gender": "male"
  },
  {
	"name":"kermit",
	"type":"frog",
	"breed":"puppet",
	"age":"?",
	"owner_id":9,
  "gender":"male"
  },
]

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;