$(document).ready(main);
var tarjetasDeProductosNuevosLanzamientos = document.getElementById("nuevos-lanzamientos");
var tarjetasDeProductosOfertas = document.getElementById("contenedor-ofertas");
var tarjetasDeProductosDestacados = document.querySelector(".carousel-inner");


function main(){
    listaDeDestacados.forEach(item => crearDestacado(item,tarjetasDeProductosDestacados));
    listaDeOfertas.forEach(item => crearTarjeta(item,tarjetasDeProductosOfertas));
    listaDeNuevosLanzamientos.forEach(item => crearTarjeta(item,tarjetasDeProductosNuevosLanzamientos));   
    botonVerMas();
    actualizarCantCarrito();
}


var listaDeNuevosLanzamientos = [
    {imagen : "/img/campera2.jpg",titulo : "Campera resistente",precio : "$ 100",categoria : 'camperas'},
    {imagen : "/img/buso1.jpg",titulo : "Buzo facha",precio : "$ 20000",categoria : 'buzos'},
    {imagen : "/img/pantalon4.jpg",titulo : "Lompa de marca",precio : "$ 3000",categoria : 'pantalones'},
    {imagen : "/img/pantalon5.jpg",titulo : "Lompa lowcost",precio : "$ 200",categoria : 'pantalones'},
    {imagen : "/img/campera1.jpg",titulo : "Campera Tranki",precio : "$ 6000",categoria : 'camperas'},
]

var listaDeOfertas = [
    {imagen : "/img/remera1.jpg",titulo : "Remera piola",precio : "$ 20",categoria : 'remeras'},
    {imagen : "/img/remera2.jpg",titulo : "Remera flama",precio : "$ 900",categoria : 'remeras'},
    {imagen : "/img/pantalon1.jpg",titulo : "Pantalon facha",precio : "$ 155",categoria : 'pantalones'},
    {imagen : "/img/pantalon2.jpg",titulo : "Pantaloncito",precio : "$ 444",categoria : 'pantalones'},
    {imagen : "/img/pantalon3.jpg",titulo : "Alto lompa",precio : "$ 1500",categoria : 'pantalones'}
]

function crearTarjeta (lista,idDiv) { 
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
            <a class="boton-ver" href="https://matiasm12.github.io/ventaindumentaria.github.io/producto.html" >Ver mas</a>
            </div>
        
    `
    idDiv.append(tarjeta);
}

var listaDeDestacados= [
    {imagen : "/img/remera1.jpg",titulo : "Remera piola",precio : "$ 20",categoria : 'remeras',descripcion: "remera para salir de manera casual" },
    {imagen : "/img/remera2.jpg",titulo : "Remera flama",precio : "$ 900",categoria : 'remeras',descripcion: "remera para entrenar con toda la facha" },
    {imagen : "/img/pantalon1.jpg",titulo : "Pantalon facha",precio : "$ 155",categoria : 'pantalones',descripcion: "pantalon para entrenar con toda la facha"},
]

function crearDestacado(lista,idDeDiv){
    //div carousel-item
    let carusel = document.createElement("div");
    if(lista == listaDeDestacados[0]){
        carusel.className = "carousel-item active";
    }else{
        carusel.className = "carousel-item ";
    }
    carusel.innerHTML = `
    <div class="tarjeta" >
        <img src=${lista.imagen} class="card-img-top" alt="..." style="width: 500px ; height: 400px;">
        <div class="card-body1" >
        <h5 class="card-title titulo" >${lista.titulo}</h5>
        <p class="card-text" >${lista.descripcion}</p>
        <a href="https://matiasm12.github.io/ventaindumentaria.github.io/producto.html" class="btn btn-primary boton-ver-mas">Ir al producto</a>
        </div>
    </div>
    `
    idDeDiv.append(carusel);
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


function botonVerMas(){
    var datosDeProducto;
    var listaDeTarjetas = document.getElementById("nuevos-lanzamientos")
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
            console.log(datosDeProducto);
            localStorage.setItem("datosDeProducto",JSON.stringify(datosDeProducto))
        }
    })}

    var listaDeTarjetas = document.getElementById("contenedor-ofertas")
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
            console.log(datosDeProducto);
            localStorage.setItem("datosDeProducto",JSON.stringify(datosDeProducto))
        }
    })}

    var listaDeTarjetasDestacadas = document.querySelector(".carousel-inner")
    if(listaDeTarjetasDestacadas != null){
        listaDeTarjetasDestacadas.addEventListener('click', e =>{
        if(e.target.classList.contains('btn')){
            let producto=e.target.parentElement.parentElement;
            let imagen = producto.querySelector('img').src;
            let titulo = producto.querySelector('.titulo').textContent;
            datosDeProducto={
                imagen:imagen,
                titulo:titulo,
            }
            localStorage.setItem("datosDeProducto",JSON.stringify(datosDeProducto))
        }
    })}

}

