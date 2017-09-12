//Función que crea y devuelve un objeto promesa
//En este caso, la promesa siempre se resuelve correctamente, creando un mensaje de saludo a un usuario

function msgAfterTimeout (msg, who, timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(`${msg} Hello ${who}!`), 
			timeout)
	})
}


//Utilización de las promesa, encadenando las llamadas a ellas

msgAfterTimeout("", "Foo", 100)
.then((msg) =>
	msgAfterTimeout(msg, "Bar", 200))
.then((msg) => {
	console.log(`done after 300ms:${msg}`)
})
