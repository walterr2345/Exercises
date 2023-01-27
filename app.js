var clients = []
function saveLocalStorage() {

  let radioInputs = document.querySelectorAll('input[name="room"]');
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      var selectedRoom = radioInputs[i].value;
    }
  }

  let radioBedInputs = document.querySelectorAll('input[name="bed"]');
  for (let i = 0; i < radioBedInputs.length; i++) {
    if (radioBedInputs[i].checked) {
      var selectedBed = radioBedInputs[i].value;
    }
  }

  if (document.getElementById("smoking").checked) {
    var smok = true
  } else {
    smok = false
  }

  let registro = {
    arrivalDate: document.getElementById("ArriDate").value,
    nights: document.getElementById("nights").value,
    adults: document.getElementById("adults").value,
    childs: document.getElementById("childs").value,
    room: selectedRoom,
    bed: selectedBed,
    smook: smok,
    name: document.getElementById("name").value,
    email:document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  }
  clients.push(registro)
  localStorage.setItem("registro", JSON.stringify(clients))
  alert('Reservacion guardad con exito')
}

function borrar_localStorage() {
  localStorage.removeItem("registro")
}

function getLocalStorage() {

}


// function validationForms() {
//   let forms = document.forms["RegForm"]["arriDate"].value
//   console.log("Entra");
//   if (forms == "") {
//     const validation= document.createElement('label')
//     validation = <label>LLenar el campo Requerido</label>
//   }
// }

