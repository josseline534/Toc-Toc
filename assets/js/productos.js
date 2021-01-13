class Producto {
    constructor(nombre, imagen, categoria, precio, estado) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categoria = categoria;
        this.precio = precio;
        this.estado = estado;
    }
}
let prod = new Producto()
prod = [new Producto("Paracetamol", "assets/img/productos/Paracetamol.png","Farmacia",1.00,0),
        new Producto("Mascarillas", "assets/img/productos/mascarillas.png", "Farmacia", 3.95, 0),
        new Producto("Aceite", "assets/img/productos/aceite.png","Tienda",1.50,0),
        new Producto("Alcohol", "assets/img/productos/alcohol.png", "Tienda", 5.00, 0),
        new Producto("Atun", "assets/img/productos/atun.png","Tienda",1.80,0),
        new Producto("Audifonos", "assets/img/productos/audifonos.png", "Tecnologia", 10.00, 0),
        new Producto("Cargador", "assets/img/productos/cargador.png","Tecnologia",1.50,0),
        new Producto("Cereal", "assets/img/productos/cereal.png", "Tienda", 5.00, 0),
        new Producto("Ensoy", "assets/img/productos/ensoy.png","Farmacia",18.00,0),
        new Producto("Ferrum", "assets/img/productos/ferrum.png", "Farmacia", 20.00, 0),
        new Producto("Hamburguesa", "assets/img/productos/hamburguesa.png","Comidad",5.70,0),
        new Producto("Helado", "assets/img/productos/helado.png", "Comida", 5.00, 0),
        new Producto("Leche saborizada", "assets/img/productos/lecheSaborizada.png","Tienda",3.00,0),
        new Producto("Leche", "assets/img/productos/lechetoni.png", "TIenda", 1.00, 0),
        new Producto("Mantequilla", "assets/img/productos/mantequilla.png","Tienda",1.30,0),
        new Producto("Mouse", "assets/img/productos/mouse.png", "Tecnologia", 15.00, 0),
        new Producto("Mulgatol", "assets/img/productos/mulgatol.png","Farmacia",1.00,0),
        new Producto("Parlantes", "assets/img/productos/parlantes.png", "Tecnologia", 23.95, 0),
        new Producto("Parrillada", "assets/img/productos/parrillada.png","Comida",15.50,0),
        new Producto("Pizza", "assets/img/productos/pizza.png", "Comida", 15.00, 0),
        new Producto("Queso Crema", "assets/img/productos/quesoCrema.png","Tienda",2.80,0),
        new Producto("Supan", "assets/img/productos/supan-blanco.png", "Tienda", 1.30, 0),
        new Producto("Tacos", "assets/img/productos/tacos.png","Comida",3.50,0),
        new Producto("Teclado", "assets/img/productos/teclado.png", "Tecnologia", 15.00, 0),
        new Producto("Torta", "assets/img/productos/tortas.png","Comida",18.00,0),
        new Producto("Vitamina C", "assets/img/productos/vitaminaC.png", "Farmacia", 20.00, 0),
    ]
const mostrarTodos = () => {
    subMenu.style.display="none"
    productos.innerHTML =``
    for(let i=0; i<prod.length; i++){
        productos.innerHTML +=
        `<li class="boxProducto">
            <img src=${prod[i].imagen} class="imgProd" alt="${prod[i].nombre}" srcset="">
            <h5>${prod[i].nombre}</h5>
            <p>${prod[i].precio}</p>
            <a href="#" class="btn btnPrincipal" onclick="agregarCompra(${i})">Seleccionar</a>
        </li>`
    }
}
const mostrarFarmacia = () => {
    subMenu.style.display="none"
    productos.innerHTML =``
    for(let i=0; i<prod.length; i++){
        if(prod[i].categoria == 'Farmacia'){
            productos.innerHTML +=
            `<li class="boxProducto">
                <img src=${prod[i].imagen} class="imgProd" alt="${prod[i].nombre}" srcset="">
                <h5>${prod[i].nombre}</h5>
                <p>${prod[i].precio}</p>
                <a href="#" class="btn btnPrincipal" id="selectProd${i}" onclick="agregarCompra(${i})">Seleccionar</a>
            </li>`
        }
    }
}
const mostrarTienda = () =>{
    subMenu.style.display="none"
    productos.innerHTML =``
    for(let i=0; i<prod.length; i++){
        if(prod[i].categoria == 'Tienda'){
            productos.innerHTML +=
            `<li class="boxProducto">
                <img src=${prod[i].imagen} class="imgProd" alt="${prod[i].nombre}" srcset="">
                <h5>${prod[i].nombre}</h5>
                <p>${prod[i].precio}</p>
                <a href="#" class="btn btnPrincipal" id="selectProd${i}" onclick="agregarCompra(${i})">Seleccionar</a>
            </li>`
        }
    }
}
const mostrarComida = () =>{
    subMenu.style.display="none"
    productos.innerHTML =``
    for(let i=0; i<prod.length; i++){
        if(prod[i].categoria == 'Comida'){
            productos.innerHTML +=
            `<li class="boxProducto">
                <img src=${prod[i].imagen} class="imgProd" alt="${prod[i].nombre}" srcset="">
                <h5>${prod[i].nombre}</h5>
                <p>${prod[i].precio}</p>
                <a href="#" class="btn btnPrincipal" id="selectProd${i}" onclick="agregarCompra(${i})">Seleccionar</a>
            </li>`
        }
    }
}
const mostrarTecnologia = () =>{
    subMenu.style.display="none"
    productos.innerHTML =``
    for(let i=0; i<prod.length; i++){
        if(prod[i].categoria == 'Tecnologia'){
            productos.innerHTML +=
            `<li class="boxProducto">
                <img src=${prod[i].imagen} class="imgProd" alt="${prod[i].nombre}" srcset="">
                <h5>${prod[i].nombre}</h5>
                <p>${prod[i].precio}</p>
                <a href="#" class="btn btnPrincipal" id="selectProd${i}" onclick="agregarCompra(${i})">Seleccionar</a>
            </li>`
        }
    }
}
mostrarTodos()

const agregarCompra = (i) =>{
    let total = prod[i].precio + parseFloat(precio.innerText)
    console.log(total);
    tbody.innerHTML +=
    `<tr>
        <td>${prod[i].nombre}</td>
        <td>${prod[i].precio}</td>
    </tr>`
    precio.innerHTML=`${total}`
}

const abrirSubMenu = () =>{
    if(subMenu.style.display=="block")
        subMenu.style.display="none"
    else
        subMenu.style.display="block"
}
const realizarCompra = () =>{
    if(parseFloat(precio.innerText)> 0){
        alert("Compra realizada correctamente, Verifique el proceso de su pedido")
        btn.setAttribute("href","ruta_proceso.html")
    }
    else
        alert("No ah seleccionado producto")
}
