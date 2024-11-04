/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
document.querySelector("#add-members").onclick = () => {

    const $familyQuantity = document.querySelector("#family-quantity");
    const $familyMembers = document.querySelector("#family-members");
    const $calculations = document.querySelector("#calculations");
    const $oldest = document.querySelector("#oldest");
    const $youngest = document.querySelector("#youngest");
    const $averageAge = document.querySelector("#average-age");
    const $largestAnnualSalary = document.querySelector("#largest-annual-salary");
    const $smallestAnnualSalary = document.querySelector("#smallest-annual-salary");
    const $averageAnnualSalary = document.querySelector("#average-annual-salary");
    const $averageMonthlySalary = document.querySelector("#average-monthly-salary");

    if ($familyMembers.innerHTML !== "") {
        $familyMembers.innerHTML = "";
    }
        if (Number($familyQuantity.value) > 0) {

            for (let i = 1; i <= $familyQuantity.value; i++) {

                const $newDiv = document.createElement("div");
                $newDiv.id = `member-${i}`
                $newDiv.classList.add("margin-top");
                $familyMembers.appendChild($newDiv);

                const $nameLabel = document.createElement("label");
                $nameLabel.setAttribute("for", `name-input-${i}`);
                $nameLabel.textContent = "Name: ";
                $newDiv.appendChild($nameLabel);

                const $nameInput = document.createElement("input");
                $nameInput.setAttribute("type", "text");
                $nameInput.id = `name-input-${i}`;
                $nameInput.value = "Test";
                $newDiv.appendChild($nameInput);

                const $ageLabel = document.createElement("label");
                $ageLabel.setAttribute("for", `age-input-${i}`);
                $ageLabel.textContent = "Age: ";
                $ageLabel.classList.add("margin-left");
                $newDiv.appendChild($ageLabel);

                const $ageInput = document.createElement("input");
                $ageInput.setAttribute("type", "number");
                $ageInput.id = `age-input-${i}`;
                $ageInput.value = `${Math.floor(Math.random()*25)+18}`;
                $newDiv.appendChild($ageInput);

                const $salaryLabel = document.createElement("label");
                $salaryLabel.setAttribute("for", `salary-input-${i}`);
                $salaryLabel.textContent = "Annual salary: ";
                $salaryLabel.classList.add("margin-left");
                $newDiv.appendChild($salaryLabel);

                const $salaryInput = document.createElement("input");
                $salaryInput.setAttribute("type", "number");
                $salaryInput.id = `salary-input-${i}`;
                $salaryInput.value = `${Math.floor(Math.random()*10000000)}`;
                $newDiv.appendChild($salaryInput);
            }

            const $resetBtn = document.createElement("input");
            $resetBtn.setAttribute("type", "reset");
            $resetBtn.value = "Reset";
            $resetBtn.classList.add("margin-top");
            $familyMembers.appendChild($resetBtn);
            $resetBtn.onclick = () => {
                $familyMembers.innerHTML = "";
                $calculations.classList.add("hidden");
                $familyQuantity.value = '';
            }

            const $calculateBtn = document.createElement("input");
            $calculateBtn.setAttribute("type", "button");
            $calculateBtn.value = "Calculate";
            $calculateBtn.id = "calculate";
            $calculateBtn.classList.add("margin-top");
            $calculateBtn.classList.add("margin-left");
            $familyMembers.appendChild($calculateBtn);
            $calculateBtn.onclick = () => {
                let min = 0;
                let max = 0;
                let sum = 0;

                for (let i = 1; i <= $familyQuantity.value; i++) {
                    const ageToAdd = Number((document.querySelector(`#age-input-${i}`)).value);
                    console.log(`ageToAdd n°${i}: ${ageToAdd}`);
                    if (ageToAdd) {
                        if (min === 0) min = ageToAdd;
                        if (ageToAdd < min) min = ageToAdd;
                        if (ageToAdd > max) max = ageToAdd;
                        sum += ageToAdd;
                    }
                }
                $oldest.textContent = `The oldest age is: ${max}`
                $youngest.textContent = `The youngest age is: ${min}`
                $averageAge.textContent = `The average age is: ${(sum/$familyQuantity.value).toFixed(2)}`

                min = 0;
                max = 0;
                sum = 0;

                for (let i = 1; i <= $familyQuantity.value; i++) {
                    const salaryToAdd = Number((document.querySelector(`#salary-input-${i}`)).value);
                    console.log(`salaryToAdd n°${i}: ${salaryToAdd}`);
                    if (salaryToAdd) {
                        if (min === 0) min = salaryToAdd;
                        if (salaryToAdd < min) min = salaryToAdd;
                        if (salaryToAdd > max) max = salaryToAdd;
                        sum += salaryToAdd;
                    }
                }
                $largestAnnualSalary.textContent = `The largest annual salary is: ${max}`
                $smallestAnnualSalary.textContent = `The smallest annual salary is: ${min}`
                $averageAnnualSalary.textContent = `The average annual salary is: ${(sum/$familyQuantity.value).toFixed(2)}`
                $averageMonthlySalary.textContent = `The average monthly salary is: ${((sum/$familyQuantity.value).toFixed(2)/12).toFixed(2)}`
                sum = 0;

                $calculations.classList.remove("hidden");
            }
        }
    return false;
}
