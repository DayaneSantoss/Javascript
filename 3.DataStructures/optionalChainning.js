
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

//   if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)


// With optional Channing
// apenas se tiver a propriedade mon que a propriedade será lida (? para propriedades opcionais)
// retorna undefined
console.log(restaurant.openingHours?.fri?.open) //11
console.log(restaurant.openingHours?.mon?.open) //undefined


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ]

for (const day of days) {
    console.log(restaurant.openingHours[day]?.open ?? 'closed')
}

console.log(restaurant.order?.(0 , 1) ?? 'Method does not exist')
console.log(restaurant.orderRisotto?.(0 , 1) ?? 'Method does not exist')

// arrays

const users = [
    {name: 'Jonas', email:'hello@jonas.com'}
]

// if(users.length > 0) console.log(users[0].name)
// else console.log('user array empty')


// console.log(users[1].name ?? 'user array empty')   X
console.log(users[0]?.name ?? 'user array empty') //JOnas
console.log(users[1]?.name ?? 'user array empty') // user array empty
