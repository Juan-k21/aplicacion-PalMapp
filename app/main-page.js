const { fromObject } = require("@nativescript/core");
export function onImageLoaded(args) {
  console.log("Imagen cargada correctamente:", args.object.src);
}
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = fromObject({
        username: "",
        password: "",
    });
}

function onLoginTap(args) {
    const page = args.object.page;
    const username = page.getViewById("username").text;
    const password = page.getViewById("password").text;

    if (username && password) {
        console.log(`User: ${username}, Pass: ${password}`);
        // Aquí puedes añadir lógica de autenticación
    } else {
        console.log("Por favor ingresa usuario y contraseña.");
    }
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoginTap = onLoginTap;