package br.edu.ifpb.firecorp.infrastructure.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface FirecorpJpaRepository<T, ID> extends JpaRepository<T, ID> {

	public void detach(T obj);
	
}
