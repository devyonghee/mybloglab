package com.mybloglab.blog.dto;

import lombok.Getter;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Getter
public class NaverSearchDto {
//    @JsonFormat(
//            shape = JsonFormat.Shape.STRING,
//            pattern = "EEE, dd MMM yyyy HH:mm:ss Z"
//    )
//    private LocalDateTime lastBuildDate;

    private Integer total;
    private Integer start;
    private Integer display;

    private List<SearchPostDto> items = new ArrayList<>();

    public Optional<Integer> findItemIndexByURI(URI url) {
        Optional<SearchPostDto> first = this.items.stream().filter(item -> item.isEqualToLink(url)).findFirst();
        return first.map(searchPostDto -> this.items.indexOf(searchPostDto));
    }
}
