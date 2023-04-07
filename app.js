document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();
})



function iniciarApp(){

    cargarElementos()
    añadirAñoActual();
    aparecerPerro();

    controlarNav();

}


function controlarNav(){
    const nav = document.querySelector('.navegation');
    if(nav){
        mostrarNav(nav)
    }
}

function mostrarNav(nav){
    const menu = document.querySelector('.menu');
    if(menu){
        menu.addEventListener('click',()=>{
           nav.classList.toggle('displayvisible')
        })
    }
}

function aparecerPerro(){
    window.addEventListener('scroll',()=>{
        const containerPerro = document.querySelector('.social-media');
            if(containerPerro){
                const imgPerro = document.querySelector('.silueta-perro img');
                if(containerPerro.getBoundingClientRect().top<=575){
                    setTimeout(()=>{
                        imgPerro.classList.add('asomar');
                    },500)
                  
                 
                }
            }
     
        
    })
}


function añadirAñoActual(){
    date = new Date();
    const year = date.getFullYear();
  
    const footerP = document.querySelector('.footer p');
    if(footerP){
        footerP.textContent = `${year} ©️ by Gonzalo Hernandez Design`

    }
}

function cargarElementos(){
    const heroText = document.querySelector('.hero-text');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.navegation')
    if(heroText){
        añadirClase(heroText,'left',1000)
    }
    añadirClase(logo,'left',0)
    añadirClase(nav,'right',0)

}



function añadirClase(element,direccionAnimacion,time){

    setTimeout(()=>{
        element.classList.add(direccionAnimacion)
    },time)

   
 
       
  
}