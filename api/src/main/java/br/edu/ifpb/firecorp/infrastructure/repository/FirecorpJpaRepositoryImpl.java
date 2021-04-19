package br.edu.ifpb.firecorp.infrastructure.repository;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

public class FirecorpJpaRepositoryImpl<T, ID> extends SimpleJpaRepository<T, ID> implements FirecorpJpaRepository<T, ID> {
	
	private EntityManager entityManager;

	public FirecorpJpaRepositoryImpl(JpaEntityInformation<T, ?> entityInformation, EntityManager entityManager) {
		super(entityInformation, entityManager);
		this.entityManager = entityManager;
	}
	
	public void detach(T obj) {
		entityManager.detach(obj);
	}

}
