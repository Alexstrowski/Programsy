package com.example.springboot.app.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot.app.models.entity.Laboratorio;

public interface ILaboratorioDao extends JpaRepository<Laboratorio, Long> {

}
