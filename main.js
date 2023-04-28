alert("Bienvenidos a nuestra tienda virtual!! \n\nSomos una fruteria, donde puedes encontrar una variedad de frutas")

let usuario = prompt("Ingresa tu nombre: ")

alert(usuario + ", ¿Deseas ver que frutas tenemos disponibles?")

alert("Hola " + usuario + " ,tenemos estas frutas junto a sus precios: \n\n1. Manzanas (1kg = s/4)\n2. Naranjas (1kg = s/3)\n3. Plátano (1kg = s/6)\n4. Papaya (1kg = s/4)\n\nPara continuar apreta en 'Aceptar'")


let PrecioManz = 4
let PrecioNara = 3
let PrecioPlat = 6
let PrecioPapa = 4


function kilosFruta(fruta, precio){
    let kilos =0
    let compra = true
    do{
        kilos = parseInt(prompt("¿Cuantos kilos desea llevar de " + fruta + " ?"))
        if (kilos === null){
            break
        }else if (kilos>=0){
            PrecioFinal = precio * kilos
            break 
        }else{
            alert("No se ingreso cantidad correcta de kilos")
        }
    }
    while(compra)
    return kilos
}

let KilosManz = kilosFruta("Manzanas",PrecioManz)
let precioFinalManz = KilosManz * PrecioManz

let KilosNara = kilosFruta("Naranjas",PrecioNara)
let precioFinalNara = KilosNara * PrecioNara

let KilosPlat = kilosFruta("Plátano",PrecioPlat)
let precioFinalPlat = KilosPlat * PrecioPlat

let KilosPapa = kilosFruta("Papaya",PrecioPapa)
let precioFinalPapa = KilosPapa * PrecioPapa

let PrecioFinalCompra = precioFinalManz + precioFinalNara + precioFinalPlat + precioFinalPapa
alert("El resumen de la compra es: \n" + KilosManz+ " Kilos de Manzanas: s/"+ precioFinalManz+ "\n" +KilosNara+ " Kilos de Naranjas: s/"+ precioFinalNara + "\n" +KilosPlat+ " Kilos de Plátanos: s/"+ precioFinalPlat + "\n" +KilosPapa+ " Kilos de Papaya: s/"+ precioFinalPapa)
alert("El monto final de su compra es: s/" + PrecioFinalCompra)






