const header = document.getElementById("header");
const snoContainer = document.getElementById("sno");
const bodyContainer = document.getElementById("body-container");

const columns = 26, rows = 50;


//Creating Header Rows A to Z
for(let i = 1; i <= columns; i++){
    const headCell = document.createElement("div");
    headCell.className = "head-cell";
    headCell.innerText = String.fromCharCode(64 + i);
    header.appendChild(headCell);
}

//Creating S.No Columns 1 to 50
for(let i = 1;i <= rows; i++){
    const snoCell = document.createElement("div");
    snoCell.innerText = i;
    snoCell.className = "sno-cell";
    snoContainer.appendChild(snoCell);
}

for(let row = 1; row <= rows;row++){
    //Create a row
    const rowElement = document.createElement("div");
    rowElement.className = "row";

    for(let col = 1; col <= columns; col++){
        //Create a column
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.contentEditable = true;
        cell.id = `${String.fromCharCode(64 + col)}${row}`;
        rowElement.appendChild(cell);
        cell.addEventListener("focus", onFocusCell);
        cell.addEventListener("input", onChangeCellText);
    }
    bodyContainer.appendChild(rowElement);
} 