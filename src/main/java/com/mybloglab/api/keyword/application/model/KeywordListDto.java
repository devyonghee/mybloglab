package com.mybloglab.api.keyword.application.model;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class KeywordListDto {

    @JsonSetter("keywordList")
    private List<KeywordDto> keywordList = new ArrayList<>();
}

