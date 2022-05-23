// Estructura condicional switch

let diaSemana = 'No se que día es hoy';

switch (diaSemana) {
    case 1:
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;      
    case 3:
        console.log('Hoy es miércoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;      
    case 5:
        console.log('Hoy es viernes');
        break;      
    case 6:
        console.log('Hoy es sábado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
    default:
        console.log('Día no válido');    
}

let mes = 'octubre';

switch (mes) {
    case 'enero':
    case 'febrero':
    case 'marzo':
        console.log('Estamos en el primer trimestre');
        break;
    case 'abril':
    case 'mayo':
    case 'junio':
        console.log('Estamos en el segundo trimestre');
        break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
        console.log('Estamos en el tercer trimestre');
        break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        console.log('Estamos en el cuarto trimestre');
        break;
    default:
        console.log('mes no válido');
}
