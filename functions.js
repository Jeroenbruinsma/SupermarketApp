console.log("hello from functions.js")

// const product = document.getElementById('0')
// console.log("product (apple)", product)
// product.style.backgroundColor = 'red'
// const pricetag = document.createElement('p')
// pricetag.innerHTML = '10.00'
// pricetag.style.margin = '100px'
// product.appendChild(pricetag)

//setPrice(0,"10.00")
//setPrice(1,"3.00")

function setPrice(id, price) {
    // console.log("setPrice called w:", id, price)
    const product = document.getElementById(id)
    //console.log("product", product)
    product.style.backgroundColor = 'red'
    const pricetag = document.createElement('p')
    pricetag.innerHTML = price.toString()
    pricetag.style.margin = '5px'
    product.appendChild(pricetag)
}

function addProduct(product) {
    //console.log("Add a product called w:", product)

    const div = document.createElement("div")
    const pTag = document.createElement("p")
    pTag.innerHTML = product.name
    div.appendChild(pTag)
    div.classList.add("product") // or div.class="product"; 
    div.id = product.id

    section = document.getElementById("products")
    const img = document.createElement("img")

    div.appendChild(img)
    img.src = product.pic_url

    section.appendChild(div)
    setPrice(product.id, product.price)
}

//addProduct({id: 5,name: "potato", price: 3.95, currency: {usd: 3.95,
//                                                 eur: 2.95},
//                                             url: "https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/box_620_330/image.jpg" })

//console.log('datafile', data.products[0])
const listOfProducts = data.products

// for(let i = 0; i <= listOfProducts.length; i++){
//     console.log("products", listOfProducts[i])
// }

listOfProducts.forEach(function (item, index) {
    //console.log("data",item, index)
    // if (item.name != 'Beer') {
    //     addProduct(item)
    // }
    // if (item.id < 2) {
    //     discounted_item = item
    //     discounted_item.price = parseInt(item.price) * 0.95
    //     console.log("price of item", discounted_item)
    //     addProduct(discounted_item)
    // } else if (item.id > 5) {
    //     discounted_item = item
    //     discounted_item.price = parseInt(item.price) * 1.5
    //     console.log("price of item", discounted_item)
    //     addProduct(discounted_item)
    // }
    const scopingTest = "test"
    switch (item.category) {
        case "alcohol":
            discounted_item = item
            discounted_item.price = parseInt(item.price) * 1.75
            //console.log("price of item", discounted_item)
            addProduct(discounted_item)
            break;
        case "fresh":
            discounted_item = item
            discounted_item.price = parseInt(item.price) * 1.3
            //console.log("price of item", discounted_item)
            //addProduct(discounted_item)

            break;
        case 'grocery':
            const scopingTest = "something else"
            //console.log("scopingtest ", scopingTest)
            
            discounted_item = item
            discounted_item.price = parseInt(item.price) * 0.95
            //console.log("price of item", discounted_item)
            //addProduct(discounted_item)
            break;
        default:
            console.log('this product is of the default category ')

    }
    //console.log("scopingtest ", scopingTest)

    // while (listOfProducts.length >= 1) {
    //     let product = listOfProducts.pop()
    //     //console.log("product", product.name)
    //     //console.log("length of my array", listOfProducts.length)
    // }
})

