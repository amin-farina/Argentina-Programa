// Devolverá el índice donde encontró al elemento. Recibe el valor a buscar y el arreglo donde buscará

function sequentialSearch(element, array){

  for (var i in array){

    if (array[i] == element) return i; 

  }

  return -1;

}

 var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

// console.log(sequentialSearch("g",letters));


var numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {

  return a - b;

});

// console.log(numbers);



function addElement () {

  // obtener el elemento div con id = "div_example"

  const existDiv = document.getElementById("div_example");

  // crear un nuevo elemento div 

  const newDiv = document.createElement("div");

  // agregar el nuevo elemento div existente

  existDiv.appendChild(newDiv);

} ;



// Creacion de un elemento JSON

var JSONObj = { nombreLibro: 'El Hacedor', precio: 500 };

// console.log(JSONObj);

// Transformar javascript a JSON

var deportista = { 
  nombre : "Lionel Messi",
  copas : "20"
}

// console.log(JSON.stringify(deportista));

// Transformar JSON a javascript

var deportista2 = `{"nombre":"Lionel Messi","copas":"20"}`;

// console.log(JSON.parse(deportista2));


// Obtener informacion de un JSON

  fetch ('http://127.0.0.1:5500/assets/JSON/ejemplo.json')
  .then((response) => response.json())
  .then((members) => {
    const nombresDeMiembros = members.members.map((member) => member.name);
    const anosDeMiembros = members.members.map((member) => member.age);
    const idDeMiembros = members.members.map((member) => member.index);
    const sexoDeMiembros = members.members.map((member) => member.gender);
    const activoDeMiembros = members.members.map((member) => member.isActive);
    var dato = " "
    var HTML = " "
    for (var i = 0; i < nombresDeMiembros.length; i++) {
      if (activoDeMiembros[i]){
         dato = ('<td class="table-success text-center">' + activoDeMiembros[i] + '</td>' );
      }
      else{
          dato = ('<td class="table-danger text-center">' + activoDeMiembros[i] + '</td>' )
      }
      document.getElementById("js").innerHTML += 
      '<tr>' + 
      '<th scope="row">' + idDeMiembros[i] + '</th>' + 
      '<td>' + nombresDeMiembros[i] + '</td>' + 
      '<td>' + sexoDeMiembros[i] + '</td>' +
      '<td>' + anosDeMiembros[i] + '</td>' + 
      dato + 
      '</tr>';
    }
  });




  

