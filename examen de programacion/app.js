let productos = [];

function cargarProducto() {
    let nombre = document.getElementById("nombre").value;
    let codigo = document.getElementById("codigo").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    let categoria = document.getElementById("categoria").value;
    let fecha = new Date().toLocaleDateString();

    if (nombre && codigo && precio && stock && categoria) {
        let existe = productos.some(p => p.codigo == codigo);
        if (existe) {
            alert("El código ya existe. Intenta con otro.");
            return;
        }

        productos.push({ nombre, codigo, precio, stock, categoria, fecha });
        actualizarTabla();
        limpiarCampos();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function buscarProducto() {
    let codigo = document.getElementById("codigo").value;
    let producto = productos.find(p => p.codigo == codigo);

    if (producto) {
        document.getElementById("nombre").value = producto.nombre;
        document.getElementById("precio").value = producto.precio;
        document.getElementById("stock").value = producto.stock;
        document.getElementById("categoria").value = producto.categoria;
    } else {
        alert("Producto no encontrado.");
    }
}

function actualizarProducto() {
    let codigo = document.getElementById("codigo").value;
    let producto = productos.find(p => p.codigo == codigo);

    if (producto) {
        producto.nombre = document.getElementById("nombre").value;
        producto.precio = document.getElementById("precio").value;
        producto.stock = document.getElementById("stock").value;
        producto.categoria = document.getElementById("categoria").value;
        actualizarTabla();
        limpiarCampos();
    } else {
        alert("Producto no encontrado.");
    }
}

function eliminarProducto() {
    let codigo = document.getElementById("codigo").value;
    let index = productos.findIndex(p => p.codigo == codigo);

    if (index !== -1) {
        productos.splice(index, 1);
        actualizarTabla();
        limpiarCampos();
    } else {
        alert("Producto no encontrado.");
    }
}

function actualizarTabla() {
    let tabla = document.getElementById("productos");
    tabla.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Código</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Fecha de Registro</th>
        </tr>
    `;

    productos.forEach(p => {
        let fila = tabla.insertRow();
        fila.insertCell(0).innerText = p.nombre;
        fila.insertCell(1).innerText = p.codigo;
        fila.insertCell(2).innerText = `$${p.precio}`;
        fila.insertCell(3).innerText = p.stock;
        fila.insertCell(4).innerText = p.categoria;
        fila.insertCell(5).innerText = p.fecha;
    });
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("categoria").value = "";
}