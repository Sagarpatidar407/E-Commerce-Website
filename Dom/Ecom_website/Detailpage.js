
document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll(".pro").forEach(product => 
        product.addEventListener('click',function(){
            const productId = product.getAttribute('Id');
            window.location.href = `sproductfile.html?id=${productId}`;
        })
    )
    
});

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


const items1 = [
    {
        Id: 'pro1',
        image: `image/products/f1`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    },
    {
        Id: 'pro2',
        image: `image/products/f2`,
        Company_name: 'adidas',
        product_name: 'Light blue Astronaut Shirt',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    },
    {
        Id: 'pro3',
        image: `image/products/f3`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro4',
        image: `image/products/f4`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro5',
        image: `image/products/f5`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro6',
        image: `image/products/f6`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro7',
        image: `image/products/f7`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro8',
        image: `image/products/f8`,
        Company_name: 'adidas',
        product_name: 'Light blue Astronaut Shirt',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    }
];

const items2 = [
    {
        Id: 'pro9',
        image: `image/products/n1`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    },
    {
        Id: 'pro10',
        image: `image/products/n2`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    },
    {
        Id: 'pro11',
        image: `image/products/n3`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro12',
        image: `image/products/n4`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro13',
        image: `image/products/f5`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro14',
        image: `image/products/f6`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro15',
        image: `image/products/f7`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    },
    {
        Id: 'pro16',
        image: `image/products/f8`,
        Company_name: 'adidas',
        product_name: 'Cartoon Astronaut T-Shirts',
        rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
        product_price: '$49',
    
    }
];

let items = [...items1, ...items2];

const productId = (getParameterByName('id'))
console.log(productId)

let detail_item_obj;

Loadbagitem_obj()

function Loadbagitem_obj() {

    for (let i = 0; i < items.length; i++) {
        if(productId == items[i].Id){
            detail_item_obj = items[i];
            break;
        }
    }   
}

let single_pro_image = document.querySelector(".single-pro-image");
let single_pro_details = document.querySelector(".single-pro-details");
    
detailinnerHtml();
function detailinnerHtml(){
    if(detail_item_obj){
        single_pro_image.innerHTML = `
        <img src="${detail_item_obj.image}.jpg" width="100%" id="main-image"
        >

            <div class="small-img-group">
                <div class="small-img-col">
                    <img src="${detail_item_obj.image}.jpg" width="100%" class="small-image">
               </div> 

                <div class="small-img-col">
                    <img src="image/products/f2.jpg" width="100%" class="small-image">
                </div>

                <div class="small-img-col">
                    <img src="image/products/f3.jpg" width="100%" class="small-image">
                </div>

                <div class="small-img-col">
                    <img src="image/products/f4.jpg" width="100%" class="small-image">
                </div>
            </div>`


single_pro_details.innerHTML = `
            <h6>Home / ${detail_item_obj.product_name}</h6>
            <h4>${detail_item_obj.product_name}</h4>
            <h2>${detail_item_obj.product_price}</h2>
            <select>
                <option>Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>XL</option>
                <option>XXL</option>
            </select>
            <input type="number" value="1">
            <button class="normal" onclick="addTobag('${detail_item_obj.Id}')"> Add To Cart</button>
            <h4>Product Details</h4>
            <span>Relaxed fit shirt in a patterned viscose weave. Features a resort collar, a French front and short sleeves. Straight cut them.Relaxed fit shirt in a patterned viscose weave.Features a resort collar, a French front and short sleeves. Straight cut hem.</span>`
}
}





let Mainimage = document.getElementById("main-image");
let Smallimage = document.getElementsByClassName("small-image");

Smallimage[0].addEventListener("click",function(){
    Mainimage.src=Smallimage[0].src;
})
Smallimage[1].addEventListener("click",function(){
    Mainimage.src=Smallimage[1].src;
})
Smallimage[2].addEventListener("click",function(){
    Mainimage.src=Smallimage[2].src;
})
Smallimage[3].addEventListener("click",function(){
    Mainimage.src=Smallimage[3].src;
})
