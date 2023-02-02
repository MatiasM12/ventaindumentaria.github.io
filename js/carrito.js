$(document).ready(main);
var listaDeProductos = document.querySelector(".contenedor-productos-carrito");
var listaDeProductosCarrito = JSON.parse(localStorage.getItem("lista-carrito"));

function main(){
    let cantTotal= 0;
    listaDeProductosCarrito.forEach(item => crearCarrito(item,cantTotal)); 
    
    
    elimarDeCarrito();
    cambiarCantidad();
    crearTotal();
    actualizarCantCarrito();
}

function crearCarrito (lista,cantTotal) { 
    // crea un nuevo div de la tarjetas
    let producto = document.createElement("div");
    producto.className="productos-carrito";
    producto.innerHTML = `
        <img src=${lista.imagen} alt="" class="imagen-carrito">
        <h5 class="titulo">Producto: ${lista.titulo}</h5>
        <div class="cantidad">
            <span class="restar-cantidad" onclick="location.reload()">➖</span>
            <h5>Cantidad:</h5>
            <h5 class="cantidad-productos">${lista.cantidad}</h5>
            <span class="sumar-cantidad"  onclick="location.reload()">➕</span>
        </div>
        <h5 class="precio" >Precio: ${lista.precio}</h5>
        <a class="boton-eliminar-de-carrito" href="">❌</a>   
    `

    listaDeProductos.append(producto);
}


function elimarDeCarrito(){
    var listaDeTarjetas = document.querySelector(".contenedor-productos-carrito");
    var datosDeProducto;
    if(listaDeTarjetas != null){
        listaDeTarjetas.addEventListener('click', e =>{
        if(e.target.classList.contains('boton-eliminar-de-carrito')){
            let producto=e.target.parentElement;
            let imagen = producto.querySelector('img').src;
            let titulo = producto.querySelector('.titulo').textContent;
            let precio = producto.querySelector('.precio').textContent;
            let cantidad = producto.querySelector('.cantidad-productos').textContent;
            datosDeProducto={
                    imagen:imagen,
                    titulo:titulo,
                    precio:precio,
                    cantidad:cantidad
            }
            
            const indice = listaDeProductosCarrito.findIndex((elemento, indice) => {
                if (elemento.imagen === datosDeProducto.imagen ) {
                  return true;
                }
              });

            let totalNuevo = parseInt(localStorage.getItem("total-carrito")) ;
            let preciototal = parseInt(datosDeProducto.precio.slice(9));
            
            totalNuevo-= (preciototal*datosDeProducto.cantidad);
            actulizarTotal(totalNuevo)
            let cant = localStorage.getItem("cant-productos-carrito") || 0;
            cant-= datosDeProducto.cantidad;
            localStorage.setItem("cant-productos-carrito",cant)
            listaDeProductosCarrito.splice(indice,1);
            localStorage.setItem("lista-carrito",JSON.stringify(listaDeProductosCarrito))
        }
    })}
}

function cambiarCantidad(){
    var listaDeTarjetas = document.querySelector(".contenedor-productos-carrito");
    var datosDeProducto;
    if(listaDeTarjetas != null){
        listaDeTarjetas.addEventListener('click', e =>{
            let producto=e.target.parentElement.parentElement;
            let imagen = producto.querySelector('img').src;
            let titulo = producto.querySelector('.titulo').textContent;
            let precio = producto.querySelector('.precio').textContent;
            let cantidad = parseInt(producto.querySelector('.cantidad-productos').textContent);
            datosDeProducto={
                    imagen:imagen,
                    titulo:titulo,
                    precio:precio,
                    cantidad:cantidad
            }
            if(e.target.classList.contains('sumar-cantidad')){
                listaDeProductosCarrito.map((produc)=>{
                        if(produc.imagen === datosDeProducto.imagen){
                            produc.cantidad++;
                            let totalNuevo = parseInt(localStorage.getItem("total-carrito"));
                            var preciototal = parseInt(produc.precio.slice(1));
                            totalNuevo+= preciototal;
                            console.log(totalNuevo);
                            actulizarTotal(totalNuevo)
                            let cant = localStorage.getItem("cant-productos-carrito") || 0;
                            cant++;
                            localStorage.setItem("cant-productos-carrito",cant)
                        }
                })
            }
            if(e.target.classList.contains('restar-cantidad')){
                listaDeProductosCarrito.map((produc)=>{
                        if(produc.imagen === datosDeProducto.imagen && produc.cantidad>1){
                            produc.cantidad--;
                            let totalNuevo = localStorage.getItem("total-carrito");
                            var preciototal = parseInt(produc.precio.slice(2))
                            totalNuevo-= preciototal;
                            console.log(totalNuevo);
                            actulizarTotal(totalNuevo)
                            let cant = localStorage.getItem("cant-productos-carrito") || 0;
                            cant--;
                            localStorage.setItem("cant-productos-carrito",cant)
                            
                        }
                })
            }
            localStorage.setItem("lista-carrito",JSON.stringify(listaDeProductosCarrito))
            
    })}
}

function crearTotal(){
    let totalCarrito = document.createElement("h1");
    totalCarrito.className="total-carrito";
    totalCarrito.textContent = "Total: "+ localStorage.getItem("total-carrito");
    document.querySelector(".total").append(totalCarrito);
}

function actulizarTotal(total){
    localStorage.setItem("total-carrito",total);
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