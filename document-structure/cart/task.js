const productElems = document.querySelectorAll('.product');
const productControl = document.querySelectorAll('.product__quantity-control');
const productValue = document.querySelector('.product__quantity-value');
console.log(productValue.innerHTML)





for (let i = 0; i < productControl.length; i++) {
    productControl[i].addEventListener('click', e => {
        if (productControl[i].classList.contains('product__quantity-control_inc')) {
            console.log(productValue.innerText++)
        }
        if (productControl[i].classList.contains('product__quantity-control_dec')) {
            if (productValue.innerHTML > 0) {
                productValue.innerText--
            }
            if (productValue.innerHTML <= 0) {
            }
        }
    })
}


    // document.addEventListener('click', e => {
    //     if (e.target.classList.contains('product__quantity-control_inc')) {
    //         console.log(e.target.children.innerText++)
    //     }
    //     if (e.target.classList.contains('product__quantity-control_dec')) {
    //         console.log(e.target.children.innerText++)
    //         if (e.target.children.innerHTML > 0) {
    //             console.log(e.target.children.innerText++)
    //             e.target.children.innerText--
    //         }
    //         if (productValue.innerHTML <= 0) {
    //         }
    //     }
    // })


// function addCart(){
//     const html = `<div class="cart__product" data-id="1">
//     <img class="cart__product-image" src="image.png">
//     <div class="cart__product-count">${}</div>
// </div>>`;
//             let parentChat = document.querySelector('#chat-widget__messages');
//             let div = document.createElement('div');
//             div.innerHTML = html;
//             parentChat.append(div);


            
//     const cartProducts = document.querySelector('.cart__products');

// 	cartProducts.innerHTML = link.getAttribute('title');
// 	tooltip.classList.add('tooltip_active');
// }
