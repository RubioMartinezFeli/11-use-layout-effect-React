import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

  const [mostrar, setMostrar] = useState(false);

  const caja = useRef();
  const boton = useRef();


    /* La diferencia es que  de manera asincrona
       después de hacer los cambios en el DOM, mientras que useEffect no.
       Es decir useLayoutEffect se ejecuta antes de mostrar nada por pantalla
       y useEffect se ejecuta después de mostrar por pantalla*/

       useLayoutEffect(()=>{
            console.log("useLayoutEffect, Componente cargado!!!")
            /*//querySelector(#id) seleccionamos mediante id
            let caja = document.querySelector("#caja");
            caja.innerHTML = "HOLA!!";
            console.log(caja.getBoundingClientRect());*/

            /* Ahora accedemos mediante useRef (= caja), pero no es siempre
               visible tenemos una condición el el rederizado, por lo tanto 
               tenemos que comprobar si es visible o no si ponemos return
               sale del useEffect directamente*/

              
            


        }, []);

       useEffect(()=>{
            console.log("useEffect, Componente cargado!!!")
            /*let caja = document.querySelector("#caja");
            caja.innerHTML = "HOLA!!2";
            console.log(caja.getBoundingClientRect());*/

            if(caja.current == null) return

            const {bottom} = boton.current.getBoundingClientRect()

            console.log(bottom);

            caja.current.style.top = `${bottom + 45}px`;
            caja.current.style.left = `${bottom + 45}px`;


        }, [mostrar]);


  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
        {/* con prev recogemos el valor previo y
         indicamos que lo cambie a lo contrario */}
        <button ref={boton} onClick={() => setMostrar(prev => {
                                      console.log(prev, !prev);
                                      return !prev
                                      }
                          )}>Mostrar mensaje</button>

        {mostrar && (
                <div id='caja' ref={caja}>
                    Hola, soy un mensaje
                </div>
        )}
        
    </div>
  )
}
