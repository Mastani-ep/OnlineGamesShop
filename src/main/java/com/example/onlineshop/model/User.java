package com.example.onlineshop.model;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Table(name = "Users", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    @Size(max = 30)
    private String first_name;

    @Column
    @Size(max = 30)
    private String last_name;

    @Column
    @Email
    @Size(max = 50)
    @NotBlank
    private String email;

    @Column
    @Size(max = 9)
    private String phone;

    @Column
    @Size(max = 120)
    @NotBlank
    private String password;

    public User() {
    }

    public User(String first_name, String last_name, String email, String password, String phone){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
