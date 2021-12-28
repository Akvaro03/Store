const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
console.log()
document.addEventListener('DOMContentLoaded', e => { fetchData() });

const fetchData = async () => {
    const res = await fetch('http://localhost:3000/hola');
    const data = await res.json()
    console.log(data)
    // pintarCards(data)
}
