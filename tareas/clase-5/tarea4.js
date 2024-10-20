document.querySelector("#calc-btn").onclick = function () {
    const numbers = document.querySelectorAll("li");
    let sum = 0;
    let array = [];
    let mostFrequent = 0;
    let maxCount = 0;
    let count = {};

    numbers.forEach(number => {
        let num = Number(number.innerText);
        sum += num;
        array.push(num);
        count[num] = (count[num] || 0) + 1;
    })

    for (let num of array) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostFrequent = Number(num);
        }
    }

    const smallest = Math.min(...array);
    const biggest = Math.max(...array);

    document.querySelector('#average').innerHTML = `The average is: ${(sum/array.length).toFixed(2)}`;
    document.querySelector('#biggest').innerHTML = `The smallest number is: ${biggest}`;
    document.querySelector('#smallest').innerHTML = `The biggest number is: ${smallest}`;
    document.querySelector('#frequent').innerHTML = `The most frequent number is: ${mostFrequent}`;

    return false;
}