const firebaseConfig = {
  apiKey: "AIzaSyDX22M2lsjq6bc9lj-P5TPvl4A4Ze6Qk8s",
  authDomain: "the-hanging-house-test.firebaseapp.com",
  databaseURL: "https://the-hanging-house-test-default-rtdb.firebaseio.com",
  projectId: "the-hanging-house-test",
  storageBucket: "the-hanging-house-test.appspot.com",
  messagingSenderId: "963995219468",
  appId: "1:963995219468:web:da2472c6901d045c356029",
  measurementId: "G-P7FKE6KCPT"
};
//to initialize firebase
firebase.initializeApp(firebaseConfig);

//create reference for your database
var PlayerFormDB = firebase.database().ref("PlayerForm");

document.getElementById("PlayerForm").addEventListener("submit", submitform);

function submitform(e)
{
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var mobno = getElementVal('mobno');

    saveData(name, email, mobno);
}

const saveData = (name, email, mobno) =>
{
  var NewPlayerForm = PlayerFormDB.push();

  NewPlayerForm.set({
    name: name,
    email: email,
    mobno: mobno,
  })
};
