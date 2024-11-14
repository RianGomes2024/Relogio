const horas=document.querySelector('#horas')
const minutos=document.querySelector('#minutos')
const segundos=document.querySelector('#segundos')

setInterval(relogio,1000)

function relogio(){

tempo=new Date()
h=tempo.getHours()
m=tempo.getMinutes()
s=tempo.getSeconds()

if (s<10){
s='0'+s
}
if(m<10){
    m='0'+m
}
if (h<10){
    h='0'+h
}


horas.textContent=h
minutos.textContent=m
segundos.textContent=s
} 