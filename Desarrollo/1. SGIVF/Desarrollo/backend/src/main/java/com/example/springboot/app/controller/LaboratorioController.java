package com.example.springboot.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.app.exception.ResourceNotFoundException;
import com.example.springboot.app.models.dao.ILaboratorioDao;
import com.example.springboot.app.models.entity.Laboratorio;

@RestController
@RequestMapping("/api")
public class LaboratorioController {
	
	@Autowired
	ILaboratorioDao laboratorioDao;
	
	@GetMapping("/laboratorios/{id}")
	public Laboratorio getMedicamentoById(@PathVariable(value = "id") Long medicamentoId) {
	    return laboratorioDao.findById(medicamentoId)
	            .orElseThrow(() -> new ResourceNotFoundException("Medicamento", "id", medicamentoId));
	}
}
