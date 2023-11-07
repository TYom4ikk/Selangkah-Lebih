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

let Email = document.getElementById("Register_email");
let Password = document.getElementById("Register_password");
let conifurm_password = document.getElementById("Register_conifurm_password");
let Name = document.getElementById("Register_name");
let Surname = document.getElementById("Register_surname");

var Masuk = document.getElementsByClassName("button");
const DataArray = [];

Masuk[1].addEventListener("click", function (event) {
  console.log("Ссылка была кликнута!");
  DataArray.push({
    Email,
    Password,
    conifurm_password,
    Name,
    Surname,
  });
  
  console.log(
    DataArray[0].Email.value,
    DataArray[0].Password.value,
    DataArray[0].conifurm_password.value,
    DataArray[0].Name.value,
    DataArray[0].Surname.value,
  );
  alert("Данные записаны!");
});
