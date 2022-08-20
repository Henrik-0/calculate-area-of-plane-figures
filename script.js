const listOp = document.getElementById("listFigures");
const area = document.getElementById("area");
const result = document.getElementById("result");

function square() {
    area.textContent = "";
    result.textContent = "";
    const input = document.createElement("input");
    input.type = "number";
    const label = document.createElement("label");
    label.textContent = "Side: ";
    area.appendChild(label)
    label.appendChild(input);

    const btn = document.createElement("button");
    area.appendChild(btn);
    btn.textContent = "Check"
    btn.addEventListener("click" , () => {
        const finalValue = input.value**2;
        result.innerHTML = `<p> The area of the square is: ${finalValue}`;
    });
};

function rectangle() {
    area.textContent = "";
    result.textContent = "";
    const inputb = document.createElement("input");
    inputb.type = "number";
    const labelb = document.createElement("label");
    labelb.textContent = "Base: ";
    area.appendChild(labelb);
    labelb.appendChild(inputb);

    const inputh = document.createElement("input");
    inputh.type = "number";
    const labelh =  document.createElement("label");
    labelh.textContent = "Height";
    area.appendChild(labelh);
    labelh.appendChild(inputh);

    const btn = document.createElement("button");
    area.appendChild(btn)
    btn.textContent = "Check";
    btn.addEventListener("click", () => {
        const finalValue = inputb.value * inputh.value;
        result.innerHTML = `<p>The area of the rectangle is: ${finalValue}`;
    });
};

function rhombus() {
    area.textContent = "";
    result.textContent = "";
    const inputD = document.createElement("input");
    inputD.type = "number";
    const labelD = document.createElement("label");
    labelD.textContent = "Bigger diagonal: ";
    area.appendChild(labelD);
    labelD.appendChild(inputD);

    const inputd = document.createElement("input");
    inputd.type = "number";
    const labeld = document.createElement("label");
    labeld.textContent = "Minor diagonal: ";
    area.appendChild(labeld);
    labeld.appendChild(inputd);

    const btn = document.createElement("button");
    area.appendChild(btn);
    btn.textContent = "Check";
    btn.addEventListener("click", () => {
        const finalValue = inputD.value * inputd.value / 2;
        result.innerHTML = `<p>The area of the rhombus is: ${finalValue}`;
    });
};

function parallelogram() {
    area.textContent = "";
    result.textContent = "";
    const inputb = document.createElement("input");
    inputb.type = "number";
    const labelb = document.createElement("label");
    labelb.textContent = "Base: ";
    area.appendChild(labelb);
    labelb.appendChild(inputb);

    const inputh = document.createElement("input");
    inputh.type = "number";
    const labelh = document.createElement("label");
    labelh.textContent = "Height: ";
    area.appendChild(labelh);
    labelh.appendChild(inputh);

    const btn = document.createElement("button");
    area.appendChild(btn);
    btn.textContent = "Check";
    btn.addEventListener("click", () => {
        const finalValue = inputb.value * inputh.value;
        result.innerHTML = `<p>The area of the parallelogram is: ${finalValue}`;
    });
};

function trapezium() {
    area.textContent = "";
    result.textContent = "";
    const inputB = document.createElement("input");
    inputB.type = "number";
    const labelB = document.createElement("label");
    labelB.textContent = "Bigger base: ";
    area.appendChild(labelB);
    labelB.appendChild(inputB);

    const inputb = document.createElement("input");
    inputb.type =  "number";
    const labelb = document.createElement("label");
    labelb.textContent = "Smaller base: ";
    area.appendChild(labelb);
    labelb.appendChild(inputb);

    const inputh = document.createElement("input");
    inputh.type = "number";
    const labelh = document.createElement("label");
    labelh.textContent = "Height: ";
    area.appendChild(labelh);
    labelh.appendChild(inputh);

    const btn = document.createElement("button");
    area.appendChild(btn);
    btn.textContent = "Check";
    btn.addEventListener("click", () => {
        const finalValue = (Number(inputB.value) + Number(inputb.value)) * inputh.value / 2
        result.innerHTML = `The area of the trapezium is: ${finalValue}`;
    });
};

listOp.addEventListener("change" , () => {
    const figure = listOp.options[listOp.selectedIndex].value;
    switch(figure) {
        case "square":
            square();
            break;
        case "rectangle":
            rectangle();
            break;
        case "rhombus":
            rhombus();
            break;
        case "parallelogram":
            parallelogram();
            break;
        case "trapezium":
            trapezium();
            break;
        case "triangle":
            triangle();
            break;
        case "circle":
            circle();
            break;
    };
});