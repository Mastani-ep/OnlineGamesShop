package com.example.onlineshop.model;


import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("customUserService")
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        final User2 customer = userRepository.findByEmail(email);
//        if(customer == null){
//             throw new UsernameNotFoundException(email);
//        }
//        UserDetails user = User.withUsername(customer.getEmail()).password(customer.getPassword()).authorities("USER").build();
//        return user;
//    }
}
