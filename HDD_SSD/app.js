let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Toshiba Canvio Basics 1TB HDTB410AK3AA 100Hz',
        image: 'TOSHIBA.jpg',
        price: 2499.00
    },
    {
        id: 2,
        name: 'Transcend StoreJet 4TB External Hard Drive',
        image: 'transcend.jpg',
        price: 7657.00
    },
    {
        id: 3,
        name: 'Western Digital My Passport Portable 4TB USB 3.0 / 3.1/3.2 Gen 1 ',
        image: 'wd.jpg',
        price: 8299.00
    },
    {
        id: 4,
        name: 'SSD-Western Digital WDS480G2G0A 480GB 2.5" GREEN',
        image: 'sssd_wd.jpg',
        price: 3499.00
    },
    {
        id: 5,
        name: 'SSD-Western Digital WDS500G3B0C 500GB M.2 2280 PCIe BLUE NVME',
        image: 'wd_nvme.jpg',
        price: 3999.00
    },
    {
        id: 6,
        name: 'SSD-SAMSUNG SSD-SAMSUNG-840 EVO BASIC 250GB',
        image: 'samsung.jpg',
        price: 7500.00
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] =  JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})"> - </button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})"> + </button>
              
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}