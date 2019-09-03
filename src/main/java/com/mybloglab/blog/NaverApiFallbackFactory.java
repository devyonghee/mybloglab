package com.mybloglab.blog;

import com.mybloglab.blog.dto.NaverSearchDto;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
class NaverApiFallbackFactory implements FallbackFactory<NaverFeignClients> {
    @Override
    public NaverFeignClients create(Throwable cause) {
        return new NaverFeignClients() {
            @Override
            public NaverSearchDto searchBlogByKeyword(String query, Integer display) {
                log.error("{} searching fail", query);
                return null;
            }

        };
    }
}