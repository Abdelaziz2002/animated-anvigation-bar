const form =document.getElementById('form')
const password1el=document.getElementById('password1')
const password2el=document.getElementById('password2')
const noteContainer=document.querySelector('.note-container')
const note=document.getElementById('note')

let isValid=false;
let=passwordMatch=false;

function userdata(){
    const user={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    }
    console.log(user);
} 

function validateForm(){
    isValid=form.checkValidity();
    if (!isValid) {
        note.textContent='please fill the form correctly❌'
        noteContainer.style.borderColor='red'
        note.style.color='red'
        note.style.fontSize='20px'
    }
    if (password1el.value===password2el.value) {
        passwordMatch=true;
        password1el.style.borderColor='green'
        password2el.style.borderColor='green'
    }else{
        password1el.style.borderColor='red'
        password2el.style.borderColor='red'
        note.textContent='make sure that passwords match'
        note.style.color='red'
        noteContainer.borderColor='red'
    }
    if (isValid && passwordMatch) {
        console.log('hmmmmm')
        note.textContent='succesfuly registered!'
        note.style.color='green'
        noteContainer.style.borderColor='green'
    }
}

function processformData(e){
    e.preventDefault();
    validateForm();
    if (isValid && passwordMatch){
        userdata();
    }
}

form.addEventListener('submit',processformData)