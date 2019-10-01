package com.mybloglab.api.keyword.application.model;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;

@Getter
public class KeywordDto {

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
}

