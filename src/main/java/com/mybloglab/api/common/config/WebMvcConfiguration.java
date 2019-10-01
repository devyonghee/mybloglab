package com.mybloglab.api.common.config;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebMvcConfiguration {
    @Bean
    public ObjectMapper objectMapper(JavaTimeModule javaTimeModule) {
        ObjectMapper mapper = new ObjectMapper().findAndRegisterModules();
        mapper.registerModule(javaTimeModule);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return mapper;
    }

}
