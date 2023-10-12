let btn = document.querySelectorAll('button')
let body = document.querySelector('body')
let blocks = document.querySelectorAll('.item')

btn.forEach((item, i) => {
    console.log(i);
    item.addEventListener('click', function () {

        if (i == 0) {
            body.style.background = 'red'
        } else if (i == 1) {
            body.style.background = 'blue'
        } else if (i == 2) {
            body.style.background = 'black'
        } else if (i == 3) {
            body.style.background = 'purple'
        } else if (i == 4) {
            body.style.background = 'yellow'
        }



    })


})

function getRandomInt() {
    return Math.floor(Math.random() * 256);
}
console.log(getRandomInt());
blocks.forEach((block, x) => {
    block.addEventListener('click', function () {

 block.style.background = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`

    })


})







