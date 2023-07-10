import { Router } from 'express';
import Pregunta from '../models/Pregunta.js';
import PreguntaService from '../services/preguntas-services.js';


const router = Router();
const svcPregunta = new PreguntaService();



router.get('', verificacionLogin, async (req, res, next) => {
    try {
        let GetAll = await svcPregunta.getAll();
        res.send(GetAll);
    } catch (error) {
        res.send("error");
    }
});

router.get('/:id', verificacionLogin, async (req, res) => {
    try {
        let GetById = await svcPregunta.getById(req.params.id);
        res.send(GetById);
    } catch (error) {
        res.send("error");
    }
});

router.post('', verificacionLogin, async (req, res) => {
    try {
        console.log(req.body);
        let svc2 = new Pregunta();
        let preguntaNew = new svc2.constructor(
            req.body.Pregunta,
            req.body.Respuesa01,
            req.body.Respuesa02,
            req.body.Respuesa03,
            req.body.Respuesa04,
            req.body.RespuestaCorrecta,
            req.body.FechaCreacion
        );
        let Insert = await svcPregunta.insert(preguntaNew);
        res.send(Insert);
    } catch (error) {
        res.send("error");
    }
});

router.put('/:id', verificacionLogin, async (req, res) => {
    try {
        let svc2 = new Pregunta();
        let preguntaNew = new svc2.constructor(
            req.body.Id,
            req.body.Pregunta,
            req.body.Respuesa01,
            req.body.Respuesa02,
            req.body.Respuesa03,
            req.body.Respuesa04,
            req.body.RespuestaCorrecta,
            req.body.FechaCreacion
        );
        let update = await svcPregunta.update(preguntaNew);
        res.send(update);
    } catch (error) {
        res.send("error");
    }
});

router.delete('/:id', verificacionLogin , async (req, res) => {
    try {
        let deleteById = await svcPregunta.deleteById(req.params.id);
        res.send(deleteById);
    } catch (error) {
        res.send("error");
    }
});

export default router; 