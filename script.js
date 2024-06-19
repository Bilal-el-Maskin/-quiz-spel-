document.getElementById("checkButton").addEventListener("click", function () {
    const antwoorden = [
        "Parijs",
        8,
        "IJsselmeer",
        ["volkswagen", "audi", "opel", "porsche", "bmw", "mercedes"],
        ["texel", "vlieland", "terschelling", "ameland", "schiermonnikoog"],
    ];
    var inputs = document.querySelectorAll('input[type="text"]');

    var alleCorrect = true;

    inputs.forEach(function (input, index) {
        var antwoord = String(input.value.trim()).toLowerCase();
        console.log(antwoorden[index] + "antwoord" + antwoord);
        if (typeof antwoorden[index] == "object") {
            if (antwoorden[index].includes(antwoord)) {
                input.style.backgroundColor = "lightgreen";
            } else {
                input.style.backgroundColor = "lightcoral";
                alleCorrect = false;
            }
        } else if (String(antwoorden[index]).toLowerCase() == antwoord) {
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "lightcoral";
            alleCorrect = false;
        }
    });

    var resultaatDiv = document.getElementById("resultaat");
    resultaatDiv.innerHTML = alleCorrect ? "Alle antwoorden zijn goed!" : "Er zijn foute antwoorden.";
});