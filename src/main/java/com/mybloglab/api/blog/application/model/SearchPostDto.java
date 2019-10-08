package com.mybloglab.api.blog.application.model;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;

import java.net.URI;
import java.time.LocalDate;

@Getter
public class SearchPostDto {
    private String title;
    private String link;
    private String description;

    @JsonSetter("bloggername")
    private String bloggerName;

    @JsonSetter("bloggerlink")
    private String bloggerLink;

    @JsonSetter("postdate")
    private LocalDate postDate;

    public boolean isEqualToLink(URI url) {
        return this.bloggerLink.contains(url.getSchemeSpecificPart());
    }
}


