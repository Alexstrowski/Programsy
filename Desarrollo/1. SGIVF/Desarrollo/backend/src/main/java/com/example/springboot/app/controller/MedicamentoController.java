package com.example.springboot.app.controller;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.app.exception.ResourceNotFoundException;
import com.example.springboot.app.models.dao.ILaboratorioDao;
import com.example.springboot.app.models.dao.IMedicamentoDao;
import com.example.springboot.app.models.entity.Medicamento;

/*@RestController annotation is a combination
 * of Spring’s @Controller and @ResponseBody annotations.
 */

@RestController
@RequestMapping("/api")
public class MedicamentoController {
	
	@Autowired
	IMedicamentoDao medicamentoDao;
	
	@Autowired
	ILaboratorioDao laboratorioDao;
	
	/* @GetMapping("/medicamentos") es lo mismo que
	 * @RequestMapping(value="/medicamentos", method=RequestMethod.GET)
	 */
	
	@GetMapping("/medicamentos")
	public List<Medicamento> getAllMedicamentos() {
	    return medicamentoDao.findAll();
	}
	
	@PostMapping("/medicamentos")
	public Medicamento createMedicamento(@Valid @RequestBody Medicamento medicamento) {
		medicamento.setLaboratorio(laboratorioDao.getOne(1L));
		return medicamentoDao.save(medicamento);
	}

	@GetMapping("/medicamentos/{id}")
	public Medicamento getMedicamentoById(@PathVariable(value = "id") Long medicamentoId) {
	    return medicamentoDao.findById(medicamentoId)
	            .orElseThrow(() -> new ResourceNotFoundException("Medicamento", "id", medicamentoId));
	}
	
	@PutMapping("/medicamentos/{id}")
	public Medicamento updateMedicamento(@PathVariable(value = "id") Long medicamentoId,
	                                        @Valid @RequestBody Medicamento medicamentoDetails) {

		Medicamento medicamento = medicamentoDao.findById(medicamentoId)
	            .orElseThrow(() -> new ResourceNotFoundException("Medicamento", "id", medicamentoId));
		
		medicamento.setCodigo(medicamentoDetails.getCodigo());
		medicamento.setDescripcion(medicamentoDetails.getDescripcion());
		medicamento.setTipo(medicamentoDetails.getTipo());
		medicamento.setFechaVencimiento(medicamentoDetails.getFechaVencimiento());
		medicamento.setStock(medicamentoDetails.getStock());
		medicamento.setPrecioReferencial(medicamentoDetails.getPrecioReferencial());
		medicamento.setFechaActualizacion(new Date());
		medicamento.setLaboratorio(laboratorioDao.getOne(1L));
	    return medicamentoDao.save(medicamento);

	}
	
	@DeleteMapping("/medicamentos/{id}")
	void deleteMedicamento(@PathVariable Long id) {
		medicamentoDao.deleteById(id);
	}
}
