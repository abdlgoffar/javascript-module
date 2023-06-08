//agar data berupa class, function dan variable bisa diakses secara module js maka wajib diberi keyword export
function hello(name) {
    return name;
}

const name = "goffar";
const hoby = "play football";
export {hello, name, hoby};