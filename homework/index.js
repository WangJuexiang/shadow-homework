'use strict';

let safari1 = document.getElementsByClassName('safari1')
let ubuntu1 = document.getElementsByClassName('ubuntu1')
let chrome1 = document.getElementsByClassName('chrome1')


let addButton = document.getElementsByClassName('addBrowser')
let deleteButton = document.getElementsByClassName('deleteBrowser')


function deleteIcon() {
    let child = document.getElementsByClassName('firefox1');
    let parent = document.getElementsByClassName('detail1-line1');
    parent.removeChild(child);
}


function popModal() {
    prompt('Seperate multiple resource name with commas','e.g.Chrome,Firefox')
}


