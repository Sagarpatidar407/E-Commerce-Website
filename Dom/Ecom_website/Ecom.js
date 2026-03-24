document.addEventListener("DOMContentLoaded", function() {
    const items1 = [
        {
            Id: 'pro1',
            image: `image/products/f1`,
            Company_name: 'adidas',
            product_name: 'Cartoon Astronaut T-Shirts',
            rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
            product_price: '$50',
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
            product_name: 'Adidas T-Shirts',
            rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
            product_price: '$49',
        
        },
        {
            Id: 'pro4',
            image: `image/products/f4`,
            Company_name: 'adidas',
            product_name: 'Roadster T-Shirts',
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

    let pro_container = document.querySelector(".pro-container");
    let pro_container1 = document.querySelector(".pro-container1");

    if (pro_container) {
        let inner_html = '';
        items1.forEach(item => {
            inner_html += `
            <div class="pro" id='${item.Id}' >
                <img src="${item.image}.jpg">
                <div class="des">
                    <span>${item.Company_name}</span>
                    <h5>${item.product_name}</h5>
                    <div class="star">
                        ${item.rating_stars}
                    </div>
                    <h4>${item.product_price}</h4>
                </div>
                <a href="#"><i class="ri-shopping-cart-fill cart"></i></a> 
            </div>`;
        });
        pro_container.innerHTML = inner_html;
    }//<i class="ri-heart-line"></i>

    if (pro_container1) {
        let inner_html = '';
        items2.forEach(item => {
            inner_html += `
            <div class="pro" id='${item.Id}'>
                <img src="${item.image}.jpg">
                <div class="des">
                    <span>${item.Company_name}</span>
                    <h5>${item.product_name}</h5>
                    <div class="star">
                        ${item.rating_stars}
                    </div>
                    <h4>${item.product_price}</h4>
                </div>
                <a href="#"><i class="ri-shopping-cart-fill cart"></i></a>
            </div>`;
        });
        pro_container1.innerHTML = inner_html;
    }
});




























// document.addEventListener("DOMContentLoaded", function() {
// const items1 = [
//         {
//             Id: 'pro1',
//             image: `image/products/f1`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
//         },
//         {
//             Id: 'pro2',
//             image: `image/products/f2`,
//             Company_name: 'adidas',
//             product_name: 'Light blue Astronaut Shirt',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
//         },
//         {
//             Id: 'pro3',
//             image: `image/products/f3`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro4',
//             image: `image/products/f4`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro5',
//             image: `image/products/f5`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro6',
//             image: `image/products/f6`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro7',
//             image: `image/products/f7`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro8',
//             image: `image/products/f8`,
//             Company_name: 'adidas',
//             product_name: 'Light blue Astronaut Shirt',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         }
// ];

// const items2 = [
//         {
//             Id: 'pro9',
//             image: `image/products/n1`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
//         },
//         {
//             Id: 'pro10',
//             image: `image/products/n2`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
//         },
//         {
//             Id: 'pro11',
//             image: `image/products/n3`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro12',
//             image: `image/products/n4`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro13',
//             image: `image/products/f5`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro14',
//             image: `image/products/f6`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro15',
//             image: `image/products/f7`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         },
//         {
//             Id: 'pro16',
//             image: `image/products/f8`,
//             Company_name: 'adidas',
//             product_name: 'Cartoon Astronaut T-Shirts',
//             rating_stars: '<i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>',
//             product_price: '$49',
        
//         }
// ];

    

//     let pro_container = document.querySelector(".pro-container");
//     let pro_container1 = document.querySelector(".pro-container1");

//     inner_html = '';
//     items1.forEach(item => {
//         inner_html += `
//         <div class="pro" id='${item.Id}'>
//             <img src="${item.image}.jpg">
//             <div class="des">
//                 <span>${item.Company_name}</span>
//                 <h5>${item.product_name}</h5>
//                 <div class="star">
//                     ${item.rating_stars}
//                 </div>
//                 <h4>${item.product_price}</h4>
//             </div>
//             <a href="#"><i class="ri-shopping-cart-fill cart"></i></a>
//         </div>`;
//     });
//     pro_container.innerHTML = inner_html

//     // Product 2
//     inner_html = '';
//     items2.forEach(item => {
//         inner_html += `
//         <div class="pro" id='${item.Id}'>
//             <img src="${item.image}.jpg">
//             <div class="des">
//                 <span>${item.Company_name}</span>
//                 <h5>${item.product_name}</h5>
//                 <div class="star">
//                     ${item.rating_stars}
//                 </div>
//                 <h4>${item.product_price}</h4>
//             </div>
//             <a href="#"><i class="ri-shopping-cart-fill cart"></i></a>
//         </div>`;
//     });
//     pro_container1.innerHTML = inner_html;

// });




// let pro_contai = document.querySelector(".pro-container2");


// // detail page
// let pro1 = document.getElementById("pro1")
// pro1.addEventListener("click",function(){
//     window.location.href="sproductfile.html"

// })

// let pro2 = document.getElementById("pro2")
// pro2.addEventListener("click",function(){
//     window.location.href="sproductfile.html";
// })













