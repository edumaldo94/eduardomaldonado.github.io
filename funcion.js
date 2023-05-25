

const imagenes =document.querySelectorAll('.fotLimpieza')
const imagenesLight= document.querySelector('.agregar-imagen')
const imagenesFlech= document.getElementById('agimagen')

const contenedorLight= document.querySelector('.imagen-light')
const fleD=document.querySelector('.flechDer')
const fleIz=document.querySelector('.flechIzq')
const sacar=document.getElementsByClassName('flechDer')
const sacariz=document.getElementsByClassName('flechIzq')
var indiceActual = 0;
var  verifica=true;
// Agregar el evento de clic a cada imagen
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', (t) =>{
     
        aparecerImagen(imagen.getAttribute('src'))
        
          sacar.item(0).style.display='block';
          sacariz.item(0).style.display='block';
       
        
    })
   
})



contenedorLight.addEventListener('click', (e)=>{
if  (e.target !== imagenesLight){
    contenedorLight.classList.toggle('show')
imagenesLight.classList.toggle('showImage')

}





})


const aparecerImagen= (imagen)=>{
 
imagenesLight.src =imagen;
contenedorLight.classList.toggle('show')
imagenesLight.classList.toggle('showImage')
imagenesFlech.classList.toggle('showImage')
imagenesFlech.classList.toggle('show')



}




fleIz.addEventListener('click', (t)=>{

    if(!t.target == fleD || fleIz  ){
        anteriorIndice()
     
    
   
    
      
    }
    })
        fleD.addEventListener('click', (t)=>{
          
            if(!t.target == fleD || fleIz  ){
                siguienteIndice()
             
            
           
               
    
            }
           
            
        })
    
        function siguienteIndice() {
            if (indiceActual < imagenes.length - 1) {
              indiceActual++;
            } else {
              indiceActual = 0;
            }
            aparecerImagen(imagenes[indiceActual].getAttribute('src'))
             
           
          }
         
          function anteriorIndice() {
            if (indiceActual > 0) {
              indiceActual--;
            } else {
              indiceActual = imagenes.length - 1;
            }
            aparecerImagen(imagenes[indiceActual].getAttribute('src'))
            
          }
    
       