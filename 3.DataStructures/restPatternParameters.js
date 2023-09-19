'use strict'
// spread - desempacota e expande uma matriz em elementos individuais
// rest pattern - empacota e condensa elementos em um array


// SPREAD - porque está do lado direiro da igualdade =
const arr = [1, 2, ...[3, 4]]

// REST PATTERN - porque está do lado esquerdo da igualdade =
const [a, b, ...others] = [1,2,3,4,5]
console.log(a,b,others) //Saida: 1 2 [ 3, 4, 5 ]


const restaurant = {
    namei: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat:{
            open: 0,
            close: 24
        }
    },
    
    order: function(starterIndex,  mainIndex){
      return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
    },
    orderDelivery: function({
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

// arrays
// o REST PATTERN deve ser o ultimo elemento

  const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
  console.log(pizza, risotto, otherFood)

// objects 

const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)


// functions - Rest parameters 


const add = function(...numbers){
    let sum = 0 
    for(let i = 0; i < numbers.length; i++) sum += numbers[i]
    console.log(sum)
}

add(1,2,3,4)
add(1,4,6,2,3,4)
add(3,5,6,7,1,2,3,4)


const x = [23,5,7]
add(...x) //desempacota para empacotar na funcao

restaurant.orderPizza('macarron',"miojo",'carne','frango')