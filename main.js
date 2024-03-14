console.log('hola');

const menus = document.querySelectorAll('.menus')
const inputSearch = document.querySelector('#busqueda')
const divCategorias = document.querySelector('.div-types')
const divRecientes = document.querySelector('.div-recientes')


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
            <p class="title-product-reciente">${reciente.title}</p>
            <p class="price-product-reciente">$${reciente.precio}</p>

            <div class="div-sumaresta-recientes">
                <div class="simbolo-resta">
                    <p>-</p>
                </div>
                <p class="contador-sumaresta">0</p>
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

console.log(sumaReciente);
console.log(restaReciente);
console.log(contadorReciente);

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
        if (contador > 0) {
            contador--
            contadorReciente[i].innerHTML = contador
        }
    })
})


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