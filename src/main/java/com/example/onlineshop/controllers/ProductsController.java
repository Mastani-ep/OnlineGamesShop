package com.example.onlineshop.controllers;
import com.example.onlineshop.model.Product;
import com.example.onlineshop.model.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductsController {
    private final ProductRepository productRepository;

    public ProductsController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createProduct(@RequestBody Product product) throws URISyntaxException {
        Product savedProduct = productRepository.save(product);
        return ResponseEntity.created(new URI("/clients/" + savedProduct.getId())).body(savedProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Product currentProduct = productRepository.findById(id).orElseThrow(RuntimeException::new);
        currentProduct.setName(product.getName());
        currentProduct.setDescription(product.getDescription());
        currentProduct.setPrice(product.getPrice());
        currentProduct = productRepository.save(product);

        return ResponseEntity.ok(currentProduct);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
