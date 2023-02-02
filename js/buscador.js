$(document).ready(main);

function main(){
    buscador();
}

var productos = [
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/campera2.jpg",titulo : "Campera resistente",precio : "$ 100",categoria : 'camperas'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/buso1.jpg",titulo : "Buzo facha",precio : "$ 20000",categoria : 'buzos'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/pantalon4.jpg",titulo : "Lompa de marca",precio : "$ 3000",categoria : 'pantalones'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/pantalon5.jpg",titulo : "Lompa lowcost",precio : "$ 200",categoria : 'pantalones'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/campera1.jpg",titulo : "Campera Tranki",precio : "$ 6000",categoria : 'camperas'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/remera1.jpg",titulo : "Remera piola",precio : "$ 20",categoria : 'remeras'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/remera2.jpg",titulo : "Remera flama",precio : "$ 900",categoria : 'remeras'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/pantalon1.jpg",titulo : "Pantalon facha",precio : "$ 155",categoria : 'pantalones'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/pantalon2.jpg",titulo : "Pantaloncito",precio : "$ 444",categoria : 'pantalones'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/pantalon3.jpg",titulo : "Alto lompa",precio : "$ 1500",categoria : 'pantalones'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/pantalon6.jpg",titulo : "Lompa para entrenar",precio : "$ 1500",categoria : 'ropa-deportiva'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/remera3.jpg",titulo : "Top deportivo",precio : "$ 1500",categoria : 'ropa-deportiva'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/campera3.jpg",titulo : "Campera deportivo",precio : "$ 4500",categoria : 'ropa-deportiva'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/mochila.jpg",titulo : "Mochila",precio : "$ 500",categoria : 'accesorios'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/gorra.jpg",titulo : "Gorra",precio : "$ 100",categoria : 'accesorios'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/gorra2.jpg",titulo : "Gorra invierno",precio : "$ 150",categoria : 'accesorios'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/gorra3.jpg",titulo : "Gorra facha",precio : "$ 100",categoria : 'accesorios'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/mochila2.jpg",titulo : "Mochila colorida",precio : "$ 150",categoria : 'accesorios'},
    {imagen : "https://matiasm12.github.io/ventaindumentaria.github.io/img/guante.jpg",titulo : "Guante",precio : "$ 150",categoria : 'accesorios'}
]

function buscador(){
    var barraDeBusqueda = document.querySelector(".busqueda");
    barraDeBusqueda.addEventListener('click', e =>{
        if(e.target.classList.contains('boton-buscar')){
            let input=e.target.parentElement;
            let producto = input.querySelector('.barra-de-busqueda').value;
            let productosEncontrado = [];
            productos.forEach(item => {
                if(item.titulo.toLowerCase() === producto.toLowerCase()){
                    var productoEncontrado ={
                        imagen:item.imagen,
                        titulo:item.titulo,
                        precio:item.precio,
                        cantidad:1
                    }
                    productosEncontrado.push(productoEncontrado);
                }
            })
            console.log(productosEncontrado);
            guardarTitulo(producto);
            localStorage.setItem("lista-de-prductos",JSON.stringify(productosEncontrado))
        }    
    })
}

function guardarTitulo(nombreProducto){
    nombreProducto = nombreProducto.charAt(0).toUpperCase() + nombreProducto.slice(1).toLowerCase();
    localStorage.setItem("titulo-producto",nombreProducto);
    
}