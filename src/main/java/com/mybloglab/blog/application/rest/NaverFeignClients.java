package com.mybloglab.blog.application.rest;

import com.mybloglab.blog.application.model.NaverSearchDto;
import com.mybloglab.common.config.FeignConfiguration;
import feign.RequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "naver-api",
        url = "${naver-api.url}",
        configuration = NaverFeignClients.NaverFeignConfiguration.class
)
public interface NaverFeignClients {

    @GetMapping("/search/blog.json?query={query}&display={display}")
    NaverSearchDto searchBlogByKeyword(@PathVariable("query") String query,
                                       @PathVariable("display") Integer display

    );

    class NaverFeignConfiguration extends FeignConfiguration {
        @Bean
        public RequestInterceptor requestKeyBearerInterceptor(@Value("${naver-api.id}") String naverId, @Value("${naver-api.key}") String naverkey) {
            return template -> template.header("X-Naver-Client-Id", naverId)
                    .header("X-Naver-Client-Secret", naverkey)
                    .request();
        }
    }
}

