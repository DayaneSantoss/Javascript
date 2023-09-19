
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
    [weekdays[2]]:{
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
    openingHours,
    order(starterIndex,  mainIndex){
          return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
        },

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

  const properties = Object.keys(openingHours)
  console.log(properties)

  let openStr = `We are open on ${properties.length} days`

  for (const day of properties){
    openStr += `${day}, `
  }

  console.log(openStr)

//   property Values
const values = Object.values(openingHours)
console.log(values)

// Entire object
const entries = Object.entries(openingHours)
console.log(entries)

for (const[key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}
