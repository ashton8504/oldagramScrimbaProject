//JavaScript Section for Oldagram

const likeButton = document.getElementById('like-button');
const likeButton2 = document.getElementById('like-button2');
const likeButton3 = document.getElementById('like-button3');
const likecounts1 = document.getElementById('like-counts1');
const likecounts2 = document.getElementById('like-counts2');
const likecounts3 = document.getElementById('like-counts3');

let firstLikes = 21
let secondLikes = 4
let thirdLikes = 152


likeButton.addEventListener('click', function () {
    firstLikes += 1
    likecounts1.innerHTML = `${firstLikes} likes `
})

likeButton2.addEventListener('click', function () {
    secondLikes += 1
    likecounts2.innerHTML = `${secondLikes} likes `
})

likeButton3.addEventListener('click', function () {
    thirdLikes += 1
    likecounts3.innerHTML = `${thirdLikes} likes `
})