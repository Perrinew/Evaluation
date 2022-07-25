const checkEmail = (value) => {
    const regex = /^[\w-\.]+@([\w-]{3,7}\.)+[\w-]{2,3}$/
    return regex.test(value)
  }

  const checkpassword = (value) => {
    const regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    return regex2.test(value)
  }
  
  const myForm = document.getElementById('myForm')
  let Message
  
  myForm.addEventListener('submit', function(e) {
    let value = document.getElementById("email").value
    const email = checkEmail(value)
    if (email) {
      Message = 'Adresse email ajoutée !'
    } else {
      Message = 'Veuillez entrer une adresse e-mail valide'
    }
  
    document.getElementById("message1").innerHTML = Message
    e.preventDefault()
  })

  myForm.addEventListener('submit', function(e) {
    let value = document.getElementById("password").value
    const password = checkpassword(value)
    if (password) {
      Message = 'mdp correcte'
    } else {
      Message = 'Veuillez entrer un mdp correcte avec au moins 8 caractères 1 majuscule et 1 caractère spécial et au moins 2 chiffres'
    }
    document.getElementById("message2").innerHTML = Message
    e.preventDefault()
  })
  
  