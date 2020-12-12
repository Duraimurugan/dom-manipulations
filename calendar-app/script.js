const selectBox = document.getElementsByTagName('select')[0];
const ulTag = document.getElementsByTagName('ul')[0];

selectBox.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    console.log('changed');
    console.log(selectBox.value);
    let days = 31;
    if (['4', '6', '9', '11'].includes(selectedValue)) {
        days = '31';
    } else if (selectedValue === '2') {
        days = '28';
    }
    displayCalendar(days);
});

function displayCalendar(days) {
    ulTag.innerHTML = '';
    for(let i=1; i<=days; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        ulTag.appendChild(li);
    }
}

displayCalendar(31);