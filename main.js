const homeImg = ["https://jooinn.com/images/welcome-12.png", "https://www.maropost.com/wp-content/uploads/2019/06/The-Welcome-Email_06042019-01.jpg", "http://respondr.io/wp-content/uploads/2016/07/Why_Welcome_Emails_Work.jpg"];
var slide = 0;
var onClick = false;

function changeSlide(n) {
    const img = document.querySelector('.slide').querySelector('img');
    onClick = true;
    slide += n;
    if (slide < 0) slide = homeImg.length - 1;
    else if (slide >= homeImg.length) slide = 0;
    img.src = homeImg[slide];
};

function changeCategory (name) {
    var old = document.querySelector('.commands-category').querySelector('.active');
    var clicked = document.querySelector('.commands-category').querySelector(`#${name}`).querySelector('a');
    var oldTable = document.querySelector('table').querySelector('.active');
    var newTable = document.querySelector(`#${name}-table`);

    if (oldTable.id != newTable.id) {
        clicked.className ='active';
        newTable.className = 'active';
        old.className = '';
        oldTable.className ='';
    };
};