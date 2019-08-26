package my.devyonghee.mybloglab.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ApiHeaderConfiguration {

    @Value("${naver.blog.id}")
    private String naverId;
    @Value("${naver.blog.key}")
    private String naverkey;

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public HttpHeaders NaverHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Naver-Client-Id", naverId);
        headers.add("X-Naver-Client-Secret", naverkey);
        return headers;
    }
}
