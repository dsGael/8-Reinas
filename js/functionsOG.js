var counter = 0;

function showQueen(cell) {
  if (window.getComputedStyle(cell).backgroundImage == "none") {
    if (counter < 8) {
      cell.style = `
            background-image: url('./img/chessqueen.png');   
            background-size:3.7rem;
            background-repeat:no-repeat; 
            background-position:center;
        `;
      counter++;
    }
  } else {
    cell.style = `background-image:none;`;
    counter--;
  }
}
function limpiar() {
  document.querySelectorAll("td").forEach(td=>td.style.backgroundColor="");  
  
}

function limpiarReinas() {
  document.querySelectorAll("td").forEach(td=>td.style.backgroundImage="none");  
  
}

function changeColor(r, c) {
    var celda= document.getElementById("board");
    var r1=r, c1=c , r2=r, c2=c;
    var r3 = r, c3=c, r4=r,c4=c;
    for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.backgroundColor = "red";
        celda.rows[i].cells[c].style.backgroundColor = "red";


        if (r1<8 && c1<8){
          celda.rows[r1++].cells[c1++].style.backgroundColor = "red";
        }
        if(r2>-1 && c2<8){
          celda.rows[r2--].cells[c2++].style.backgroundColor = "red";
        }

        if(r3>-1 && c3>-1){
          celda.rows[r3--].cells[c3--].style.backgroundColor = "red";
        }
        if(r4<8 && c4>-1){
          celda.rows[r4++].cells[c4--].style.backgroundColor = "red";
        }
  }
}

function solution1(){
  limpiarReinas();
  counter=8;
  var celda= document.getElementById("board");
  var style=`
            background-image: url('./img/chessqueen.png');   
            background-size:3.7rem;
            background-repeat:no-repeat; 
            background-position:center; `;
  celda.rows[0].cells[0].style=style;
  celda.rows[1].cells[1].style=style;
  celda.rows[2].cells[2].style=style;
  celda.rows[3].cells[3].style=style;
  celda.rows[4].cells[4].style=style;
  celda.rows[5].cells[5].style=style;
  celda.rows[6].cells[6].style=style;
  celda.rows[7].cells[7].style=style;
}
