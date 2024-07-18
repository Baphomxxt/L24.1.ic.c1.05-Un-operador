export default class Cl_operador {
    constructor(cedula, tipoO, horasT, precioHB) {
        this.cedula = cedula;
        this.tipoO = tipoO;
        this.horasT = horasT;
        this.precioHB = precioHB;

    }
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    set tipoO(t) {
        this._tipoO = t;
    }
    get tipoO() {
        return this._tipoO;
    }
    set horasT(hT) {
        this._horasT = +hT;
    }
    get horasT() {
        return this._horasT;
    }
    set precioHB(pHB) {
        this._precioHB = +pHB;
    }
    get precioHB() {
        return this._precioHB;
    }

    horasE() {
        if (this._horasT > 40) {
            return this._horasT - 40;
        } else {
            return 0;
        }
    }
    precioHE() {
        if (this._tipoO === "1") {
            return (this._precioHB * 0.32);
        } else {
            if (this._tipoO === "2") {
                return (this._precioHB * 0.23);
            } else {
                if (this._tipoO === "3") {
                    return (this._precioHB * 0.17);
                } else {
                    if (this._tipoO === "4") {
                        return (this._precioHB * 0.07);
                    } else {
                        if (this._tipoO === "5") {
                            return (this._precioHB * 0.05);
                        }
                    }
                }
            }
        }
    }
    bono() {
        if (this._horasT > 40){
            return (this.horasE() * this.precioHE());
        }else{
            return 0;}

    }
    sueldoFinal() {
        if(this._horasT > 40){
            return (40 *  this._precioHB) + this.bono();
        }else {
            return this._horasT *  this._precioHB + this.bono();
        }

    }

}
