function comparar() {
    //Extrae los valores de los combobox
    var cars1 = document.getElementById("cars1");
    var cars2 = document.getElementById("cars2");

    //Genera nuevos arrays vacíos
    var array1 = [];
    var array2 = [];
    var array3 = [];

    //Agrega los valores de los combobox 
    //a 2 de los arrays creados anteriormente    
    for (var i = 0; i < cars1.length; i++) {
        array1.push(cars1[i].value.trim());
    }
    for (var i = 0; i < cars2.length; i++) {
        array2.push(cars2[i].value.trim());
    }

    //Busca si existe el valor del array2 en el array1
    //y los agrega en el caso de que no existan
    for (var i = 0; i < array1.length; i++) {
        var existe = array1.includes(array2[i]);
        if (!existe) {
            array3.push(array1[i]);
        }
    }
}