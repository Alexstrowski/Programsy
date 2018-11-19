package com.example.springboot.app.models.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="detalle_venta")	
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
allowGetters = true)
public class DetalleVenta implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "venta_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
	private Venta venta;
	
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "medicamento_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
	private Medicamento medicamento;
	
	@Min(value = 0, message = "The value must be positive")
	@NotBlank
	private int cantidad;
	
	@Min(value = 0, message = "The value must be positive")
	@NotBlank
	private double precio;
	
	@Min(value = 0, message = "The value must be positive")
	@NotBlank
	private double descuento;
	
	@Min(value = 0, message = "The value must be positive")
	@NotBlank
	private double impuesto;
	
	@Column(name="fecha_creacion",nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date fechaCreacion;
	
	@Column(name="fecha_actualizacion",nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date fechaActualizacion;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Venta getVenta() {
		return venta;
	}

	public void setVenta(Venta venta) {
		this.venta = venta;
	}

	public Medicamento getMedicamento() {
		return medicamento;
	}

	public void setMedicamento(Medicamento medicamento) {
		this.medicamento = medicamento;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public double getDescuento() {
		return descuento;
	}

	public void setDescuento(double descuento) {
		this.descuento = descuento;
	}

	public double getImpuesto() {
		return impuesto;
	}

	public void setImpuesto(double impuesto) {
		this.impuesto = impuesto;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Date getFechaActualizacion() {
		return fechaActualizacion;
	}

	public void setFechaActualizacion(Date fechaActualizacion) {
		this.fechaActualizacion = fechaActualizacion;
	}
}
