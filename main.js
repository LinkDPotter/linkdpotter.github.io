var slide = 1;
var onClick = false;
const slideMax = {slide: 4, secSlide: 2}

function changeSlide(n, name) {
    let oldDiv = document.querySelector(`#${name}${slide}`);
    onClick = true;
    slide += n;
    if (slide < 1) slide = slideMax[name] - 1;
    else if (slide >= slideMax[name]) slide = 1;
    const newDiv = document.querySelector(`#${name}${slide}`);

    oldDiv.className = "";
    newDiv.className = "active";
};

function changeCategory (name) {
    var table = document.querySelector("table");
    var old = document.querySelector('.commands-category').querySelector('.active');
    var clicked = document.querySelector('.commands-category').querySelector(`#${name}`).querySelector('a');
    var oldTable = document.querySelector('table').querySelector('.active');
    var newTable = document.querySelector(`#${name}-table`);

    if (oldTable.id != newTable.id) {
        table.className = "swipe";
        table.style.display = "none";
        clicked.className ='active';
        newTable.className = 'active';
        old.className = '';
        oldTable.className ='';
        window.setTimeout(() => {
            table.style.transition = "margin-left 0.15s linear";
            table.style.display = "inline";
            window.setTimeout(() => {
                table.className = "";
                window.setTimeout(() => {
                    table.style.transition = "";
                }, 150);
            }, 30);
        }, 10);
    }
}
