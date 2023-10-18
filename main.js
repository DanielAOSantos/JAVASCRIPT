function tocaSom(idElementoAudio){  
document.querySelector(idElementoAudio).play('');
}       


const lista = document.querySelectorAll('.tecla')    

for (contador = 0; contador < lista.legnth;){}

while(contador < 9, lista.legnth){
    lista [contador].classList[1];

    const instrumento = lista[contador];
    const tecla = lista[contador];
    const idAudio = `#som_${instrumento}`;

    tecla[contador].onclick = function(){
        tocaSom(idAudio);
    };
}
