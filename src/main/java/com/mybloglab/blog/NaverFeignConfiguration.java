package com.mybloglab.blog;

import feign.Feign;
import feign.Logger;
import feign.RequestInterceptor;
import feign.jackson.JacksonDecoder;
import feign.jackson.JacksonEncoder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

public class NaverFeignConfiguration {

    @Value("${naver-api.id}")
    private String naverId;
    @Value("${naver-api.key}")
    private String naverkey;

    @Bean
    feign.Logger.Level feignLoggerLevel() {
        return Logger.Level.HEADERS;
    }

    @Bean
    public Feign.Builder feignBuilder() {
        return Feign.builder()
                .encoder(new JacksonEncoder())
                .decoder(new JacksonDecoder());
    }

    @Bean
    public RequestInterceptor requestKeyBearerInterceptor() {
        return template -> template.header("X-Naver-Client-Id", naverId)
                .header("X-Naver-Client-Secret", naverkey)
                .request();
    }
}
