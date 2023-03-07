package com.example.onlineshop.model;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserDetailsService {
    UserDetails loadUserByEmail(String username)
            throws UsernameNotFoundException;
}
