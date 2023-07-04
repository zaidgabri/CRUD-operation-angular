package Controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/AGENT")

public class ProfController {


    @GetMapping
    public String get() {
        return "GET:: Prof controller";
    }
    @PostMapping
    public String post() {
        return "POST:: Prof controller";
    }
    @PutMapping
    public String put() {
        return "PUT:: Prof controller";
    }
    @DeleteMapping
    public String delete() {
        return "DELETE:: Prof controller";
    }
}
