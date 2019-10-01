package com.mybloglab.api.keyword.ui;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mybloglab.api.keyword.application.model.KeywordDto;
import com.mybloglab.api.keyword.application.model.KeywordListDto;
import com.mybloglab.api.keyword.application.rest.NaverAdsFeignClients;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("keywords")
public class SearchController {

    private final NaverAdsFeignClients adsFeignClients;
    private final ObjectMapper mapper;

    public SearchController(NaverAdsFeignClients adsFeignClients, ObjectMapper mapper) {
        this.adsFeignClients = adsFeignClients;
        this.mapper = mapper;
    }

    @GetMapping("search/{keyword}")
    public ResponseEntity<String> search(@PathVariable("keyword") String keyword) throws IOException {
        ObjectNode objectNode = mapper.readValue(adsFeignClients.searchKeyword(keyword), ObjectNode.class);
        String listDto = adsFeignClients.searchKeyword(keyword);
        KeywordDto[] keywordLists = mapper.readValue(objectNode.get("keywordList").toString(), KeywordDto[].class);
        return ResponseEntity.status(HttpStatus.OK).body(listDto);
    }

}
