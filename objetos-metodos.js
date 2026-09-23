// Ejemplo de objetos con metodos

//Datos de un prodicto
const producto = {
    id: "p-07",
    nombre: "Agua de jamaica",
    Precio: 15,
    Categoria: "Bebidas",
    disponible: true,
    
    //Metodos
resumen() {
    return this.nombre + "$-$" + this.precio + "(" + this.categoria + ")";
},
EstaDisponible() {
    return this.disponible;
}
};

console.log("objeto completo");
console.log(producto);
