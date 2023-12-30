package com.toDoList.todolist.controlador;

import com.toDoList.todolist.exeption.RecursoNoEncontradoExeption;
import com.toDoList.todolist.modelo.Tarea;
import com.toDoList.todolist.modelo.TareaCompletada;
import com.toDoList.todolist.servicio.TareaCompletadaServicio;
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
public class TareaCompletadaControlador {

    private static final Logger logger = LoggerFactory.getLogger(TareaControlador.class);

    @Autowired
    private TareaCompletadaServicio tareaCompletadaServicio;

    @GetMapping("/tarea-completada")
    public List<TareaCompletada> obtenerTareaCompletada(){
        List<TareaCompletada> tareasCompletadas = this.tareaCompletadaServicio.listarTareasCompletadas();
        logger.info("Tareas completadas obtenidas");
        tareasCompletadas.forEach(tareaCompletada -> logger.info(tareaCompletada.toString()));
        return tareasCompletadas;
    }

    @GetMapping("/tarea-completada/{id}")
    public ResponseEntity<TareaCompletada> obtenerTareaCompletadaPorId(@PathVariable int idTareaCompletada){
        TareaCompletada tareaCompletada = tareaCompletadaServicio.buscarTareaCompletadaPorId(idTareaCompletada);
        if (tareaCompletada != null){
            return ResponseEntity.ok(tareaCompletada);
        } else {
            throw new RecursoNoEncontradoExeption("Tarea completada no encontrada con el id: " + idTareaCompletada);
        }
    }

    @PostMapping("/tarea-completada")
    public TareaCompletada agregarTareaCompletada(@RequestBody TareaCompletada tareaCompletada){
        logger.info("Tarea completada agregada: " + tareaCompletada);
        return tareaCompletadaServicio.guardarTareaCompletada(tareaCompletada);
    }

    @PutMapping("/tarea-completada/{id}")
    public ResponseEntity<TareaCompletada> actualizarTareaCompletada(@PathVariable int idTareaCompletada, @RequestBody Tarea tareaCompletadaRecibida){
        TareaCompletada tareaCompletada = tareaCompletadaServicio.buscarTareaCompletadaPorId(idTareaCompletada);
        if (tareaCompletada == null)
            throw new RecursoNoEncontradoExeption("Id " + idTareaCompletada + " de la tarea nompletada no encontrada");
        tareaCompletada.setTarea(tareaCompletadaRecibida);
        tareaCompletadaServicio.guardarTareaCompletada(tareaCompletada);
        return ResponseEntity.ok(tareaCompletada);
    }

    @DeleteMapping("/tarea-completada/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarTareaCompletada(@PathVariable int idTareaCompletada){
        TareaCompletada tareaCompletada = tareaCompletadaServicio.buscarTareaCompletadaPorId(idTareaCompletada);
        if (tareaCompletada == null)
            throw new RecursoNoEncontradoExeption("No se encontro el id: " + idTareaCompletada);
        tareaCompletadaServicio.eliminarTareaCompletadaPorId(tareaCompletada.getIdTareaCompletada());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("Eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

    @DeleteMapping("/tarea-completada")
    public ResponseEntity<Map<String, Boolean>> deleteAllTaskDone(){
        tareaCompletadaServicio.deleteAllTasks();
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("Lista eliminada", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
