const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmendtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // method - propriedade qu contém valor de uma função

    // calcAge: function(birthYeah) {
    //     return 2037 - birthYeah
    // }

    // calcAge: function() {
    //         console.log(this) 
    //         return 2037 - this.birthYeah
    //     }

    calcAge: function(){
        this.age = 2037 - this.birthYeah
        return this.age
    }
    

}
console.log(jonas)
// console.log(jonas.calcAge(1991))
// console.log(jonas["calcAge"](1991))
console.log(jonas.calcAge()) //46
console.log(jonas.age) // 46
console.log(jonas) 



// recuperar valores
console.log(jonas.lastName)
console.log(jonas['lastName'])


const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// adicionar valores
jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtmann'
console.log(jonas)

// challenge
// "Jonas has 3 friends, and his best friend is called Michael"

const jonasFriends = `${jonas.firstName} has ${jonas.friends.length} friends , and his best friend is called ${jonas.friends[jonas.friends.indexOf("Michael")]}`
console.log(jonasFriends)


// challenge

// "JOnas is 46-year old teacher , and he has a drivers license"

const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmendtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
// this é igual ao valor do objeto jonas
    calcAge: function(){
        this.age = 2037 - this.birthYeah
        return this.age
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a':'no'} drivers license`
    }
}

console.log(jonas2.getSummary())

// Voltemos a Mark e John comparando seus IMCs!

// Desta vez, vamos usar objetos para implementar os cálculos! Lembre-se: IMC = massa / (altura * altura) (massa em kg e altura em metros).

// Suas tarefas:

// Para cada um deles, crie um objeto com propriedades de nome completo, massa e altura (Mark Miller e John Smith). Nomeie esses objetos como mark e john, e suas propriedades exatamente como fullName, mass e height.

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}
console.log(mark)
mark.calcBMI()
john.calcBMI()
console.log(mark)
console.log(mark.bmi, john.bmi)

if(mark.bmi > john.bmi){
    console.log(`O IMC de ${mark.fullName} ${mark.bmi.toFixed(2)} é maior que o de ${john.fullName} ${john.bmi.toFixed(2)}`)
}else{
    console.log(`O IMC de ${john.fullName} ${john.bmi.toFixed(2)} é maior que o de ${mark.fullName}${mark.bmi.toFixed(2)}`)
}

// Crie um método calcBMI em cada objeto para calcular o IMC (o mesmo método em ambos os objetos). Atribua o valor do IMC a uma propriedade e também retorne-o do método.

// Registe na consola quem tem o IMC mais elevado, juntamente com o nome completo e o respetivo IMC. Exemplo: "O IMC de John Smith (28,3) é maior que o de Mark Miller (23,9)!".

// DADOS DO TESTE: Marks pesa 78 kg e tem 1,69 m de altura. John pesa 92 kg e tem 1,95 m de altura.
// 👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra
// IMPORTANTE: O operador ** não é suportado neste editor. Certifique-se de usar exatamente esta fórmula massa / (altura * altura), e não esta massa / (altura ** 2).