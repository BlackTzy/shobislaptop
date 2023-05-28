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
        name: 'Asus Vivobook 15 OLED K513EA-L11108TS',
        description: 'Intel® Core™ i5-1135G7 4GB DDR4 on board + 4GB DDR4 SO-DIMM 512GB M.2 NVMe™ PCIe® 3.0 SSD Intel Iris Xᵉ Graphics Windows 11 Home',
        image: 'ASUS1.WEBP',
        price: 38499.00
    },
    {
        id: 2,
        name: 'Asus Zenbook S 13 OLED UM5302TA ',
        description: 'AMD Ryzen™ 5 6600U 8GB LPDDR5 on board  512GB M.2 NVMe™ PCIe® 3.0 SSD.AMD Radeon™ Graphics Windows 11 Home',
        image: 'ASUS2.WEBP',
        price: 61999.00
    },
    {
        id: 3,
        name: 'Asus TUF Gaming A17 FA707RE-HX042W',
        description: 'AMD Ryzen™ 7 6800H NVIDIA® GeForce RTX™ 3050 Ti Laptop GPU  8GB DDR5-4800 SO-DIMM 1TB PCIe® 3.0 NVMe™ M.2 SSD Windows 11 Home',
        image: 'ASUS3.WEBP',
        price: 90995.00
    },
    {
        id: 4,
        name: 'Asus Zenbook S 13 OLED UM5302TA',
        description:'AMD Ryzen™ 5 6600U AMD Radeon™ Graphics 8GB LPDDR5 on board 512GB M.2 NVMe™ PCIe® 3.0 SSD Windows 11 Home',
        image: 'ASUS4.WEBP',
        price: 61999.00
    },
    {
        id: 5,
        name: 'Asus Zenbook 14X UM5401QA-KN205WS',
        description:'AMD Ryzen™ 5 5600H Mobile Processor. AMD Radeon™ Graphics 16GB LPDDR4X  512GB M.2 NVMe™ PCIe® 3.0 SSD.  Windows 11 Home',
        image: 'ASUS5.WEBP',
        price: 60999.00
    },
    {
        id: 6,
        name: 'Asus ROG Strix G15 G513QM-HN271T ',
        description:'AMD Ryzen 9 5900HX 8GB DDR4-3200 SO-DIMM *2 1TB M.2 NVMe PCIe® 3.0 SSD  NVIDIA® GeForce RTX 3060 GPU Windows 11 Home',
        image: 'ASUS6.WEBP',
        price: 93999.00
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
            <div class="description">${value.description}</div>
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