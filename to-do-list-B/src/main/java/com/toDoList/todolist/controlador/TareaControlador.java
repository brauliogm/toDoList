package com.toDoList.todolist.controlador;

import com.toDoList.todolist.exeption.RecursoNoEncontradoExeption;
import com.toDoList.todolist.modelo.Tarea;
import com.toDoList.todolist.servicio.TareaServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("toDo-app")
@CrossOrigin(value = "http://localhost:4200")
public class TareaControlador {

    private static final Logger logger = LoggerFactory.getLogger(TareaControlador.class);

    @Autowired
    private TareaServicio tareaServicio;

    @GetMapping("/tarea")
    public List<Tarea> obtenerTareas(){
        List<Tarea> tareas = tareaServicio.listarTareas();
        logger.info("Tareas obtenidas");
        tareas.forEach(tarea -> logger.info(tarea.toString()));
        return tareas;
    }

    @GetMapping("/tarea/{id}")
    public ResponseEntity<Tarea> obtenerTareaPorId(@PathVariable Integer idTarea){
        Tarea tarea = tareaServicio.buscarTareaPorId(idTarea);
        if (tarea != null){
            return ResponseEntity.ok(tarea);
        } else {
            throw new RecursoNoEncontradoExeption("No se encontro el id: " + idTarea);
        }
    }

    @PostMapping("/tarea")
    public Tarea agregarTarea(@RequestBody Tarea tarea){
        logger.info("Tarea agregada: " + tarea);
        return tareaServicio.guardarTarea(tarea);
    }

    @PutMapping("/tarea/{id}")
    public ResponseEntity<Tarea> actualizarTarea(@PathVariable int idTarea, @RequestBody Tarea tareaRecibida){
        Tarea tarea = tareaServicio.buscarTareaPorId(idTarea);
        if (tarea == null)
            throw new RecursoNoEncontradoExeption("No se encontro el id: " + idTarea);
        tarea.setDescripcion(tareaRecibida.getDescripcion());
        tareaServicio.guardarTarea(tarea);
        return ResponseEntity.ok(tarea);
    }

    @DeleteMapping("/tarea/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarTarea(@PathVariable int idTarea){
        Tarea tarea = tareaServicio.buscarTareaPorId(idTarea);
        if (tarea == null)
            throw new RecursoNoEncontradoExeption("No se encontro el id: " + idTarea);
        tareaServicio.eliminarTareaPorId(tarea.getIdTarea());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("Eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
