// Loop  from all for  loop in json


let people = [

  {

    "name": "John",

    "age": 30,

    "gender": "male"

  },

  {

    "name": "Jane",

    "age": 25,

    "gender": "female"

  },

  {

    "name": "Bob",

    "age": 40,

    "gender": "male"

  }

];


for (let i = 0; i < people.length; i++) {

  let person = people[i

  ];

  console.log(person.name + " is " + person.age + " years old and identifies as " + person.gender);

}




people.forEach(function(person) {

  console.log(person.name + " is " + person.age + " years old and identifies as " + person.gender);

});



for (let i in people) {

  let person = people[i];

  console.log(person.name + " is " + person.age + " years old and identifies as " + person.gender);

}


for (let person of people) {

  console.log(person.name + " is " + person.age + " years old and identifies as " + person.gender);

}



