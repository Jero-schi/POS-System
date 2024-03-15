console.log('hola');

const menus = document.querySelectorAll('.menus')
const inputSearch = document.querySelector('#busqueda')
const divCategorias = document.querySelector('.div-types')
const divRecientes = document.querySelector('.div-recientes')

let productosTicket = []

menus.forEach(menu => 
    menu.addEventListener('click', () => {
        menus.forEach(item => {
            item.classList.remove('color-menu')
        });
        menu.classList.add('color-menu')
    }));

inputSearch.addEventListener('input', () => {
    console.log(inputSearch.value);
    let results = alimentos.filter(item => 
        item.title.includes(inputSearch.value))
    console.log(results);
})

function pintarCategorias() {
    categories.forEach((item) => {
        
        divCategorias.innerHTML += `
        <div class="btn-types">
            <img src="imgs/Group.svg" alt="">
            <div>
                <p class="category-product">${item}</p>
                <p class="cantidad-items">${categorias(item)} items</p>
            </div>
        </div
        `
    })
}
pintarCategorias()

function pintarRecientes() {
    for (let i = 0; i < 8; i++) {
        const reciente = alimentos[i];
        divRecientes.innerHTML += `
        <div class="btn-recientes">
            <div class="info-recientes">
                <p class="title-product-reciente">${reciente.title}</p>
                <p class="price-product-reciente">$${reciente.precio}</p>
            </div>

            <div class="div-sumaresta-recientes">
                <div class="simbolo-resta">
                    <p>-</p>
                </div>
                <p class="contador-sumaresta">1</p>
                <div class="simbolo-suma">
                    <p>+</p>
                </div>
            </div>
        </div>
        `
    }
}
pintarRecientes()

const sumaReciente = document.querySelectorAll('.simbolo-suma')
const restaReciente = document.querySelectorAll('.simbolo-resta')
const contadorReciente =  document.querySelectorAll('.contador-sumaresta')
const productosRecientes = document.querySelectorAll('.info-recientes')
const cliente = document.querySelector('.cliente')

console.log(cliente);
// console.log(contadorReciente[0]);


sumaReciente.forEach((item, index) => {
    item.addEventListener('click', () => {
        let contador = contadorReciente[index].textContent
        contador++
        contadorReciente[index].innerHTML = contador
    })
})

restaReciente.forEach((item, i) => {
    item.addEventListener('click', () => {
        let contador = contadorReciente[i].textContent
        if (contador > 1) {
            contador--
            contadorReciente[i].innerHTML = contador
        }
    })
})

productosRecientes.forEach((item, i) => {
    item.addEventListener('click', () => {
        console.log(item, i);
        const titlesProducts = document.querySelectorAll('.title-product-reciente')
        const titleProduct = titlesProducts[i].textContent
        const cantidadProductos = Number(contadorReciente[i].textContent)
        const objProduct = alimentos.find(alimento => alimento.title === titleProduct)
        console.log(titleProduct,cantidadProductos);
        // console.log(objProduct);

        pintarProductosTicket(objProduct, cantidadProductos)
    })
})

function pintarProductosTicket(obj,cantidad) {
    console.log(obj);
    let newDiv = document.createElement('div')
    if (!document.querySelector('.div-productos')) {
        newDiv.classList.add('div-productos')
    
        cliente.insertAdjacentElement('afterend', newDiv)  
        newDiv.innerHTML += `
            <div class="producto">
                <p class="title-product">${obj.title}</p>
                <p class="cantidad-product">x${cantidad}</p>
    
                <p class="price-product">$${obj.precio * cantidad}</p>
                <img src="imgs/X.svg" alt="Borrar producto">
            </div>
        `
        productosTicket.push(obj)
        console.log(productosTicket);
    } else {
        const producto = document.querySelector('.producto')
        const nuevo = document.createElement('div')
        nuevo.classList.add('producto')
        
        producto.insertAdjacentElement('beforebegin',nuevo)
        nuevo.innerHTML = `
        <p class="title-product">${obj.title}</p>
        <p class="cantidad-product">x${cantidad}</p>
        
        <p class="price-product">$${obj.precio * cantidad}</p>
        <img src="imgs/X.svg" alt="Borrar producto">
        `
        productosTicket.push(obj)
        console.log(productosTicket);
    }

}

{/* <div class="producto">
                <p class="title-product">Coca Cola 500ml</p>
                <p class="cantidad-product">x3</p>

                <p class="price-product">$999</p>
                <img src="imgs/X.svg" alt="">
            </div> */}

{/* <div class="btn-types">
    <img src="imgs/Group.svg" alt="">
    <div>
        <p class="category-product">Bebidas</p>
        <p class="cantidad-items">99 items</p>
    </div>
</div> */}

{/* <div class="btn-recientes">
                <p class="title-product-reciente">Coca Cola 500ml</p>
                <p class="price-product-reciente">$999</p>

                <div class="div-sumaresta-recientes">
                    <div class="simbolo-resta">
                        <p>-</p>
                    </div>
                    <p class="contador-sumaresta">0</p>
                    <div class="simbolo-suma">
                        <p>+</p>
                    </div>
                </div>
            </div> */}