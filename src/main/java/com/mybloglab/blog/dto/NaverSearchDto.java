package com.mybloglab.blog.dto;

import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class NaverSearchDto {
//    @JsonFormat(
//            shape = JsonFormat.Shape.STRING,
//            pattern = "EEE, dd MMM yyyy HH:mm:ss Z"
//    )
//    private LocalDateTime lastBuildDate;

    public Integer total;
    public Integer start;
    public Integer display;

    public List<SearchPostDto> items = new ArrayList<>();
}
