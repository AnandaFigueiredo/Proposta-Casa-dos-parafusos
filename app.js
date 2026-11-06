const extra=document.querySelector('#extra');
const slider=document.querySelector('#slider');
const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
function update(source){const number=Number(source.value);const count=Number.isFinite(number)?Math.min(4500,Math.max(0,Math.floor(number))):0;extra.value=count;slider.value=count;document.querySelector('#quantity').textContent=(500+count).toLocaleString('pt-BR')+' produtos no catálogo';document.querySelector('#additional').textContent=money(count);document.querySelector('#total').textContent=money(1600+count);}
extra.addEventListener('input',()=>update(extra));slider.addEventListener('input',()=>update(slider));update(extra);
