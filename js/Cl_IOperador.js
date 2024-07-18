export default class Cl_Ioperador {
    leercedula() {
        return prompt("Ingrese Cedula");
    }
    leertipoO() {
        return prompt("Ingrese Operador (1: Supervisor ,2: Diseñador ,3: Costurera ,4: Bordador, 5: Empacador)");
    }
    leerhorasT() {
        return prompt("Ingrese Horas Trabajadas");
    }
    leerprecioHB() {
        return prompt("Ingrese Precio Base Por Hora");
    }

    reporteOperador(c, tipoO, horasE, precioHE, b, s) {
        return `
    <br> Cedula: ${c}
    <br> Operador: ${tipoO}
    <br> Horas Extras Trabajadas: ${horasE}
    <br> Precio Por Hora Extra:$  ${precioHE}
    <br> Bono de horas extras:$  ${b}
    <br> Total a cobrar:$  ${s}
        `
    }
}