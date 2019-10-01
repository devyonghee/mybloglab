package com.mybloglab.api.blog.application.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.net.URI;
import java.time.LocalDate;

@Getter
public class SearchPostDto {
    private String title;
    private String link;
    private String description;

    @JsonProperty("bloggername")
    private String bloggerName;

    @JsonProperty("bloggerlink")
    private String bloggerLink;

    @JsonProperty("postdate")
    private LocalDate postDate;

    public boolean isEqualToLink(URI url) {
        return this.bloggerLink.contains(url.getSchemeSpecificPart());
    }
}


