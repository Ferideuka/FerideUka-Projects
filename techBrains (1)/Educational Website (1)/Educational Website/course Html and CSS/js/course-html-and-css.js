// Sign up log in
let headSignUpLogin = document.getElementById('headSignUpLogin');
let profileContainer = document.getElementById('profileContainer');
let proveOfAccount = localStorage.getItem("Account");
let profileName = document.getElementById('profile-name');
profileName.innerHTML =  '<i class="fa-solid fa-user"></i>' + localStorage.getItem("UserName") + ' ' + localStorage.getItem("LastName");

if (proveOfAccount == 'True') {
    headSignUpLogin.style.display = 'none';
    profileContainer.style.display = 'flex';
} else {
    headSignUpLogin.style.display = 'flex';
    profileContainer.style.display = 'none';
}
// Sign up log in End

// Log out
let logOutBtn = document.getElementById('log-out-btn');

logOutBtn.addEventListener('click', function(){
    localStorage.setItem("Account", "False");
});
// Log out End

// Search container
let searchContainer = document.getElementById('searchContainer');
console.log(searchContainer);
let searchBtn = document.getElementById('searchbutton');


searchBtn.addEventListener('click', function(){
    searchContainer.classList.toggle('search-container-on-off');
});

// Aply to be teacher
let createCourseBtn = document.getElementById('create-course-btn');

if (localStorage.getItem("Status") == "Teacher"){
    createCourseBtn.style.display = 'block';
} else {
    createCourseBtn.style.display = 'none';
}