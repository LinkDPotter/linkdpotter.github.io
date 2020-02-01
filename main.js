var slide = 1;
var onClick = false;

function changeSlide(n) {
    let oldDiv = document.querySelector(`#slide${slide}`);
    onClick = true;
    slide += n;
    if (slide < 1) slide = 3;
    else if (slide >= 4) slide = 1;
    const newDiv = document.querySelector(`#slide${slide}`);

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
