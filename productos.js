const alimentos = [
    {
        id: 1,
        title: "Manzana",
        categoria: "Frutas",
        precio: 1.50,
        stock: 50
    },
    {
        id: 2,
        title: "Pollo",
        categoria: "Carnes",
        precio: 3.75,
        stock: 20
    },
    {
        id: 3,
        title: "Arroz",
        categoria: "Granos",
        precio: 2.00,
        stock: 100
    },
    {
        id: 4,
        title: "Leche",
        categoria: "Lácteos",
        precio: 1.80,
        stock: 30
    },
    {
        id: 5,
        title: "Huevos",
        categoria: "Lácteos",
        precio: 0.50,
        stock: 40
    },
    {
        id: 6,
        title: "Pan",
        categoria: "Granos",
        precio: 1.20,
        stock: 25
    },
    {
        id: 7,
        title: "Pescado",
        categoria: "Mariscos",
        precio: 4.50,
        stock: 15
    },
    {
        id: 8,
        title: "Yogur",
        categoria: "Lácteos",
        precio: 1.25,
        stock: 35
    },
    {
        id: 9,
        title: "Papas",
        categoria: "Vegetales",
        precio: 2.20,
        stock: 30
    },
    {
        id: 10,
        title: "Filete de Ternera",
        categoria: "Carnes",
        precio: 6.50,
        stock: 10
    },
    {
        id: 11,
        title: "Zanahorias",
        categoria: "Vegetales",
        precio: 1.00,
        stock: 45
    },
    {
        id: 12,
        title: "Atún en lata",
        categoria: "Mariscos",
        precio: 2.75,
        stock: 20
    },
    {
        id: 13,
        title: "Refresco de cola",
        categoria: "Bebidas frías",
        precio: 1.80,
        stock: 25
    },
    {
        id: 14,
        title: "Café",
        categoria: "Bebidas calientes",
        precio: 2.50,
        stock: 50
    }
];

const categories = new Set(alimentos.map(alimento => alimento.categoria));

function categorias(name) {
    const objCategories = alimentos.filter(item => item.categoria.includes(name))
    const itemsCategory = objCategories.length
    // console.log(objCategories);
    return itemsCategory
}
// categorias('Carnes')

function stock(nombre) {
    const producto = alimentos.filter(item => item.title.includes(nombre)) 
    const stockProducto = producto[0].stock
    return stockProducto
}