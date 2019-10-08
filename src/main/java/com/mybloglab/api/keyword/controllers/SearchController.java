package com.mybloglab.api.keyword.controllers;

import com.mybloglab.api.blog.application.model.NaverSearchDto;
import com.mybloglab.api.blog.application.model.SearchPostDto;
import com.mybloglab.api.blog.application.rest.NaverFeignClients;
import com.mybloglab.api.keyword.application.model.KeywordDto;
import com.mybloglab.api.keyword.application.model.KeywordListDto;
import com.mybloglab.api.keyword.application.rest.NaverAdsFeignClients;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("keywords")
public class SearchController {

    private final NaverAdsFeignClients adsFeignClients;
    private final NaverFeignClients naverFeignClients;


    public SearchController(NaverAdsFeignClients adsFeignClients, NaverFeignClients naverFeignClients) {
        this.adsFeignClients = adsFeignClients;
        this.naverFeignClients = naverFeignClients;
    }

    @GetMapping("search/{keyword}")
    public ResponseEntity<KeywordDto> search(@PathVariable("keyword") String keyword) {
        String replaceKeyword = keyword.replaceAll(",", "");
        KeywordListDto keywordListDto = adsFeignClients.searchKeyword(replaceKeyword);
        KeywordDto matchedKeyword = keywordListDto.findKeyword(replaceKeyword);
        NaverSearchDto naverSearchDto = naverFeignClients.searchBlogByKeyword(replaceKeyword, 10);
        matchedKeyword.add(naverSearchDto.getItems().toArray(new SearchPostDto[0]));
        return ResponseEntity.status(HttpStatus.OK).body(matchedKeyword);
    }

}
