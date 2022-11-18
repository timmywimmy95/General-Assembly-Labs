const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}

// ironMan.abilities.forEach(item => {
//     console.log(item);
// })


// for (const [key, value] of Object.entries(test)) {
//     console.log(key, value);
//   }
// for (const [movie, bool] of Object.entries(ironMan.marvelMovieAppearances)){
//     if (movie === "spiderManHomecoming"){
//         console.log(bool);
//     }
// }

// Create a data structure for createCaptain such that...

// The following code logs Captain America

// console.log(createCaptain().aliases.superheroName)

const createCaptain = () => {
    return (newHero = {
        aliases : {
            superheroNames : "Captain America"
         },
        abilities : ["immortality", "advanced combat skills" ,"peak human strength"],
        
        sayPhrase : () => {
            return "i can do this all day"
        }}
        )
}
// console.log(createCaptain().aliases.superheroNames)
// console.log(createCaptain().abilities[2])
// console.log(createCaptain().sayPhrase())

const blackWidow = {
    aliases : {
        realName : "Natalia Alianovna Romanova",
        otherNotableAliases : ["Наталия Альяновна Романова", "Natalie Rushman"]
    }
}

// console.log(blackWidow.aliases.realName)
// console.log(blackWidow.aliases.otherNotableAliases[1])



const theAvengers = [
    { name: 'Tony Stark', superheroName: 'Iron Man'},
    { name: 'Steve Rogers', superheroName: 'Captain America' },
    { name: 'Bruce Banner', superheroName: 'The Hulk'},
    { name: 'Thor' },
    { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
    { name: 'Clint Barton', superheroName: 'Hawkeye' }
  ]

// theAvengers.forEach(avenger => {
//     console.log(avenger.name)
// })



// Given the following array of arrays, use two loops to loop over each inner array and list all the mcu movies.

const mcuMovies = [
  ['ant-man', 'ant-man and the wasp'],
  ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
  ['black panther'],
  ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
  ['doctor strange'],
  ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
  ['the hulk'],
  ['iron man', 'iron man 2', 'iron man 3'],
  ['spiderman: homecoming'],
  ['thor', 'thor: the dark world', 'thor: ragnarok']
]

// mcuMovies.forEach(sequel => {
//     if (sequel.length > 1){
//         sequel.forEach (movie => {
//             console.log(movie);
//         })}
//     else {
//         console.log(sequel[0]);
//     }
//     }
// )

const instruments = {
    banjo: ["1920 gibson", "deering", "washburn"],
    guitar: {
      acoustic: ["martin", "taylor", "santa cruz", "gibson"],
      electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
      nylon: ["baldwin", "cordoba"]
    },
    mandolin: ["eastman", "weber", "collings"]
  }
//   console.log(instruments.guitar.electric[1]);
//   console.log(instruments.guitar.acoustic[2]);
//   console.log(instruments.banjo[instruments.banjo.length - 1]);
//   console.log(instruments.mandolin[1])
// instruments.guitar["electric"].forEach(guitar => {
//     console.log(guitar);
// })
// instruments.vocals = ["John Mayer", "Taylor Swift", "Conan Gray"]
// console.log(instruments)
  
    //   Log all of the following:
    //       telecaster
    //       santa cruz
    //       washburn
    //       weber
    
  
    //   Loop through all the electric guitars and log them
  
    //   Add a vocals property to the object that includes a list of your favorite singers
  


// Your mission is to console.log 'creamed corn' from deep within the bizarre structure:

const garmonbozia = {
  meltedFace: true,
  wobblyArms: true,
  mysteryMeats: [
    'Schlimmbinooks',
    'blangs',
    { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
    { type: 'Yuck-tops', deliverables: [
      'Nevermind',
      { zone: 'safety-zone' },
      { zone: false, true: true },
      () => {
        return () => {
          return () => {
            return () => {
              return () => {
                return { website: 'Gossipcop.com', what: {
                  offering: 'creamed corn', location: 'dark'
                }
                }
              }
            }
          }
        }
      }
     ]
    }
  ]
}
// console.log((garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering))



// Given the following object, call the jump method

// const person = {
//     jump: () => {
//         console.log('fly!');
//     }
// };
// person.jump()

// const generateCar = ()=>{
//     return {
//         drive(){
//             console.log("Vroom");
//         }
//     }
// }

// generateCar().drive()

// const account = {
//     tweet: () => {
//         return {
//             message: "fun"
//         }
//     }
// }

// console.log(account.tweet().message)

// const me = {
//     foo: () =>{
//         return {
//             array: [2.5, 7, true]
//         }
//     }
// }
// console.log(me.foo().array[1])

// Create a data structure such that the following code logs "boat":

// const baz = {
//     foo: () => {
//         return {matt : {
//             travel: "boat"
//             }
//         }
//     }
// }

// console.log(baz.foo().matt.travel);

// const factory = {
//     createCar: () => {
//         return {
//             startEngine: () => {
//                 console.log("car started")
//             }
//         }
//     }
// }

// factory.createCar().startEngine();

// const matt = {
//     blink: () =>{
//         return ()=>{
//             console.log('hi')
//         }
//     }
// }
// matt.blink()()

// const list = [
//     'dogs',
//     false,
//     3.5,
//     ()=>{
//         return {
//             funStuff: ()=>{
//                 console.log('yaaassss');
//             }
//         }
//     }
// ];
// list[3]().funStuff()



// const foo = [
//     'asdfasdf',
//     'matt',
//     false,
//     6,
//     ()=>{
//         return ()=>{
//             console.log('yes!');
//         }
//     },
//     {
//         dog:'blue'
//     }
// ];
// foo[4]()()

// Call the someMethod function, passing in myFunc. It should log About to invoke the callback and then I have been called!

// const foo = {
//     someMethod: (callback)=>{
//         console.log('About to invoke the callback');
//         callback();
//     }
// }

// const myFunc = ()=>{
//     console.log('I have been called!');
// }
// foo.someMethod(myFunc)

const foo = {
    height:5,
    someMethod: (callback)=>{
        callback();
    }
}

const myFunc = (param) => {
    console.log(param.height);
}

// myFunc(foo)



// Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string

// const shirtColor = {
//   color: ['red', 'blue', 'green', 'white', 'pink'],
//   combineColor() {
//     let string= "";
//     this.color.forEach(color => {
//         string += color + ", ";
//     })
//     string = string.slice(0, -2);
//     return string;
//   }
// }
// console.log(shirtColor.combineColor())



