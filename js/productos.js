$(document).ready(main);
var tarjetasDeProducto = document.querySelector(".producto");
var tarjetasDeProductosRelacionados = document.querySelector(".productos-relacionados");
var datosDeProducto = JSON.parse(localStorage.getItem("datosDeProducto"));


function main(){
    console.log(localStorage.getItem("datosDeProducto"));
    console.log(datosDeProducto.imagen.slice(21));
    crearProducto();
    listaDeRelacionados.forEach(item => crearRelacionados(item,tarjetasDeProductosRelacionados)); 
    botonVerMasRelacionados();
    añadirAlCarrito();
    actualizarCantCarrito();
}

function crearProducto() { 
    // crea un nuevo div de la tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.className="producto";
    
    tarjeta.innerHTML = `
        <div class="imagen">
            <img src=${datosDeProducto.imagen.slice(55)} alt="">
        </div>
        <div class="informacion">
            <h2 class="titulo">${datosDeProducto.titulo}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quidem perspiciatis, ipsa nostrum pariatur voluptatem ipsum minus, quos maxime error dolores. Dolor deserunt eos, atque explicabo optio fugiat exercitationem illo!</p>
            <p>Talles: M,L,XL</p>
            <p class="precio">${datosDeProducto.precio}</p>
            <p>en stock</p>
            <div class="boton-producto">
                <a class="boton-comprar" href="http://localhost:3000/carrito.html">Comprar</a>
            </div>
         </div>
    `
    tarjetasDeProducto.append(tarjeta);
}

var listaDeRelacionados = [
    {imagen : "/img/gorra.jpg",titulo : "Gorra",precio : "$ 100",categoria : 'accesorios'},
    {imagen : "/img/gorra2.jpg",titulo : "Gorra invierno",precio : "$ 150",categoria : 'accesorios'},
    {imagen : "/img/gorra3.jpg",titulo : "Gorra facha",precio : "$ 100",categoria : 'accesorios'},
    {imagen : "/img/mochila2.jpg",titulo : "Mochila colorida",precio : "$ 150",categoria : 'accesorios'},
    {imagen : "/img/guante.jpg",titulo : "Guante",precio : "$ 150",categoria : 'accesorios'}
]

function crearRelacionados (lista,idDiv) { 
    // crea un nuevo div de la tarjetas
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
            <a class="boton-ver-mas" href="http://localhost:3000/producto.html" >Ver mas</a>
            </div>
    `
    idDiv.append(tarjeta);
}


function botonVerMasRelacionados(){
    var datosDeProducto;
    var listaDeTarjetas = document.querySelector(".productos-relacionados")
    if(listaDeTarjetas != null){
        listaDeTarjetas.addEventListener('click', e =>{
        if(e.target.classList.contains('boton-ver-mas')){
            let producto=e.target.parentElement.parentElement;
            let imagen = producto.querySelector('img').src;
            let titulo = producto.querySelector('.titulo').textContent;
            let precio = producto.querySelector('.precio').textContent;
            datosDeProducto={
                    imagen:imagen,
                    titulo:titulo,
                    precio:precio
            }
            console.log(datosDeProducto);
            localStorage.setItem("datosDeProducto",JSON.stringify(datosDeProducto))
        }
    })}
        
}



function añadirAlCarrito(){
    var datosDeProducto;
    var carrito = JSON.parse(localStorage.getItem("lista-carrito")) || [];
    var listaDeTarjetas = document.querySelector(".producto")
    if(listaDeTarjetas != null){
        listaDeTarjetas.addEventListener('click', e =>{
        if(e.target.classList.contains('boton-comprar')){
            let producto=e.target.parentElement.parentElement.parentElement;
            let imagen = producto.querySelector('img').src;
            let titulo = producto.querySelector('.titulo').textContent;
            let precio = producto.querySelector('.precio').textContent;
            datosDeProducto={
                    imagen:imagen,
                    titulo:titulo,
                    precio:precio,
                    cantidad:1
            }
            
            const repetido = carrito.some((productoRepetido) => productoRepetido.imagen == datosDeProducto.imagen);
            if(repetido){
                carrito.map((produc)=>{
                    if(produc.imagen === datosDeProducto.imagen){
                        produc.cantidad++;
                        let totalViejo = parseInt(localStorage.getItem("total-carrito")) ||0;
                        let totalNuevo = parseInt(produc.precio.slice(1))
                        totalViejo+=totalNuevo;
                        actulizarTotal(totalViejo)
                    }
                })
            }else{
                let totalViejo = parseInt(localStorage.getItem("total-carrito"))||0;
                let totalNuevo = parseInt(datosDeProducto.precio.slice(1))
                totalViejo+=totalNuevo;
                actulizarTotal(totalViejo)
                carrito.push(datosDeProducto)
            }
                
            let cant = localStorage.getItem("cant-productos-carrito") || 0;
            cant++;
            localStorage.setItem("cant-productos-carrito",cant)
            localStorage.setItem("lista-carrito",JSON.stringify(carrito))
        }
    })}
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