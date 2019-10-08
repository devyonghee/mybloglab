package com.mybloglab.api.keyword.application.model;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class KeywordListDto {

    @JsonSetter("keywordList")
    private Set<KeywordDto> keywordList = new HashSet<>();

    public KeywordDto findKeyword(String matchKeyword) {
        Set<KeywordDto> relKeywordsDto = keywordList.stream()
                .filter(keyword -> keyword.contain(matchKeyword))
                .collect(Collectors.toSet());

        KeywordDto matchedKeyword = relKeywordsDto.stream()
                .filter(keyword -> keyword.match(matchKeyword))
                .findFirst()
                .orElse(KeywordDto.EMPTY);

        String[] relKeywords = relKeywordsDto.stream()
                .filter(keyword -> !keyword.match(matchKeyword)).map(KeywordDto::getKeyword).toArray(String[]::new);

        matchedKeyword.addRelationKeyword(relKeywords);
        return matchedKeyword;
    }
}