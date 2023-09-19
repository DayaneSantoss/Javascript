
const arr = [2,3,4]
const [x,y,z] = arr
const [a,,c] = arr

console.log(x, y, z)
console.log(a, c)



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function(starterIndex,  mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
  }
}

let [main, secondary] = restaurant.categories;
console.log(main, secondary); // Saída: 'Italian', 'Pizzeria'

[main, secondary] = [secondary, main];
console.log(main, secondary); // Saída: 'Pizzeria', 'Italian'

const [starter, mainCourse] = restaurant.order(1,0);

console.log(starter)
console.log(mainCourse)



const nested = [2, 1, [4, 5]]

const [i, , [j,k]] = nested

console.log(i,j,k)

// adicionando um padrao , caso nao seja definido um valor
const [ p=1, q=1, r=1] = [5]

console.log(p, q, r)

