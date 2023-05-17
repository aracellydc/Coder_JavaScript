alert("Bienvenidos a nuestra tienda virtual!! \n\nSomos una fruteria, donde puedes encontrar una variedad de frutas")

let usuario = prompt("Ingresa tu nombre: ")

alert(usuario + ", ¿Deseas ver que frutas tenemos disponibles?")


const Frutas = function(nombre, precio){
    this.nombre= nombre,
    this.precio = precio
}

let fruta1 = new Frutas("Manzanas",4)
let fruta2 = new Frutas("Naranjas",3)
let fruta3 = new Frutas("Plátano",6)
let fruta4 = new Frutas("Papaya",4)


let lista = [fruta1, fruta2,fruta3, fruta4]

function BuscarFruta(){
    let ingresa = prompt("Ingresa la fruta que deseas comprar").trim().toLowerCase()
    let resultado = lista.filter((Frutas) => Frutas.nombre.toLowerCase().includes(ingresa))

    if(resultado.length>0){
        console.table(resultado)
    }else{
        alert("No se encontro ninguna coincidencia con: "+ ingresa)
    }
}
console.table(lista)

function agregarFruta(){
    let nombre = prompt("Ingresa la fruta que nos falta en nuestra variedad:").trim();
    let precio = parseInt(prompt("Ingresa el precio que pagarias por esta fruta:"));

    if (isNaN(precio) || nombre ==="" ){
        alert("Ingresa valores válidos.")
        return;
    }
    let fruta = new Frutas(nombre, precio);


    if(lista.some((elemento) => elemento.nombre === fruta.nombre)){
        alert("El producto ya existe en nuestra tienda.");
        return;
    }

    lista.push(fruta);

    console.table(lista)
}


