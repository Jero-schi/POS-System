
const menus = document.querySelectorAll('.menus')
const inputSearch = document.querySelector('#busqueda')
const divCategorias = document.querySelector('.div-types')
const divRecientes = document.querySelector('.div-recientes')

let productosTicket = []
let ticket = {}
let formasDePago = {
    efectivo: 1,
    tarjeta: 1.15,
    billeteraVirtual: 1
}

menus.forEach(menu => 
    menu.addEventListener('click', () => {
        menus.forEach(item => {
            item.classList.remove('color-menu')
        });
        menu.classList.add('color-menu')
    }));

inputSearch.addEventListener('input', () => {
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
// pintarCategorias()

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
// pintarRecientes()

const sumaReciente = document.querySelectorAll('.simbolo-suma')
const restaReciente = document.querySelectorAll('.simbolo-resta')
const contadorReciente =  document.querySelectorAll('.contador-sumaresta')
const productosRecientes = document.querySelectorAll('.info-recientes')
const cliente = document.querySelector('.cliente')


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
        const titlesProducts = document.querySelectorAll('.title-product-reciente')
        const titleProduct = titlesProducts[i].textContent
        const cantidadProductos = Number(contadorReciente[i].textContent)
        const objProduct = alimentos.find(alimento => alimento.title === titleProduct)
        const addProduct = {
            ...objProduct,
            numeroProducto: 0,
            cantidad: cantidadProductos
        }

        if (!productosTicket.some(obj => obj.id === objProduct.id)) {
            productosTicket.push(addProduct)
            productosTicket.forEach((obj, index) => {
                obj.numeroProducto = index + 1
            })
        } else {
            const hola = productosTicket.find(producto => producto.id === objProduct.id)
            hola.cantidad += cantidadProductos
        }

        contadorReciente[i].textContent = '1'

        pintarProductosTicket()
    })
})

function pintarProductosTicket() {
    let newDiv = document.createElement('div')
    if (!document.querySelector('.div-productos')) {
        newDiv.classList.add('div-productos')
    
        cliente.insertAdjacentElement('afterend', newDiv) 
        productosTicket.forEach((item, index) => {
            newDiv.innerHTML += `
            <div class="producto">
                <p class="title-product">${item.title}</p>
                <p class="cantidad-product">x${item.cantidad}</p>
    
                <p class="price-product">$${item.precio * item.cantidad}</p>
                <div class="x-borrar">
                    <img src="imgs/X.svg" alt="Borrar producto">
                </div>
            </div>
            `
        });
    } else {
        const divProductos = document.querySelector('.div-productos')
        divProductos.innerHTML = ''
        
        productosTicket.forEach((item, index) => {
            divProductos.innerHTML += `
                <div class="producto">
                    <p class="title-product">${item.title}</p>
                    <p class="cantidad-product">x${item.cantidad}</p>
    
                    <p class="price-product">$${item.precio * item.cantidad}</p>
                    <div class="x-borrar">
                        <img src="imgs/X.svg" alt="Borrar producto">
                    </div>

                </div>
            `
        })
    }


    // setTimeout(borrarProduct, 2000)
    borrarProduct()
    pintarTicket()
    
}

function borrarProduct() {
    const borrarProducto = document.querySelectorAll('.x-borrar')
    console.log(borrarProducto);
    borrarProducto.forEach((item, index) => {
        item.addEventListener('click', () => {
            productosTicket.splice(index, 1)
            if (productosTicket.length == 0) {

            } 
            pintarProductosTicket()
        }) 
    })
}

const subtotalTicket = document.querySelector('.price-subtotal')
const aumentoTicket = document.querySelector('.price-aumento')
const totalTicket = document.querySelector('.price-total')


function pintarTicket() {
    ticket.productos = [productosTicket]
    ticket.subtotal = productosTicket.reduce((ite, obj) => ite + obj.precio*obj.cantidad, 0)
    ticket.aumento = 1
    ticket.formaPago = 'Efectivo'
    ticket.total = (ticket.subtotal * ticket.aumento).toFixed(2)
    totalTicket.innerHTML = `$${ticket.total}`
    aumentoTicket.innerHTML = `$0`
    
    subtotalTicket.innerHTML = `$${ticket.subtotal}`
}

const btnFormasPago = document.querySelectorAll('.payment-method')


btnFormasPago.forEach((item, index) => {
    item.addEventListener('click', () => {
        btnFormasPago.forEach(btn => {
            btn.classList.remove('color-forma-pago')
        })
        item.classList.add('color-forma-pago')

        const divProductos = document.querySelector('.div-productos')
        if (divProductos) {
            if (index == 0) {
                ticket.aumento = 1
                ticket.total = (ticket.subtotal * ticket.aumento).toFixed(2)
                ticket.formaPago = 'Efectivo'
                
                totalTicket.innerHTML = `$${ticket.total}`
                aumentoTicket.innerHTML = `$0`
                
            } else if (index == 1) {
                ticket.aumento = formasDePago.tarjeta 
                ticket.total = (ticket.subtotal * ticket.aumento).toFixed(2)
                ticket.formaPago = 'Tarjeta'
                
                totalTicket.innerHTML = `$${ticket.total}`
                aumentoTicket.innerHTML = `$${(ticket.total - ticket.subtotal).toFixed(2)}`
                
            } else {
                ticket.aumento = 1
                ticket.total = Math.ceil(ticket.subtotal * ticket.aumento)
                ticket.formaPago = 'Billetera virtual'
                
                totalTicket.innerHTML = `$${ticket.total}`
                aumentoTicket.innerHTML = `$0`
            }
        }
    })
})

const finalizarCompra = document.querySelector('.btn-finish-compra')

finalizarCompra.addEventListener('click', () => {
    console.log('hola');
    console.log(ticket);
    if (productosTicket.length > 0) {
        historialVentasDay.push(ticket)
        productosTicket = []
        ticket = {}
        const divProductos = document.querySelector('.div-productos')
        divProductos.remove()
    
        pintarTicket()
        btnFormasPago.forEach(btn => {
            btn.classList.remove('color-forma-pago')
        })
        btnFormasPago[0].classList.add('color-forma-pago')
        console.log(historialVentasDay);
        console.log(ticket);
    }
    console.log(historialVentasDay);
    ventasTotales()
    pintarVentasDiarias()
})

const ventasDiarias = document.querySelector('.ventas-totales')
const clientesDiarios = document.querySelector('.clientes-totales')

console.log({ventasDiarias, clientesDiarios});

function pintarVentasDiarias() {
    const ventasTotaless = ventasTotales()
    const clientesTotales = historialVentasDay.length
    console.log(clientesTotales);
    ventasDiarias.innerHTML = `$${ventasTotaless}`
    clientesDiarios.innerHTML = clientesTotales
}

// btnFormasPago[0].addEventListener('click', () => {
//     console.log('cash');
//     ticket.aumento = formasDePago.efectivo
//     ticket.formaPago = 'efectivo'
//     console.log(ticket);
//     totalTicket.innerHTML = `$${ticket.total}`
//     // aumentoTicket.innerHTML = `$${Math.ceil(ticket.total - ticket.subtotal)}`
// })