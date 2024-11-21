const profile = document.getElementById("profile")
const hisaab = document.getElementById("hisaab")
const signin = document.getElementById("signin")
const signup = document.getElementById("signup")
const siggout = document.getElementById("signout")
if(localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') == "True"){
  profile.style.display = 'block';
  hisaab.style.display = 'block';
  siggout.style.display = 'block';
  signin.style.display = 'none';
  signup.style.display = 'none';
}else{
  siggout.style.display = 'none';
  profile.style.display = 'none';
  hisaab.style.display = 'none';
}

function signout(){
    localStorage.removeItem('loggedIn');
    window.location = '/index.html';
}