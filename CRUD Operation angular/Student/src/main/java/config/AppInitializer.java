package config;

import jakarta.servlet.ServletRegistration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.annotation.HandlesTypes;

@HandlesTypes(WebApplicationInitializer.class)
public class AppInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(javax.servlet.ServletContext servletContext) throws javax.servlet.ServletException {
        System.out.println("hello from config");
        AnnotationConfigWebApplicationContext dispatcherContext = new AnnotationConfigWebApplicationContext();
        dispatcherContext.scan("com.example.spring_config.service");
        dispatcherContext.register(AppConfig.class);
        //  servletContext.addListener(new ContextLoaderListener(context));
        ServletRegistration.Dynamic dispatcher =
                (ServletRegistration.Dynamic) servletContext.addServlet("DispatcherServlet", new DispatcherServlet(dispatcherContext));
        dispatcher.addMapping("/");
        dispatcher.setLoadOnStartup(1);
    }
}

/*
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[] { AppConfig.class };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return null;
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }*/


