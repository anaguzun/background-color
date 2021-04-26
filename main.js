const colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];
document.getElementById('btn').onclick = function changeColors(){
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};