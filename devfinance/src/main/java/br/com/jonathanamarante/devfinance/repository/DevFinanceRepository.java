package br.com.jonathanamarante.devfinance.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.jonathanamarante.devfinance.entity.DevFinance;

public interface DevFinanceRepository extends JpaRepository<DevFinance, Long>{
    
}
