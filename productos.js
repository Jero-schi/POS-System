const alimentos = [
    {
        id: 1,
        title: "Manzana",
        categoria: "Frutas",
        precio: 1.50,
        cantidad: 50
    },
    {
        id: 2,
        title: "Pollo",
        categoria: "Carnes",
        precio: 3.75,
        cantidad: 20
    },
    {
        id: 3,
        title: "Arroz",
        categoria: "Granos",
        precio: 2.00,
        cantidad: 100
    },
    {
        id: 4,
        title: "Leche",
        categoria: "Lácteos",
        precio: 1.80,
        cantidad: 30
    },
    {
        id: 5,
        title: "Huevos",
        categoria: "Lácteos",
        precio: 0.50,
        cantidad: 40
    },
    {
        id: 6,
        title: "Pan",
        categoria: "Granos",
        precio: 1.20,
        cantidad: 25
    },
    {
        id: 7,
        title: "Pescado",
        categoria: "Mariscos",
        precio: 4.50,
        cantidad: 15
    },
    {
        id: 8,
        title: "Yogur",
        categoria: "Lácteos",
        precio: 1.25,
        cantidad: 35
    },
    {
        id: 9,
        title: "Papas",
        categoria: "Vegetales",
        precio: 2.20,
        cantidad: 30
    },
    {
        id: 10,
        title: "Filete de Ternera",
        categoria: "Carnes",
        precio: 6.50,
        cantidad: 10
    },
    {
        id: 11,
        title: "Zanahorias",
        categoria: "Vegetales",
        precio: 1.00,
        cantidad: 45
    },
    {
        id: 12,
        title: "Atún en lata",
        categoria: "Mariscos",
        precio: 2.75,
        cantidad: 20
    },
    {
        id: 13,
        title: "Refresco de cola",
        categoria: "Bebidas frías",
        precio: 1.80,
        cantidad: 25
    },
    {
        id: 14,
        title: "Café",
        categoria: "Bebidas calientes",
        precio: 2.50,
        cantidad: 50
    }
];

const categories = new Set(alimentos.map(alimento => alimento.categoria));
// let objCategories

function categorias(name) {
    const objCategories = alimentos.filter(item => item.categoria.includes(name))
    const itemsCategory = objCategories.length
    // console.log(objCategories);
    // console.log(itemsCategory);
    return itemsCategory
}

function stock(nombre) {
    const producto = alimentos.filter(item => item.title.includes(nombre)) 
    const stockProducto = producto[0].cantidad
    console.log(producto);
    return stockProducto
}
console.log(alimentos);
console.log(categories);