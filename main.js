let notas = []; // Creamos un array para almacenar las notas como objetos
    
    function guardarNota() {
      let nombre = document.getElementById("nombre").value;
      let nota = document.getElementById("nota").value;
      let nuevaNota = { nombre: nombre, nota: nota }; // Creamos un objeto para representar la nota
      
      notas.push(nuevaNota); // Agregamos el objeto al array de notas
      
      actualizarLista(); // Llamamos a una función para actualizar la lista visual de notas
    }
    
    function actualizarLista() {
      let notasList = document.getElementById("notasList");
      notasList.innerHTML = ''; // Limpiamos la lista antes de volver a llenarla
      
      notas.forEach(function(nota) {
        let listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(nota.nombre + ": " + nota.nota));
        notasList.appendChild(listItem);
      });
    }