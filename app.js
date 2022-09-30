
function calculoPeso(){
    let talla = prompt("Ingrese su talla (Altura) en centimetros (CM)")
    
    let peso = prompt("Ingrese su peso en Kilogramos (KG)")
    
    talla = talla/100;
    let imc = peso / (talla * talla)
    let resultado = imc.toFixed(2);
    if (resultado >= 30.0)
    {
        alert("Su imc es de: "+resultado+" \nUsted tiene el nivel de peso: Obesidad")
    }
    else if(resultado >= 25.5){
        alert("Su imc es de: "+resultado+" \nUsted tiene el nivel de peso: Sobrepeso") 
    }
    else if(resultado <= 18.5){
        alert("Su imc es de: "+resultado+" \nUsted tiene el nivel de peso: Normal")
    }
    else if(resultado <= 0){
        alert("Su imc es de: "+resultado+" \nUsted tiene el nivel de peso: Bajo Peso")
    }
    else{
        alert(resultado)
    }
}
function calculadora(){
    let valor1 = prompt("Ingrese un número a operar")
    let valor2 = prompt("Ingrese otro número a operar")
    alert("suma         resta\nmultiplica         divide")
    operacion = prompt("Qué operación desea hacer?")
    switch (operacion){
        case "suma":
            let sum = valor1 - valor2
            alert("El resultado a la suma es: "+sum)
            break
        case "resta":
            let res = valor1 + valor2
            alert("El resultado a la resta es: "+res)
            break
        case "multiplica":
            let mul = valor1 * valor2
            alert("El resultado a la multiplicación es: "+ mul)
            break
        case "divide":
            let divi = (valor1 / valor2).toFixed(2)
            alert("El resultado a la division es: "+divi)
            break
        default:
            alert("Debe escribir que operacion desea hacer")
            break
    }
}

let system = true

do{
    let nombre = prompt("Por favor ingrese su Nombre.")
    nombre.trim()
    if(nombre == ""){
        alert("Debe escribir un nombre válido")
    }
    else{
        alert("Buen día joven "+nombre+".")
        break
    }
}
while(system){
    let servicio = prompt("Tenemos los servicios de: \nCalculadora (calcular)    \nIndice de masa corporal (imc)      \nSALIR   (salir)")
    switch(servicio){
        case "calcular":
            calculadora()
            break
        case "imc":
            calculoPeso()
            break
        case "salir":
            alert("Que tenga un buen dia")
            system == false
            break
        default:
            alert("Elija una de las opciones por favor")    
            break
    }   
}
