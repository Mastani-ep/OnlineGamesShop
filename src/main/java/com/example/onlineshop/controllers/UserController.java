package com.example.onlineshop.controllers;
import com.example.onlineshop.model.User;
import com.example.onlineshop.model.UserService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();
        if (userService.findByEmail(user.getEmail()) != null) {
            jsonObject.addProperty("message", "This email already exists.");
            String json = gson.toJson(jsonObject);
            return ResponseEntity.badRequest().body(json);
        } else {
            userService.register(user);
            jsonObject.addProperty("message", "Your account was successfully created.");
            String json = gson.toJson(jsonObject);
            return ResponseEntity.ok().body(json);
        }
    }

    @Resource(name="authenticationManager")
    private AuthenticationManager authManager;



//    @PostMapping(value = "/login")
//    public void login(@RequestParam("email") final String username, @RequestParam("password") final String password, final HttpServletRequest request) {
//        UsernamePasswordAuthenticationToken authReq =
//                new UsernamePasswordAuthenticationToken(username, password);
//        Authentication auth = authManager.authenticate(authReq);
//        SecurityContext sc = SecurityContextHolder.getContext();
//        sc.setAuthentication(auth);
//        HttpSession session = request.getSession(true);
//        session.setAttribute("SPRING_SECURITY_CONTEXT", sc);
//        Gson gson = new Gson();
//        JsonObject jsonObject = new JsonObject();
//    }

}
