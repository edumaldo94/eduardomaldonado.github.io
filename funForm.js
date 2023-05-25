
const formulario = document.getElementById("formulario")
const nombreInput = document.getElementById("name")
const apellidoInput = document.getElementById("nameAp")
const emailInput = document.getElementById("email")
const mensajeInput = document.getElementById("msg")
const elegancia= document.getElementsByClassName('alertForm')
const nomaviso=document.querySelector('.nom')
const avisoApe= document.querySelector('.ape')
const avisoEmail= document.querySelector('.correo');
const avisoMsj= document.querySelector('.msj');
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     var nomYape = /^[a-zA-Z\s]+$/;
     
// Agregar un evento de escucha al formulario cuando se envíe
formulario.addEventListener("submit", e => {
     e.preventDefault();
     

 
  if (!nomYape.test(nombreInput.value)) {
   
    nomaviso.innerHTML= "Por favor, ingrese su nombre"
    nombreInput.className='alertForm'
    e.preventDefault(); // Evitar que el formulario se envíe
    return false;
  }else{
     nombreInput.className='alertFormVerd'
     nomaviso.innerHTML= " "
  }


  if (!nomYape.test(apellidoInput.value)) {
     
     avisoApe.innerHTML= "Por favor, ingrese su Apellido"
     apellidoInput.className='alertForm'
    e.preventDefault();
    return false;
  }else{
     apellidoInput.className='alertFormVerd'
     avisoApe.innerHTML=" "
  }
  
  
 
  if (!regex.test(emailInput.value)) {
  
    
     avisoEmail.innerHTML= "Por favor, correo electrónico"
     emailInput.className='alertForm'
    e.preventDefault();
    return false;
  }else{
     emailInput.className='alertFormVerd'
     avisoEmail.innerHTML=" "
  }
  
 
  if (!mensajeInput.value == "") {

    avisoMsj.innerHTML= "Por favor, ingrese un mensaje"
    mensajeInput.className='alertForm'
    e.preventDefault();
    return false;
  }else{
     mensajeInput.className='alertFormVerd'
     avisoMsj.innerHTML= " "
  }
  // Si todos los campos son válidos, el formulario se enviará
  alert("El formulario se ha enviado correctamente");


});

nombreInput.addEventListener("click", function(){
    
     if (nombreInput.value === "") {
          nombreInput.className='alertForm'

        }
     
     })
     apellidoInput.addEventListener("click", function(){
       
          if (apellidoInput.value === "") {
               apellidoInput.className='alertForm'
              nomaviso.innerHTML= "Por favor, ingrese su nombre"

             }
            

             if (!nombreInput.value=="") {
               nombreInput.className='alertFormVerd'
               nomaviso.innerHTML= " "
             }
          })
          emailInput.addEventListener("click", function(){
       
               if (emailInput.value === "") {
                    emailInput.className='alertForm'
                  avisoApe.innerHTML="Por favor, ingrese su nombre"
     
                  }
                  if(!apellidoInput.value == ""){
                    apellidoInput.className='alertFormVerd'
                    avisoApe.innerHTML= " "
                  }
     
                  if (!nombreInput.value=="") {
                    nombreInput.className='alertFormVerd'
                    nomaviso.innerHTML= " "
                  }
               })
  
               mensajeInput.addEventListener("click", function(){
       if(mensajeInput.value === ""){
          mensajeInput.className='alertForm'
          avisoEmail.innerHTML= "Por favor, ingrese su nombre"
       }else{
          mensajeInput.className='alertFormVerd'
       }

                    if (!emailInput.value == "") {
                         emailInput.className='alertFormVerd'
                         avisoEmail.innerHTML= " "
          
                       }
                       if(!apellidoInput.value == ""){
                         apellidoInput.className='alertFormVerd'
                         avisoApe.innerHTML= " "
                       }
          
                       if (!nombreInput.value=="") {
                         nombreInput.className='alertFormVerd'
                         nomaviso.innerHTML= " "
          
                       }
                    })
