console.log('hola');

const menus = document.querySelectorAll('.menus')
const inputSearch = document.querySelector('#busqueda')
const divCategorias = document.querySelector('.div-types')
const divRecientes = document.querySelector('.div-recientes')

console.log(divCategorias);

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

console.log(alimentos);

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
        console.log(reciente);
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