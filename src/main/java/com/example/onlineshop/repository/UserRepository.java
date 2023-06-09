package com.example.onlineshop.repository;

import com.example.onlineshop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(@Param("email") String email);
}
