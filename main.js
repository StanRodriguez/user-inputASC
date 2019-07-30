const button = document.getElementById("submit");
const username = document.getElementById("username");

function submitForm(e) {
  e.preventDefault();

  //   console.log(username.value);
  const name = username.value;

  alert(name);
  username.value = "";
}

function documentWrite(e) {
  //   console.log(e.target.value);
  //   e.preventDefault();

  document.getElementById("text").innerHTML = e.target.value;
}

button.addEventListener("click", submitForm);
username.addEventListener("keypress", documentWrite);
