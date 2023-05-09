const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 }
]
// Filter: filtrare produse sub pretul de 100
const filterItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filterItems)

// Map: afisam doar numele fiecărui element din array-ul items.
const itemName = items.map((item) => {
    return item.name
})
console.log(itemName)

// Find: va afișa în consolă elementul găsit care are numele "Book" sau undefined 
// dacă nu a fost găsit niciun element cu acest nume.
const foundItem = items.find((item) => {
    return item.name === "Book"
})
console.log(foundItem)

//forEach: fișarea numelui fiecărui element utilizând 
items.forEach((item)=>{
    console.log(item.name)
})

//reduce, pentru a ne afisa totalul preturilor, este o funcție anonimă (arrow function)
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0) // daca nu punem acest 0, doar le aranjeaza ca string, nu aduna 

console.log(total)

//includes,afiseaza daca array-ul contine cifra 2

const numere = [1,2,3,4,5]
const includeTwo = numere.includes(2)
console.log(includeTwo)