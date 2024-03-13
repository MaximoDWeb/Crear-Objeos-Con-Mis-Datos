const objeto_maximo = {
    nombre: 'Maximo',
    apellido: 'Sanchez',
    edad: 43,
    mascotas: ['Blanquita', 'Spaik', 'Charly'],
    mensaje_maximo: null,
    mensajeMaximo(mensaje) {
        this.mensaje_maximo = mensaje;
    },
};

objeto_maximo.mensajeMaximo('Hola maximo');

const respuesta = `hola mi nombre es ${objeto_maximo.nombre} y mi apellido es ${objeto_maximo.apellido} y mi edad es ${objeto_maximo.edad} y mis mascotas son ${objeto_maximo.mascotas}`;


console.log(respuesta);




















// linea 1 inicie creando mi objeto colocando las llaves{}
// linea 2 inicie colocando las propiedades separandolas por coma (,)
// linea 6 se coloca un mensaje con lo que el usuario quiera 