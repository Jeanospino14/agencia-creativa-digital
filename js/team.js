console.log("Está funcionando JS")
'use strict'
const grande = document.querySelector('.teamcontainer_carrousel--container')
const punto = document.querySelectorAll('.teamcontainer_puntos--punto')

//Cuando click en cada punto
//Saber la posición de ese punto
//Aplicar un transform tanslateX al grande
//Quitar la clase activo de todos los puntos
//Añadir la clase activo al punto que hemos hecho clic

punto.forEach((cadaPunto, i) => {
    //Aqui asignamos un CLICK a cada punto
    punto[i].addEventListener('click', () => {
        //Guardar la posición de ese punto
        let position = i
        //Calculadon el espacio que debe desplazarse el grande
        let operacion = position * -10
        //aqui movemos el grande
        grande.style.transform = `translateX(${operacion}%)`
        //aqui recoremos todos los puntos
        punto.forEach((cadaPunto, i) => {
            //quitamos la clase activo a todos los puntos
            punto[i].classList.remove('activo')
        })
        //Añadir la clase activo en el punto que hemos hecho click
        punto[i].classList.add('activo')
    })
})
