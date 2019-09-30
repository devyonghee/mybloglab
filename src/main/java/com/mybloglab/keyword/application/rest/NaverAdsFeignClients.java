package com.mybloglab.keyword.application.rest;

import com.mybloglab.blog.application.model.NaverSearchDto;
import com.mybloglab.common.config.FeignConfiguration;
import feign.RequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@FeignClient(name = "naver.ads.api",
        url = "${naver.ads.url}",
        configuration = NaverAdsFeignClients.NaverFeignConfiguration.class
)
public interface NaverAdsFeignClients {

    @GetMapping("/search/blog.json?query={query}&display={display}")
    NaverSearchDto searchBlogByKeyword(@PathVariable("query") String query,
                                       @PathVariable("display") Integer display

    );

    class NaverFeignConfiguration extends FeignConfiguration {
        @Bean
        public RequestInterceptor requestKeyBearerInterceptor(
                @Value("${naver.ads.id}") String naverId,
                @Value("${naver.ads.key}") String naverkey,
                @Value("${naver.ads.signature}") String naverSignature
        ) throws NoSuchAlgorithmException, InvalidKeyException, UnsupportedEncodingException {

            Mac hmacSHA256 = Mac.getInstance("HmacSHA256");
            final SecretKeySpec secret_key = new javax.crypto.spec.SecretKeySpec(naverSignature.getBytes("UTF-8"), "HmacSHA256");
            hmacSHA256.init(secret_key);
            return template -> template
                    .header("X-API-KEY", naverkey)
                    .header("X-Customer", naverId)
                    .header("X-Signature", naverSignature)
                    .request();
        }
    }
}

