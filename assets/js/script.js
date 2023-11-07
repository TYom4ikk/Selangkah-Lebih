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

let Email = document.getElementById("email");
let Password = document.getElementById("password");
let conifurm_password = document.getElementById("conifurm_password");
let Name = document.getElementById("name");
let Surname = document.getElementById("surname");

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
  console.log(DataArray[0]);
  alert("Данные записаны!");
});
