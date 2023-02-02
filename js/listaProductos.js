$(document).ready(main);
var listaProductos =  JSON.parse(localStorage.getItem("lista-de-prductos"));
var divProductos = document.querySelector('.productos');

function main(){
    let tarjeta = document.createElement("div");
    if(listaProductos.length <= 0){
        tarjeta.innerHTML = `
        <h1 >No Hay</h1>
        `
        divProductos.append(tarjeta);
    }else{
        listaProductos.forEach(item => listarProductos(item,divProductos));
    }
    botonVerMas();
    actualizarCantCarrito();
}

function listarProductos(lista,idDiv){
        let tarjeta = document.createElement("div");
        tarjeta.className="tarjeta-producto";
        tarjeta.innerHTML = `
        <div class="img-producto">
        <img src=${lista.imagen} alt="" style="height: 250px;">
        </div>
        <div class="info-producto">
        <h2 class="titulo">${lista.titulo}</h2>
        <h2 class="precio">${lista.precio}</h2>
        </div>
        <div  class="boton-producto">
        <a class="boton-ver" href="http://localhost:3000/producto.html" >Ver mas</a>
        </div>`
        idDiv.append(tarjeta);
    
}

function botonVerMas(){
    var datosDeProducto;
    var listaDeTarjetas = document.querySelector(".productos")
    if(listaDeTarjetas != null){
        listaDeTarjetas.addEventListener('click', e =>{
        if(e.target.classList.contains("boton-ver")){
            let producto=e.target.parentElement.parentElement;
            let imagen = producto.querySelector('img').src;
            let titulo = producto.querySelector('.titulo').textContent;
            let precio = producto.querySelector('.precio').textContent;
            datosDeProducto={
                    imagen:imagen,
                    titulo:titulo,
                    precio:precio
            }
            localStorage.setItem("datosDeProducto",JSON.stringify(datosDeProducto))
        }
    })}



}

function actualizarCantCarrito(){
    let cantidadCarrito = document.querySelector('.cant-prductos-carrito');;
    if(parseInt(localStorage.getItem("cant-productos-carrito") || 0)  == 0){
        cantidadCarrito.style.display="none";
    }else{
        cantidadCarrito.style.display='block';
        cantidadCarrito.textContent = localStorage.getItem("cant-productos-carrito")
        
    }
}