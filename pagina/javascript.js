const cards = document.getElementById('cards')
// const items = document.getElementById('items')
// const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
// const templateFooter = document.getElementById('template-footer').content
// const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}
console.log()
document.addEventListener('DOMContentLoaded', e => { fetchData() });

const fetchData = async () => {
    const res = await fetch('http://localhost:3000/hola');
    const data = await res.json()
    await data.forEach(myFunction)
    console.log(data)
    pintarCards(data)
}

function myFunction(item) {
    console.log(item.price)
}  
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.tittle
        templateCard.querySelector('p').textContent = item.price
        templateCard.querySelector('img').setAttribute('src', item.thumbnailUrl)
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
