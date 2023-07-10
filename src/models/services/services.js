import express from "express";
import 'dotenv/config'
import PreguntasService from "./src/services/preguntasService.js";


const app = express();
const port = process.env.HTTP_PORT;
app.use(express.json());


let svc = new PreguntasService();


app.get("/api/preguntas/:id", async (req, res) => {
    try {
     let id = req.params.id
     let rta = req.query.respuesta
     
      let get = await svc.GetPregunta(id);
      console.log(get.RespuestaCorrecta)
      if (get != null && get != undefined){
        res.status(200).send(get.RespuestaCorrecta == rta);
      }else{
        res.status(404).send("No existe la pregunta");
      }




      res.send(get);
    } catch (error) {
      res.send("error");
    }
  });


  app.post("/api/preguntas", async (req, res) => {
    try {
       
        let params = req.body


        console.log(req.body.Pregunta)


      let Insert = await svc.Insert(params.Pregunta,params.Respuesta01,params.Respuesta02,params.Respuesta03,params.Respuesta04,params.RespuestaCorrecta);
      res.send(Insert);
    } catch (error) {
      res.send("error");
    }
  });


  app.listen(port, () => {
    console.log('Example app listening on port ' + port)
})
 
