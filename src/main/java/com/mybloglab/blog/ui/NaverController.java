package com.mybloglab.blog.ui;

import com.mybloglab.blog.application.model.NaverSearchDto;
import com.mybloglab.blog.application.model.NaverSort;
import com.mybloglab.blog.application.rest.NaverFeignClients;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@RestController
@RequestMapping("naver")
public class NaverController {

    private final NaverFeignClients naverFeignClients;

    public NaverController(NaverFeignClients naverFeignClients) {
        this.naverFeignClients = naverFeignClients;
    }

    @GetMapping("posts/search")
    public ResponseEntity naverPosts(String blogLink,
                                     String keyword,
                                     @RequestParam(required = false, defaultValue = "similar") NaverSort sort,
                                     @RequestParam(required = false, defaultValue = "100") Integer display) throws URISyntaxException {

        NaverSearchDto naverSearchDto = naverFeignClients.searchBlogByKeyword(keyword, display);
        Optional<Integer> itemIndex = naverSearchDto.findItemIndexByURI(new URI(blogLink));

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(itemIndex.map(index -> index + 1).orElse(0));
    }
}
