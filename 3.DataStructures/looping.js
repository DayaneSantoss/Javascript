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


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (let i = 0; i < menu.length; i ++){
//     console.log(menu[i])
// }

// jeito mais fácil
for(const item of menu) console.log(item)

for(const item of menu.entries()) console.log(item)

for(const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`)
}