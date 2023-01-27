function guardar_localStorage() {

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

    let registro = {
        arrivalDate: document.getElementById("ArriDate").value,
        nights: document.getElementById("nights").value,
        adults: document.getElementById("adults").value,
        childs: document.getElementById("childs").value,
        room: selectedRoom,
        bed: selectedBed,
        smook: document.getElementById("smoking").value,
        name: document.getElementById("name").value
    }
    console.log(registro);

    localStorage.setItem("registro",JSON.stringify( registro))
}


function borrar_localStorage() {
    localStorage.removeItem("registro")
}

function obtener_locarStorage() {
    let registro = JSON.parse(localStorage.getItem("registro"))
    console.log(registro);
}

