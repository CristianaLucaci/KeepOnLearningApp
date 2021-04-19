package com.pad.keeponlearning.keeponlearning.dao;


import com.pad.keeponlearning.keeponlearning.entity.Employee;

import java.util.List;

public interface EmployeeDAO {
    public List<Employee> findAll();
}
