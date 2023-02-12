let elem = document.querySelector('#elem');
let parent = document.querySelector('#parent')
let canvas = document.querySelector('.canvas')

let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')

let offsetX;
let offsetY;

plus.addEventListener('click', () =>{
    canvas.width += 100;
    canvas.heigth += 100;
})

minus.addEventListener('click', () =>{
    canvas.width -= 100;
    canvas.heigth -= 100;
})

elem.addEventListener('dragstart', function(event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;

});

elem.addEventListener('dragend',function(event) {
    console.log(event.pageX, event.pageY);

    elem.style.top = (event.pageY - offsetY) + 'px';
    elem.style.left = (event.pageX - offsetX) + 'px'
});

parent.addEventListener('dragstart', function(event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;

});

parent.addEventListener('dragend',function(event) {
    console.log(event.pageX, event.pageY);

    parent.style.top = (event.pageY - offsetY) + 'px';
    parent.style.left = (event.pageX - offsetX) + 'px'
});