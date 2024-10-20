document.querySelector("#show-info").onclick = function () {
    const $firstName = document.querySelector("#first-name").value;
    const $secondName = document.querySelector("#second-name").value;
    const $lastName = document.querySelector("#last-name").value;
    const $age = Number(document.querySelector("#age").value);
    const $greetings = document.querySelector("#greetings");

    alert(`Your data: ${$firstName}, ${$secondName}, ${$lastName}, ${$age}`);
    $greetings.innerText = `Welcome, ${$firstName}!`;

    return false;
}