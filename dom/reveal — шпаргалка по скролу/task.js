// const bodyElement = document.querySelector('body');
//const element = document.querySelector('.reveal');
// const elementOffsetParent = element.offsetParent;//Получаем родительльский элемент оносительно которого позиционирован наш элемент
// console.log(elementOffsetParent);

//     const elementOffsetLeft = element.offsetLeft;//Получаем позицию элемента относительно предка
//     const elementOffsetTop = element.offsetTop;
//     console.log(elementOffsetLeft, elementOffsetLeft);

//     const elementOffsetWidth = element.offsetWidth;//Общая Ширина объекта общая включая рамки полосу прокрутки и тд
//     const elementOffsetHeight = element.offsetHeight;//Общая Высота объекта
//     console.log(elementOffsetWidth, elementOffsetHeight);

//     const elementClientLeft = element.clientLeft;//Отсупы объекта от внешей его части(рамки и прокрутка)
//     const elementClientTop = element.clientTop;
//     console.log(elementClientLeft, elementClientTop);

//     const elementClientWidth = element.clientWidth;//Ширина объекта но без рамок и полосы прокрутки
//     const elementClientHeight = element.clientHeight;
//     console.log(elementClientWidth, elementClientHeight);

//     const elementScrollWidth = element.scrollWidth;//Размеры объекта включающие в себя прокрученную (которую не видно) часть
//     const elementScrollHeight = element.scrollHeight;
//     console.log(elementScrollWidth, elementScrollHeight);

// //размеры прокрученной области
// const elementScrollLeft = element.scrollLeft;
// const elementScrollTop = element.scrollTop;
//     console.log(elementScrollLeft, elementScrollTop);
//     bodyElement.scrollTop = 900; //не работает(объект на странице сразу должен быть прокручен на 900 пикселей)
//     element.scrollTop = 900;// не работает

// //Получем координаты элемента на странице относительно окна браузера
// const getElementCoords = element.getBoundingClientRect();
// //const getElementCoords = element.getBoundingClientRect().top;
// console.log(getElementCoords);

// //Получем координаты элемента на странице относительно окна браузера
// const getElementTopDocumentCoords = getElementCoords + window.pageYOffset;
// console.log(getElementTopDocumentCoords);

// //Получение объекта по заданным координатам относительно окна браузеера (при скроле будут постоянно меняться)
// const elem = document.elementsFromPoint(100,100);
// console.log(elem);

// const{top, bottom} = element.getBoundingClientRect();
// console.log(top, bottom);

// const elementTop = element.getBoundingClientRect().top;
// const elementBottom = element.getBoundingClientRect().bottom;
// console.log(elementTop,elementBottom);



// for(let i = 0; i < element.length; i++){
//     const elementOffsetParent = element[i].offsetParent;
//     console.log(elementOffsetParent);
//     const elementOffsetLeft = element[i].offsetLeft;
//     const elementOffsetTop = element[i].offsetTop;
//     console.log(elementOffsetLeft, elementOffsetLeft)
// }


// const element = document.querySelectorAll('.reveal');

// function inVisible(el){
//         //const {top, bottom} = el.getBoundingClientRect();
// const elementTop = element.getBoundingClientRect().top;
// const elementBottom = element.getBoundingClientRect().bottom;
//         if(elementBottom < 0){
//             el.classList.remove('reveal_active');
//         }
//         if(elementTop > window.innerHeight){//элемент находится ниже области просмотра
//             el.classList.remove('reveal_active');
//         }
//         el.classList.add('reveal_active');
//     }


// window.addEventListener('scroll', function () {
//     for(let i = 0; i < element.length; i++){
//     inVisible(element[i]);
//     }
// });

const element = document.querySelectorAll('.reveal');

function inVisible(el){
        //const {top, bottom} = el.getBoundingClientRect();
const elementTop = el.getBoundingClientRect().top;
const elementBottom = el.getBoundingClientRect().bottom;
        if(elementBottom < 0){
            return false//el.classList.remove('reveal_active');
        }
        if(elementTop > window.innerHeight){//элемент находится ниже области просмотра
            return false //el.classList.remove('reveal_active');
        }
        return true
        //el.classList.add('reveal_active');
    }


window.addEventListener('scroll', function () {
    for(let i = 0; i < element.length; i++){
    if(inVisible(element[i])){
        element[i].classList.add('reveal_active');
    }
    else {
        element[i].classList.remove('reveal_active');
    }
    }
}
);

