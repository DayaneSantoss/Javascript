'use strict';


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
    }
  }

    restaurant.orderDelivery({
        time: "22:30",
        adress: "Vila del Sole, 45",
        mainIndex: 2,
        starterIndex:2
    })

    restaurant.orderDelivery({
        adress: "Vila del Sole, 22",
        starterIndex: 3
    })


  const {namei, openingHours, categories} = restaurant
  console.log (namei, openingHours, categories)

// muda os  nomes
  const {
    namei : restaurantName , 
    openingHours: hours,
    categories: tags
  } = restaurant

  console.log (restaurantName, hours, tags)

//    Default values

const {menu=[], starterMenu: starters = []} = restaurant;

console.log(menu, starters);


let a = 111
let b = 222
const obj = {a:23, b:7, c:14};
({ a , b }  = obj);
console.log(a,b);

const { fri: {open: o, close:c} } = openingHours
console.log(o, c)