package br.com.jonathanamarante.devfinance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jonathanamarante.devfinance.entity.DevFinance;
import br.com.jonathanamarante.devfinance.repository.DevFinanceRepository;

@Service
public class DevFinanceService {
    @Autowired
    private DevFinanceRepository devFinanceRepository;

    public List<DevFinance> create(DevFinance finance){
        if(finance!=null)
            devFinanceRepository.save(finance);
        return list();
    }

    public List<DevFinance> list(){
        return devFinanceRepository.findAll();
    }

    public List<DevFinance> update(DevFinance finance){
        if(finance!=null)
            devFinanceRepository.save(finance);
        return list();
    }

    public List<DevFinance> delete(Long id){
        if(id!=null)
            devFinanceRepository.deleteById(id);
        return list();
    }
}
