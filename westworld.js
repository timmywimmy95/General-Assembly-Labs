class Host {
    constructor(name, occupation){
        this.name = name;
        this.occupation = occupation;
    }
    saySpecs(){
        console.log(`My name is ${this.name} and I am a ${this.occupation}.`)
    }
}
const host1 = new Host("Roget", "creator of Roget\'s Theasaurus")

console.log(host1.name)


const host2 = new Host("Tim", "Software Engineer")
// host2.saySpecs()



const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

const hostArray = [];

// Write a for loop that will will run 100 times. Inside the for loop, push a new BasicHost into the array:
// Creation of 100 hosts that are given randomized names and jobs based on the names and jobs array variables above.
for (let i = 0; i < 100; i++){
    hostArray.push(new Host(names[Math.floor((Math.random() * names.length) + 0)], occupations[Math.floor((Math.random() * occupations.length) + 0)]))
    
}
// console.log(hostArray)
hostArray[55].saySpecs()
// console.log(Math.floor((Math.random() * names.length) + 0))
