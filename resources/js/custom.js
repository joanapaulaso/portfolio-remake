const sphere = document.querySelector('#sphere');

function setProperty(duration) {
  sphere.style.setProperty('--animation-time', duration +'s');
  sphere.style.setProperty('--animation-time-1', duration +'s');
  sphere.style.setProperty('--animation-time-2', duration +'s');
}

const animationDuration = Math.random() * (1000 - 750) + 750;
const animationDuration1 = Math.random() * (750 - 500) + 500;
const animationDuration2 = Math.random() * (500 - 250) + 250;

setProperty(animationDuration);
setProperty(animationDuration1);
setProperty(animationDuration2);

console.log(animationDuration);
console.log(animationDuration1);
console.log(animationDuration2);
