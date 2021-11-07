const contenedorProductosRemeras = document.getElementById('Contenedor-Productos-Remeras')

mostrarRemerars(stockRemeras)

function mostrarRemerars(array) {
    contenedorProductosRemeras.innerHTML = ``
    array.forEach((productoNuevo) => {
        let article = document.createElement(`article`)
        article.classList.add(`producto`)
        article.innerHTML = `  
            <article class= "col-4 d-flex flex-column  align-items-center">
              <img src= "${productoNuevo.imagen}" alt= "${productoNuevo.nombre}">
              <p class="nombreProducto">${productoNuevo.nombre}</p> 
              <p>talle: ${productoNuevo.talle}</p>
              <p>precio: $${productoNuevo.precio}</p>
              <button id="boton${productoNuevo.id}" class="boton-agregar">Agregar</button> 
            </article>`
        contenedorProductosRemeras.appendChild(article)

        let boton = document.getElementById(`boton${productoNuevo.id}`)

        boton.addEventListener('click', () => {
            agregarRemeraCarrito(productoNuevo.id)
        })
    });
}