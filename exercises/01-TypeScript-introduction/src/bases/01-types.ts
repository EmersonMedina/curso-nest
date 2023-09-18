export const name: string = 'John'; // <- El valor puede ser inferido
export const age = 30;
export const isAdmin = true;

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar variables ${name}
expresiones ${1+1}
números ${age}
booleanos ${isAdmin}`

console.log(templateString)