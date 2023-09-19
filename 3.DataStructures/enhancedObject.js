
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri' ]
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [`dia da semana - ${weekdays[2]}`]:{
        open: 0,
        close: 24
    }
}

console.log(openingHours)

const restaurant = {
    namei: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // nova maneira ES6
    openingHours,

    // maneira antiga
    // order: function(starterIndex,  mainIndex){
    //   return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
    // },


    // Nova  maneira ES6
    order(starterIndex,  mainIndex){
          return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
        },

    // orderDelivery: function({
    //     starterIndex = 1, 
    //     mainIndex = 0, 
    //     time = "20:00", 
    //     adress,
    // }){
    //     console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
    // },
    orderDelivery({
        starterIndex = 1, 
        mainIndex = 0, 
        time = "20:00", 
        adress,
    }){
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
    },

    orderPizza: function(mainIngredients, ...othersIngredients){
        console.log(mainIngredients)
        console.log(othersIngredients)
    }
  }

