var numArr = ["",8,7,6,5,4,3,2,1,""];
var letArr = ["","A","B","C","D","E","F","G","H",""];
var figures = ["&#9823;","&#9820;","&#9822;","&#9821;","&#9819;","&#9818;","&#9821;","&#9822;","&#9820;"];

var table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.fontSize = "18px";

for(var i=0; i<10; i++) {
    var tr = document.createElement("tr");
    table.append(tr);
    for(var j=0; j<10; j++) {
        var td = document.createElement("td");
        td.style.width = "60px";
        td.style.height = "60px";
        td.style.textAlign = "center";

        if(i == 0 || i == 9) {
            td.innerHTML = letArr[j];
            td.style.transform = i == 0 ? "rotate(180deg)" : "";
        } else if(j == 0 || j == 9) {
            td.innerHTML = numArr[i];
            td.style.transform = j == 9 ? "rotate(180deg)" : "";
        } else {
            if(i % 2 == 0) {
                j % 2 == 0 ? td.style.backgroundColor = "#9E9E9E" : td.style.backgroundColor = "#616161";
            } else {
                j % 2 == 0 ? td.style.backgroundColor = "#616161" : td.style.backgroundColor = "#9E9E9E";
            }
            td.style.border = "1px solid #616161";
            td.style.fontSize = "48px";

            if(i == 1 || i == 8) {
                td.innerHTML = figures[j];
                td.style.color = i == 1 ? "#000" : "#FFF";
            } else if(i == 2 || i == 7) {
                td.innerHTML = figures[0];
                td.style.color = i == 2 ? "#000" : "#FFF";
            }
        }

        tr.append(td);
    }
}

document.querySelector("#appChess").append(table);