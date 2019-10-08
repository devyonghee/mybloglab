package com.mybloglab.api.keyword.application.model;

import com.fasterxml.jackson.annotation.JsonSetter;
import com.mybloglab.api.blog.application.model.SearchPostDto;
import lombok.Getter;

import java.util.*;

@Getter
public class KeywordDto {
    public static KeywordDto EMPTY = new KeywordDto();

    @JsonSetter("relKeyword")
    private String keyword;

    @JsonSetter("monthlyPcQcCnt")
    private String monthlyPcQueryCnt;

    @JsonSetter("monthlyMobileQcCnt")
    private String monthlyMobileQueryCnt;

    @JsonSetter("monthlyAvePcClkCnt")
    private String monthlyAvgPcClickCnt;

    @JsonSetter("monthlyAveMobileClkCnt")
    private String monthlyAvgMobileClickCnt;

    @JsonSetter("monthlyAvePcCtr")
    private String monthlyAvgPcClickRate;

    @JsonSetter("monthlyAveMobileCtr")
    private String monthlyAvgMobileClickRate;

    @JsonSetter("plAvgDepth")
    private String avgPcDepth;

    @JsonSetter("compIdx")
    private String competitiveness;

    private Set<String> relKeywords = new HashSet<>();

    private List<SearchPostDto> posts = new ArrayList<>();

    public boolean match(String keyword) {
        return this.keyword.compareToIgnoreCase(keyword) == 0;
    }

    public boolean contain(String keyword) {
        return this.keyword.toUpperCase().contains(keyword.toUpperCase());
    }

    public void addRelationKeyword(String... keywords) {
        this.relKeywords.addAll(Arrays.asList(keywords));
    }

    public void add(SearchPostDto... posts) {
        this.posts.addAll(Arrays.asList(posts));
    }

}

