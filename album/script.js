let selectedImage = document.querySelector('.selected-image');
let possibleSelections = document.querySelector('.possible-selections');

// base condition
const imgSelected = document.createElement('img');
imgSelected.setAttribute('src', 'images/pic1.jpg');
selectedImage.appendChild(imgSelected);

for (let i = 1; i <= 5; i++) {
    const imgSelections = document.createElement('img');
    imgSelections.setAttribute('src', 'images/pic' + i + '.jpg');
    possibleSelections.appendChild(imgSelections);

    imgSelections.addEventListener('click', (e) => {
        console.log(e);
        imgSelected.setAttribute('src', e.target.src);
    });
}

function clicked(key) {
    const childElementCount = possibleSelections.childElementCount;
    const image = imgSelected.getAttribute('src');
    const splitStr = image.split('images/pic');
    currentSelectionNumber = splitStr[1].charAt(0);
    let newSelectionNumber;
    if (key === '+') {
        newSelectionNumber = (+currentSelectionNumber === childElementCount) ? 1 : +currentSelectionNumber + 1;
    } else {
        newSelectionNumber = (+currentSelectionNumber === 1) ? childElementCount : +currentSelectionNumber - 1;
    }
    imgSelected.setAttribute('src', 'images/pic' + newSelectionNumber + '.jpg');
}

// function next() {
//     const image = imgSelected.getAttribute('src');
//     const splitStr = image.split('images/pic');
//     currentSelectionNumber = splitStr[1].charAt(0);
//     const newSelectionNumber = +currentSelectionNumber + 1;
//     imgSelected.setAttribute('src', 'images/pic' + newSelectionNumber + '.jpg');
// }