// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigosecreto = [];
let i;
let sorteo;

function agregarAmigo(){
    let nombreAmigo=document.getElementById("amigo").value;
    if (nombreAmigo == ''){
        alert('Debe ingresar un nombre');
    }
    else{

        Amigosecreto.push(nombreAmigo);
        Limpiarcampo();
        reccorerLista();
    }
    
}

function Limpiarcampo(){
    document.getElementById("amigo").value="";
}

function reccorerLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for (i=0; i<Amigosecreto.length; i++){
        lista.innerHTML += `<li>${Amigosecreto[i]}</li>`;
    }
}


function sortearAmigo(){
    if (Amigosecreto.length==0){
        alert('Debe ingresar al menos un amigo');
    }else{
        sorteo = Math.floor(Math.random()*Amigosecreto.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = '';
        resultado.innerHTML += `<h2> El amigo secreto es ${Amigosecreto[sorteo]}</h2>`;
    }
}