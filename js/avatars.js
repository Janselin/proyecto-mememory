
// Cambio de avatars

const avatar_logo = document.querySelector("#avatar-logo")
const avatar_user = document.querySelector("#avatar-user");
const avatar_forgot = document.querySelector("#avatar-forgot");
const avatar_pass = document.querySelector("#avatar-pass");
const avatar_happy = document.querySelector("#avatar-happy");
const avatar_error = document.querySelector("#avatar-error");
const botton_forgot  = document.querySelector(".link-contraseña");

const inputMail = document.querySelector("#usuario");
const inputPass = document.querySelector("#contraseña");


// funcion donde oculta una img y activa otra.
function change_img(avatar,img) {

   avatar.style="display: none";     
   img.style="display:block";

};

// funcion donde oculta todos los avatares.
function hideAvatars() {

   avatar_forgot.style="display: none";
   avatar_error.style="display: none";
   avatar_logo.style="display: none";
   avatar_user.style="display: none";
   avatar_pass.style="display: none";   
   avatar_happy.style="display: none";   
   
};

// valida si se esta escribiendo
inputMail.addEventListener('keyup', (e) => {

   
   hideAvatars()
   change_img(avatar_logo,avatar_user);
   
});

// valida si se esta escribiendo
inputPass.addEventListener('keyup', (e) => {

   
   hideAvatars()
   change_img(avatar_logo,avatar_pass);
   
});


// valida si se sale del foco del input password
inputPass.addEventListener('focusout', (e) => {

   
   hideAvatars()
   change_img(avatar_pass,avatar_happy);
   
});



// hover de password
botton_forgot.addEventListener("mouseover", (e) => { 
   hideAvatars()
   avatar_forgot.style="display:block";

});

// hover desactivado de password
botton_forgot.addEventListener("mouseout", (e) => {  
   hideAvatars() 
   avatar_logo.style="display:block";
  

});


