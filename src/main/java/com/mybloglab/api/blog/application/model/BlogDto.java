package com.mybloglab.api.blog.application.model;

import lombok.Builder;
import lombok.Getter;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.util.*;
import java.util.stream.Collectors;

@Builder
@Getter
public class BlogDto {
    private String title;
    private String image;
    private String link;
    private Set<PostDto> posts = new HashSet<>();

    public static BlogDto of(Document document) {
        Element channel = document.selectFirst("channel");
        String image_url = channel.selectFirst("image url").text();
        String link = channel.selectFirst("link").text();
        Set<PostDto> posts = channel
                .select("item")
                .stream()
                .map(PostDto::of)
                .collect(Collectors.toSet());

        return BlogDto
                .builder()
                .title(document.title())
                .image(image_url)
                .link(link)
                .posts(posts)
                .build();
    }
}
