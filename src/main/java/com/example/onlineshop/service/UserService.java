package com.example.onlineshop.service;

import com.example.onlineshop.model.User;

public interface UserService {
    void register(User user);
    User findByEmail(String email);
}

