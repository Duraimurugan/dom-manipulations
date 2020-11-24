document.addEventListener('click', () => {
    let rockets = document.querySelectorAll('div.rockets');
    let altitude, speed, distance;
    for(let i=0; i<rockets.length; i++) {
        altitude = rockets[i].dataset.altitude;
        speed = rockets[i].dataset.speed;
        distance = rockets[i].dataset.distance;

        rockets[i].style.top = altitude + 'px';
        rockets[i].style.transitionDuration = speed + 's';
        rockets[i].style.left = distance + 'px';
    }    
});