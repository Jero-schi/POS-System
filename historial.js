const historialVentasDay = []

function ventasTotales() {
    const arrayVentas = historialVentasDay.map(item => Number(item.total))
    const suma = arrayVentas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    return suma
}