package br.com.jonathanamarante.devfinance.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.jonathanamarante.devfinance.entity.DevFinance;
import br.com.jonathanamarante.devfinance.service.DevFinanceService;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api")
public class DevFinanceController {
    private DevFinanceService devFinanceService;
    public DevFinanceController(DevFinanceService devFinanceService){
        this.devFinanceService = devFinanceService;
    }

    @PostMapping    
    List<DevFinance> create(@RequestBody @Valid DevFinance todo){
        return devFinanceService.create(todo);
    }
    @GetMapping
    List<DevFinance> list(){
        return devFinanceService.list();
    }
    @PutMapping
    List<DevFinance> update(@RequestBody DevFinance todo){
        return devFinanceService.update(todo);
    }
    @DeleteMapping("/{id}")
    List<DevFinance> delete(@PathVariable("id") Long id){
        return devFinanceService.delete(id);
    }
}
