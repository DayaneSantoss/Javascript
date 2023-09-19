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


// Short Circuiting (&& and ||)

console.log('---- OR ----');
// OU - Retorna o primeiro true
console.log(3 || 'Jonas'); //saida: 3
console.log('' || 'Jonas'); //saida: Jonas
console.log(true || 0); //saida: true
console.log(undefined || null); //saida: null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //saida: Hello

restaurant.numGuests = 0; //0 = falsy
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //saida: 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //saida: 10

console.log('---- AND ----');
// Se os dois valores forem true, retorna o ultimo
// se o primeiro valor for true , ele verifica o proximo
console.log(true && 7); // 7
// se tiver um false, retorna esse valor
console.log(false && 'Jonas'); //false
console.log('Jonas' && false); //false


console.log('Hello' && 23 && null && 'jonas'); //null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: parecido com o OR, trabalha com null and undefined (nao 0 ou '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// Logical Assignment Operators
const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
  };
  
  const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
  };
  
  // OR assignment operator
//   rest1.numGuests = rest1.numGuests || 10;
//   rest2.numGuests = rest2.numGuests || 10;
//   rest1.numGuests ||= 10;
//   rest2.numGuests ||= 10;
  
  // nullish assignment operator (null or undefined)
  rest1.numGuests ??= 10;
  rest2.numGuests ??= 10;
  
  // AND assignment operator
  // rest1.owner = rest1.owner && '<ANONYMOUS>';
  // rest2.owner = rest2.owner && '<ANONYMOUS>';
  rest1.owner &&= '<ANONYMOUS>';
  rest2.owner &&= '<ANONYMOUS>';
  
  console.log(rest1);
  console.log(rest2);