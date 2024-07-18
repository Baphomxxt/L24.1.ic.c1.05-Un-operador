/** Analisis de datos 
 * De un operador se tienen los siguientes datos: cédula de identidad, tipo de operador
(1=Supervisor, 2=Diseñador, 3=Costurera, 4=Bordador, 5=Empacador), horas trabajadas en la
semana y el precio de la hora base. Si trabaja más de 40 horas a la semana, el operador tendrá
el beneficio de bono por horas extras.
Muestre como salida del programa: cédula, precio de la hora extra, cantidad de horas extras
trabajadas, bono de horas extras y total a cobrar.*/

import Cl_Ioperador from "./Cl_IOperador.js";
import Cl_operador from "./Cl_Operador.js"

let iOp = new Cl_Ioperador(),
    c = iOp.leercedula(),
    tipoO = iOp.leertipoO(),
    hT = iOp.leerhorasT(),
    pHB = iOp.leerprecioHB(),

    op = new Cl_operador(c, tipoO, hT, pHB),
    salida = document.getElementById("salida")
salida.innerHTML = iOp.reporteOperador(op.cedula, op.tipoO, op.horasE(), op.precioHE(), op.bono(), op.sueldoFinal())