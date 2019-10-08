package com.mybloglab.api.keyword.application.rest;

import com.mybloglab.api.common.config.FeignConfiguration;
import com.mybloglab.api.common.util.Signatures;
import com.mybloglab.api.keyword.application.model.KeywordListDto;
import feign.RequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.SignatureException;

@FeignClient(name = "naver.ads.api",
        url = "${naver.ads.url}",
        configuration = NaverAdsFeignClients.NaverAdsFeignConfiguration.class
)
public interface NaverAdsFeignClients {

    @GetMapping("/keywordstool?showDetail=1")
    KeywordListDto searchKeyword(@RequestParam("hintKeywords") String keyword);

    class NaverAdsFeignConfiguration extends FeignConfiguration {

        @Bean
        public RequestInterceptor requestInterceptor(
                @Value("${naver.ads.id}") String naverId,
                @Value("${naver.ads.key}") String naverkey,
                @Value("${naver.ads.secret}") String secretKey
        ) {
            return template -> {
                try {
                    String timestamp = String.valueOf(System.currentTimeMillis());
                    template
                            .header("X-Timestamp", timestamp)
                            .header("X-API-KEY", naverkey)
                            .header("X-Customer", naverId)
                            .header("X-Signature", Signatures.of(timestamp, template.method(), template.path(), secretKey))
                            .request();
                } catch (SignatureException e) {
                    e.printStackTrace();
                }
            };
        }
    }
}

