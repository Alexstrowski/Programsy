package com.example.springboot.app.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot.app.models.entity.Medicamento;

public interface IMedicamentoDao extends JpaRepository<Medicamento, Long> {

}
