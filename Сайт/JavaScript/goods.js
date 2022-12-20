const cart = {
    "goods1":{
        "name":"Мороженое протеиновое Манго-маракуйя без сахара",
        "url":"goods.html",
        "image":"Image/goods/1.jpg",
        "price": 109
    },
    "goods2":{
        "name":"Мороженое пломбир ванильное Пряник без ГМО и добавок",
        "url":"#",
        "image":"Image/goods/2.jpg",
        "price": 79
    },
    "goods3":{
        "name":"Сорбет Лимончелло мягкая ваниль без ГМО и добавок",
        "url":"#",
        "image":"Image/goods/3.webp",
        "price": 339
    },
    "goods4":{
        "name":"Мороженое пломбир Сырный с пробиотиками селеном и йодом",
        "url":"#",
        "image":"Image/goods/4.webp",
        "price": 89
    },
    "goods5":{
        "name":"Мороженое молочное клубника со сливками",
        "url":"#",
        "image":"Image/goods/5.webp",
        "price": 90
    },
}
let out = `<div class="conteiner">`;
for(let key in cart){
    out += `<div href="ya.ru" draggable="false" class="goods">`;
    out += `<div><img draggable="false" src="${cart[key]['image']}" alt="" class="goods_img"></div>`;
    out += `<div class="sub_goods">`;
    out += `<div>${cart[key]['name']}</div>`;
    out += `<div class="sub_sub_goods">`;
    out += `<div class="price">${cart[key]['price']} ₽</div>`;
    out += `<div class="add">`;
    out += `<button type="submit" class="bat to-cart" data-articul="${key}">+</button>`;
    out += `</div>`;
    out += `</div>`;
    out += `</div>`;
    out += `</div>`;
}
out += `</div>`;
document.querySelector('.main').innerHTML = out;

const data = {};

document.querySelector('.main').addEventListener('click',event =>{
    if (event.target.classList.contains('to-cart')){
        let  articul = event.target.dataset['articul'];
        if (data[articul] !== undefined){
            data[articul]['count']++;
        }else{
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart',JSON.stringify(data));
    }
})
$(document).ready(function(){
    $('.goods').hover(
        function() {
            $( this ).removeClass('class-name');
        }, function() {
            $( this ).addClass('class-name');
        }
    );
});