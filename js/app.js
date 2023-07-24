"use strict"

document.addEventListener('click', documentClick)

function documentClick(e) {
    const targetItem = e.target
    if (targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open')
    }
}

let str = 'demidaa';

function getCount(str) {
    let count = 0;
    for (let i of str.split('')){
        for (let el of ['a', 'e', 'i', 'o', 'u']) {
            if (i === el) {
                count++
            }
        }    
    }
    return count;
}

let res = getCount(str)
console.log(res)