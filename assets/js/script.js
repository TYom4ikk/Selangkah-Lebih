var myLink = document.getElementsByClassName("link");

let Register = document.getElementById("right_block_Register");
let LogIn = document.getElementById("right_block_LogIn");

LogIn.style.display = "block";
Register.style.display = "none";

myLink[0].addEventListener("click", function (event) {
  if (LogIn.style.display == "block") {
    LogIn.style.display = "none";
    Register.style.display = "block";
  } else {
    LogIn.style.display = "block";
    Register.style.display = "none";
  }

  console.log("Ссылка была кликнута!");
});

myLink[1].addEventListener("click", function (event) {
  if (LogIn.style.display == "block") {
    LogIn.style.display = "none";
    Register.style.display = "block";
  } else {
    LogIn.style.display = "block";
    Register.style.display = "none";
  }

  console.log("Ссылка была кликнута!");
});

let R_Email = document.getElementById("Register_email");
let R_Password = document.getElementById("Register_password");
let R_conifurm_password = document.getElementById("Register_conifurm_password");
let R_Name = document.getElementById("Register_name");
let R_Surname = document.getElementById("Register_surname");

let L_Email = document.getElementById("LogIn_email");
let L_Password = document.getElementById("LogIn_password");

var Checkbox = document.getElementById("LogIn_checkbox");
var Masuk = document.getElementsByClassName("button");

const R_DataArray = [];
const L_DataArray = [];

function ClearUserRInfo() {
  R_Email.value = '';
  R_Password.value = '';
  R_conifurm_password.value = '';
  R_Name.value = '';
  R_Surname.value = '';
}

function ClearUserLInfo(){
  L_Email.value = '';
  L_Password.value = '';
}

Masuk[0].addEventListener("click", function(event){
  console.log("Попытка входа...");
  var isChecked = Checkbox.checked;

  if( L_Email.value !== '' &&
      L_Password.value !== '')
  {
    
    if(isChecked){
      alert("Система запомнит вас, для повторного входа!");
      L_DataArray.push({
        L_Email,
        L_Password
      });
  
      console.log(
        L_DataArray[0].L_Email.value,
        L_DataArray[0].L_Password.value,
      );
    }
    else{
      alert("Система НЕ запомнит вас, для повторного входа!")
    }

    ClearUserLInfo();
  }
  else{
    alert("Заполните все данные для продолжения!");
  }
});


Masuk[1].addEventListener("click", function (event) {
  console.log("Ссылка была кликнута!");

  if( R_Email.value !== '' &&
      R_Password.value !== '' &&
      R_conifurm_password.value !== '' &&
      R_Name.value !== '' &&
      R_Surname.value !== ''&&
      R_Password.value == R_conifurm_password.value)
  {
    R_DataArray.push({
      R_Email,
      R_Password,
      R_conifurm_password,
      R_Name,
      R_Surname,
    });
    
    console.log(
      R_DataArray[0].R_Email.value,
      R_DataArray[0].R_Password.value,
      R_DataArray[0].R_Name.value,
      R_DataArray[0].R_Surname.value,
    );
    alert("Данные записаны!");

    ClearUserRInfo();
  }
  else if(R_conifurm_password.value !== R_Password.value){
    alert("Пароли не совпадают!");
  }
  
  else{
    alert("Заполните все данные для продолжения!");
  }
});
