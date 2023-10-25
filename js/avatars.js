
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



inputMail.addEventListener('keyup', (e) => {

   change_img(avatar_logo,avatar_user);
   avatar_pass.style="display: none";
   avatar_error.style="display: none";
   avatar_happy.style="display: none";
   
   
});


inputPass.addEventListener('keyup', (e) => {

   change_img(avatar_logo,avatar_pass);
   avatar_user.style="display: none";
   avatar_error.style="display: none";

   
});

inputPass.addEventListener('focusout', (e) => {

   change_img(avatar_pass,avatar_happy);
   avatar_error.style="display: none";
   avatar_user.style="display: none";
   avatar_logo.style="display: none";
   
});

function change_img(avatar,img) {

      avatar.style="display: none";     
      img.style="display:block";

   }


// hover de password
botton_forgot.addEventListener("mouseover", (e) => { 

   avatar_logo.style="display: none";
   avatar_user.style="display: none";
   avatar_pass.style="display: none";   
   avatar_happy.style="display: none";   
   avatar_error.style="display: none";
   avatar_forgot.style="display:block";


});


botton_forgot.addEventListener("mouseout", (e) => {  
   avatar_logo.style="display:block";
   avatar_forgot.style="display: none";
   avatar_error.style="display: none";

});


