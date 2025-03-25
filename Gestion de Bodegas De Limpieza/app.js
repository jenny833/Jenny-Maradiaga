function calcular() {
    const precios = {
        "Cemento": 40,
        "Ladrillo": 45,
        "Varilla": 60,
        "Arena": 200,
        "Ceramica": 42,
        "Grava": 100,
        "Madera": 100,
        "Lamina": 30,
        "Piedra": 25,
    
}
    const producto = document.getElementById('producto').value;

   
    const cantidad = parseFloat(document.getElementById('cantidad_entregada').value);

    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingrese una cantidad válida.");
        return;
    }

    const precio = precios[producto];


    const total = precio * cantidad;

    document.getElementById('producto_entregado').value = producto;
    document.getElementById('Total').value = total + " Lps";
}


function Nuevo_Registro() {

document.getElementById('nombre_encargado').value = '';
document.getElementById('nombre_empleado').value = '';
document.getElementById('producto_entregado').value = '';
document.getElementById('cantidad_entregada').value = '';
document.getElementById('fecha_entrega').value = '';
document.getElementById('Total').value = '';
}
