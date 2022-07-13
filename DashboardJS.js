    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mobno = document.getElementById("mobno");
    
    const submit = document.getElementById("submit");
    
    const database = firebase.database()

    submit.addEventListener('click', (e) =>{
      e.preventDefault();
      database.ref('/users/'+id.value).set({
        username: name.value,
        useremail: email.value,
        usermobno: mobno.value
      });
    });
