class Pregunta{
    Id;
    Pregunta;
    Respuesta01;
    Respuesta02;
    Respuesta03;
    Respuesta04;
    RespuestaCorrecta;
    FechaCreacion;

    constructor(Pregunta, Respuesta01, Respuesta02, Respuesta03, Respuesta04, RespuestaCorrecta, FechaCreacion = 0){
        this.Pregunta = pregunta;
        this.Respuesta01 = respuesta01;
        this.Respuesta02 = respuesta02;
        this.Respuesta03 = respuesta03;
        this.Respuesta04 = respuesta04;
        this.RespuestaCorrecta = respuestacorrecta;
        this.FechaCreacion = fechacreacion;
    }
}

export default Pregunta;