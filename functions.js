console.log("hello from functions.js")

// const product = document.getElementById('0')
// console.log("product (apple)", product)
// product.style.backgroundColor = 'red'
// const pricetag = document.createElement('p')
// pricetag.innerHTML = '10.00'
// pricetag.style.margin = '100px'
// product.appendChild(pricetag)

setPrice(0,"10.00")
setPrice(1,"3.00")


function setPrice(id, price ) {
    console.log("setPrice called w:", id, price)
    const product = document.getElementById(id)
    console.log("product", product)
    product.style.backgroundColor = 'red'
    const pricetag = document.createElement('p')
    pricetag.innerHTML = price
    pricetag.style.margin = '100px'
    product.appendChild(pricetag)
}

function addProduct (product) {
    console.log("Add a product called w:", product)

    //console.log("IM looking for name!!!!", product.name)
    //console.log("IM looking for currency!!!!", product.currency)
    //console.log("IM looking for currency!!!!", product.id)


    const div = document.createElement("div")
    const pTag = document.createElement("p")
    pTag.innerHTML = product.name
    div.appendChild(pTag)
    div.classList.add("product") // or div.class="product"; 
    div.id = product.id  

    section = document.getElementById("products")
    const img = document.createElement("img")
    
    div.appendChild(img)
    img.src = product.url

    section.appendChild(div)
    setPrice(product.id, 6.99)

}

addProduct({id: 5,name: "potato", price: 3.95, currency: {usd: 3.95,
                                                    eur: 2.95},
                                                url: "https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/box_620_330/image.jpg" })