let registros = JSON.parse(localStorage.getItem("registro"))



for (let i = 0; i < registros.length; i++) {
    const registro = registros[i];
    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${registro.arrivalDate}</td>
    <td>${registro.nights}</td>
    <td>${registro.adults}</td>
    <td>${registro.childs}</td>
    <td>${registro.room}</td>
    <td>${registro.bed}</td>
    <td>${registro.smook}</td>
    <td>${registro.name}</td>
    <td>${registro.email}</td>
    <td>${registro.phone}</td>
    `

    console.log(registro);

}