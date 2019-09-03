package com.mybloglab.blog;

import com.mybloglab.blog.dto.NaverSearchDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "naver-api",
        url = "${naver-api.url}",
        configuration = NaverFeignConfiguration.class,
        fallbackFactory = NaverApiFallbackFactory.class)
public interface NaverFeignClients {

    @GetMapping("/search/blog.json?query={query}&display={display}")
    NaverSearchDto searchBlogByKeyword(@PathVariable("query") String query,
                                       @PathVariable("display") Integer display

    );
}
