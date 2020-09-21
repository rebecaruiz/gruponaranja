/* Escriba un programa para verificar si 
un carácter específico existe dentro de 
la 2ª a la 4ª posición en una cadena dada. */

const pangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.";

const respuesta = prompt("Escribe una letra cualquiera");

alert (`Has escogido ${respuesta}`);

const posicion = pangrama.slice(1,4).includes(respuesta);

alert(posicion?'Encontrado':'No encontrado');

