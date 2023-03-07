package com.example.onlineshop.model;

public interface UserService {
    void register(User user);
    User findByEmail(String email);
}

