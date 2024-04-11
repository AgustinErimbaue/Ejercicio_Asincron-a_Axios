const API_URL = "https://jsonplaceholder.typicode.com/users"
//Imprimir por consola la lista (array) de usuarios.

axios.get(API_URL)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

//Imprimir por consola solo el nombre de los usuarios.


axios.get(API_URL)
    .then((res) => {
        for (const usuario of res.data) {
            console.log(usuario.name)
        }
    })
    .catch((err) => console.log(err))

//Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.
let usuarios;
axios.get(API_URL)
    .then((res) => usuarios = res.data)
    .catch((err) => console.log(err))

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
//Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).

const showUsers = (e) => {
    e.preventDefault()
    console.log(usuarios)
    let parrafo = document.getElementById("mostrar_usuarios")

    for (const datos of usuarios) {
        parrafo.innerHTML += `
        ${datos.name}
        `
    }


}
//Crea un botón que cuando lo cliques ejecute la función que habías creado

const boton = document.getElementById('boton_usuarios')
boton.addEventListener('click', showUsers)


//Extras

//Imprimir por consola la lista de razas de todos los perros.

let perros;
axios.get('https://dog.ceo/api/breeds/list/all')
    .then((res) => {
        perros = JSON.stringify(res.data.message)
        console.log(res.data.message)
        const parrafo2 = document.getElementById("raza");
        parrafo2.innerText = `${perros}`
    })
    .catch((err) => console.log(err))

//Imprimir por consola una imagen random de una raza.
let imagen;
axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        imagen = res.data.message
        console.log(res.data.message)
        let imagenes = document.getElementById("imagenes_perros")
        imagenes.innerHTML = `<img src=${imagen}></img>`
    })
    .catch((err) => console.error(err))

//Imprimir por consola todas las imágenes de una raza concreta.
 let imagenesPerros;
 axios.get('https://dog.ceo/api/breed/briard/images')
     .then((res) => {
         imagenesPerros = res.data.message
         console.log(res.data.message)
         let imagenesDeperros= document.getElementById('perros_imagenes')
         for (const imagenes of imagenesPerros) {
             imagenesDeperros.innerHTML += `<img src=${imagenes}>`
         }
     })
     .catch((err) => console.error(err))

