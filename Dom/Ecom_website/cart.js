document.addEventListener("DOMContentLoaded", function() {
const items1 = [
    {
        Id: 'pro1',
        image: `image/products/f1`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    },
    {
        Id: 'pro2',
        image: `image/products/f2`,
        Company_name: 'Allen solly',
        product_name: 'Light blue Shirt',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 79,
    },
    {
        Id: 'pro3',
        image: `image/products/f3`,
        Company_name: 'Snitch',
        product_name: 'Crochet T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 59,
    
    },
    {
        Id: 'pro4',
        image: `image/products/f4`,
        Company_name: 'Nike',
        product_name: 'Cartoon Air T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 77,
    
    },
    {
        Id: 'pro5',
        image: `image/products/f5`,
        Company_name: 'Yahoo',
        product_name: 'Cartoon T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 99,
    
    },
    {
        Id: 'pro6',
        image: `image/products/f6`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 69,
    
    },
    {
        Id: 'pro7',
        image: `image/products/f7`,
        Company_name: 'adidas',
        product_name: 'Plane Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 72,
    
    },
    {
        Id: 'pro8',
        image: `image/products/f8`,
        Company_name: 'adidas',
        product_name: 'Light blue Astronaut Shirt',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 65,
    
    }
];
const items2 = [
    {
        Id: 'pro9',
        image: `image/products/n1`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    },
    {
        Id: 'pro10',
        image: `image/products/n2`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    },
    {
        Id: 'pro11',
        image: `image/products/n3`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    
    },
    {
        Id: 'pro12',
        image: `image/products/n4`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    
    },
    {
        Id: 'pro13',
        image: `image/products/f5`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    
    },
    {
        Id: 'pro14',
        image: `image/products/f6`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    
    },
    {
        Id: 'pro15',
        image: `image/products/f7`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    
    },
    {
        Id: 'pro16',
        image: `image/products/f8`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: 49,
    
    }
];

let items = [...items1, ...items2];

let bag_item_objects;
onload();

function onload() {
    Loadbagitem_objects();  
    displaybagitems();
    displaybagsummery();
}


function displaybagsummery(){
    let bagsummeryElement = document.querySelector("#subtotal");
    let totalitems = bag_item_objects.length
    let totalMRP = 0
    let totalprice;
    let shipingcharge;
    
    bag_item_objects.forEach(bagitem => 
        totalMRP += bagitem.product_price 
    )
        
    if(bag_item_objects.length == 0){
        totalprice = 0
        shipingcharge = 0
    }
    else if(totalMRP>99){
        shipingcharge = 'FREE'
        totalprice = totalMRP
    }
    else{
        totalprice = totalMRP + 9;
        shipingcharge = 9
    }
     
    

    bagsummeryElement.innerHTML = `
                    <h3>Cart Totals<span>(Total items: ${totalitems})</span></h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>$ ${totalMRP}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>$ ${shipingcharge}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$ ${totalprice}</strong></td>
                    </tr>
                </table>
                <button class="normal">Process to checkout</button>`;
}

function Loadbagitem_objects() {
    // console.log(bagitems);
    bag_item_objects = bagitems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].Id) {
                return items[i];
            }   
        }
    })
    // console.log(bag_item_objects);
}

function displaybagitems() {
    let containerElements = document.querySelector("#bag-item-containers");

    let inner_h = '';
    bag_item_objects.forEach(bagitem => {
        inner_h += generateItemHTML(bagitem)
    });
    
    containerElements.innerHTML = inner_h;
}


window.removefromCart = function(itemId) {
    bagitems = bagitems.filter(bagitemId => bagitemId != itemId);
    localStorage.setItem('bagitems', JSON.stringify(bagitems));
    Loadbagitem_objects();
    displaybagicon();
    displaybagitems();
    displaybagsummery()
}


let userInput = document.querySelector("#userinput")
userInput.value = 1;

console.log(userInput)
function generateItemHTML(item) {
    if (item) {
        return `
            <tr>
                <td><button onclick="removefromCart('${item.Id}')" ><i class="ri-close-circle-fill"></i></button></td>
                <td><img src="${item.image}.jpg" alt=""></td>
                <td>${item.Company_name}</td>
                <td>${item.product_price}</td>
                <td><input id='userinput' type="number" value="1" min="1"></td>
                <td>$ ${item.product_price}</td>
            </tr>`;
    }
}

});

