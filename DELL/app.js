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
        name: 'Dell Vostro 14 ',
        description: '11th Generation Intel® Core i3-1115G4, 8GB DDR4 RAM 1TB+256GB CL35 M.2 SSD. Intel® UHD Graphics Windows 11 Home, 64-bit.',
        image: 'dell1.webp',
        price: 31999
    },
    {
        id: 2,
        name: 'Dell Inspiron 3511 ',
        description: 'Intel® Core i7-1165G7. 8GB DDR4. 512 GB, M.2, PCIe NVMe, SSD. Intel® Iris Xe Graphics. Panel size - 15.6 Inches. Full HD 1920 x 1080. Windows 11 Home.',
        image: 'DELL2.WEBP',
        price: 57490.00
    },
    {
        id: 3,
        name: 'Dell XPS 17 9710',
        description: 'Intel Core i7-11800H. Intel Iris Xe Graphics. 16GB DDR4 RAM at 3200 MHz. 1TB, M.2, PCIe NVMe, SSD. Resolution - UHD+(3840x2400). Windows 11 Home',
        image: 'dell5.webp',
        price: 179490.00
    },
    {
        id: 4,
        name: 'Dell XPS 15 9510',
        description:'Intel Core i9-11900H. Intel Iris Xe Graphics. 32GB DDR4 RAM at 3200 MHz. 2TB, M.2, PCIe NVMe, SSD. Windows 11 Home.',
        image: 'dell6.webp',
        price: 205990.00
    },
    {
        id: 5,
        name: 'Dell XPS 15 9510 ',
        description:'Intel Core i7-11800H. Intel Iris Xe Graphics. 16GB DDR4 RAM at 3200 MHz. 1TB, M.2, PCIe NVMe, SSD. Windows 11 Home.',
        image: 'dell7.webp',
        price: 154990.00
    },
    {
        id: 6,
        name: 'Dell Inspiron 16 5620',
        description:'Intel® Core™ i5-1240P Processor.  Intel® UHD Graphics. 16GB DDR4 RAM at 3200 MHz. 512 GB, M.2, PCIe NVMe, SSD. Resolution - Full HD+ (1920 x 1200). Windows 11 Home',
        image: 'dell8.webp',
        price: 73990.00
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