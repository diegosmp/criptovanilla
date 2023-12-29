async function getApi() {
    const input = document.querySelector('#procurar')
    const coin = input.value 
    try{
        const res = await fetch('http://localhost:3000/coins').then()
        const data = await res.json()
        const find = data.filter(e => e.coin === coin)
        renderApi(find)

        return find
    } catch(error) {
        console.error("Error fetching API: ", error)
    }
    
}


function renderApi(items) {
    const cryptoContainer = document.querySelector('#cripto')
    cryptoContainer.classList.add('cryptoContainer')
    cryptoContainer.innerHTML = ''

    items.map(item => {
        const div = document.createElement('div')
        div.classList.add('coinContainer')
        const nameCoin = document.createElement('h2')
        const price = document.createElement('h3')
        const img = document.createElement('img')
        const description = document.createElement('p')

        nameCoin.innerText = item.coin
        price.innerText = item.price
        img.src = item.image
        img.alt = item.coin
        description.innerText = item.description

        div.append(img, nameCoin, price, description)
        cryptoContainer.appendChild(div)
    })
}