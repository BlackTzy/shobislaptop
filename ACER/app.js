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
        name: 'Acer Nitro 5 AN515-43-R2WK',
        description: 'Ryzen 7 processor 4GB of DDR4 256GB NVMe SSD + 1 TB 2.5-inch 5400 RPM Windows 10 Home ( Microsoft Office Lifetime Included ).',
        image: 'ACER1.JPG',
        price: 35999
    },
    {
        id: 2,
        name: 'Acer Nitro 5 AN515-45-R5Q9',
        description: 'AMD RyzenTM 9 5900HX octa-core processor  NVIDIA® GeForce® RTX TM 3070 16 GB of DDR4 3200 mhz system memory, 512GB NVMe SSD Windows 11 Home',
        image: 'ACER2.WEBP',
        price: 90499.00
    },
    {
        id: 3,
        name: 'Acer Aspire 3 A315-35-C672',
        description: 'Intel® Celeron® dual-core processor N4500 4 GB of DDR4 system memory 256GB NVMe SSD Full HD 1920 x 1080 Windows 11 Home ',
        image: 'ACER3.WEBP',
        price: 21699.00
    },
    {
        id: 4,
        name: 'Acer Aspire 3 A314-35-P4BJ',
        description:'Intel® Pentium® Silver N6000 8GB of DDR4 system memory 256GB PCIe NVMe SSD + 1TB 36.7 Wh 2-cell Li-ion battery Windows 11 Home. ',
        image: 'ACER4.WEBP',
        price: 22999.00
    },
    {
        id: 5,
        name: 'Acer Aspire 3 A315-58-345U5 ',
        description:'Intel® Core™ i3-1115G4 processor Intel® UHD Graphics. 4 GB of onboard DDR4 system memory, upgradable up to 16GB of dual channel DDR4 system memory.  256GB NVMe SSD (HDD Upgrade kit ready).  Panel size - 14-inch. Windows 11 Home',
        image: 'ACER5.webp',
        price: 26999.00
    },
    {
        id: 6,
        name: 'Acer Predator Helios 300 PH315-55-76D8',
        description:'Intel® Core i7-12700H. NVIDIA® GeForce RTX3060. 16 GB RAM DDR5 4800MHz Memory 512 GB PCIe Gen 4 NVMe SSD. Panel size - 15.6". Battery - 4-Cell Lithium Ion (Li-Ion). Windows 11 Home.',
        image: 'ACER6.webp',
        price: 115999.00
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
            <button onclick="addToCard(${key})">Add to cart</button>`;
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
document.getElementsByClassName('btn-purchase' )[0].addEventListener('click', purchaseClicked, )

    function purchaseClicked() {
        alert('Thank you for your purchase')
        var cartItems = document.getElementsByClassName('listCard')[0] 
        
        while (cartItems.hasChildNodes() ) {
            cartItems.removeChild(cartItems.firstChild)
            
        }   
        
    }
