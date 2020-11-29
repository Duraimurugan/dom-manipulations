
const stars = document.querySelectorAll('.star');
const ratingResult = document.querySelector('.ratingResult');

stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.dataset.rating;

        ratingResult.innerText = rating + ' star';
        stars.forEach((s) => {
            s.classList.remove('selected');
            if (s.dataset.rating <= rating) {
                s.classList.add('selected');
            }
        });
    });
});