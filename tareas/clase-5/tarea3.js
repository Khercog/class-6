//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#calculate-total-time").onclick = function () {
    // const classNumber = Number(document.querySelectorAll("#classes-number").innerText);
    const hours = document.querySelectorAll(".hours");
    const minutes = document.querySelectorAll(".minutes");
    const seconds = document.querySelectorAll(".seconds");

    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    for (let i = 0; i < hours.length; i++) {
        totalHours += Number(hours[i].value);
    }
    for (let i = 0; i < minutes.length; i++) {
        totalMinutes += Number(minutes[i].value);
    }

    for (let i = 0; i < seconds.length; i++) {
        totalSeconds += Number(seconds[i].value);
    }

    totalMinutes += totalSeconds / 60;
    totalHours += totalMinutes / 60;

    document.querySelector("h2").innerText = `Total time: `;
    document.querySelector("h2").innerText += ` ${Math.floor(totalHours)} hours ${Math.floor(totalMinutes % 60)} minutes ${totalSeconds % 60} seconds`;

    return false;
}