const consum = document.getElementById('consum-energie');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('marimea-sistemului');
const numar = 1100;
const unitate = 'kWp';

function fun1() {
    out1.innerHTML = Math.round(consum.value / numar);
}

btn1.addEventListener('click', fun1);



