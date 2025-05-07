package com.impactorsacademy.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.impactorsacademy.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {
    // Custom query methods can be defined here if needed
    // For example, findByEmail(String email) to find an employee by their email

    // Removed incomplete declaration or replace with a valid method or field if needed


}
