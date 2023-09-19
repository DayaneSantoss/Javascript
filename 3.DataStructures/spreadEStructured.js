// spread - faz copia rasa 

// é utilizado para construir novos arrays ou passar varios valores para uma funçao, expande uma matriz em  elemnetos individuais


// só espalha cópias de tipos primitivos

const obj = {
    prop: 1,
    prop2: 2,
    prop3: [1,2,3]
}

const obj2 = {
    ...obj,
    prop: 'x'
}

obj2.prop3.push(4)

// os dois estao armazenado exatamente o mesmo array em memoria
// modificou o array original
console.log(obj2.prop3 === obj.prop3)

// const obj3 = {
//     ...obj,
//     prop: [...obj]
// }

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
    
}

const arr = [7, 8, 9]
const badNewArr = [1 ,2, arr[0], arr[1], arr[2]]
console.log(badNewArr)


const newArray = [ 1 , 2 , ...arr]
console.log(newArray)

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)

// copia rasa 
const mainMenuCopy = [...restaurant.mainMenu]

// juntar 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.categories]
console.log(menu)




const restaurantCopy = {...restaurant}
restaurantCopy.namei = "Ristorante"
console.log(restaurantCopy)
console.log(restaurant)