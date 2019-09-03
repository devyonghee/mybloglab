package com.mybloglab.blog;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import org.jsoup.nodes.Element;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Builder
@Getter
public class Post {
    private String title;
    private String link;

    @JsonFormat(
            shape = JsonFormat.Shape.STRING,
            pattern = "yyyy-MM-dd hh:mm:ss"
    )
    private LocalDateTime created;

    public static Post of(Element itemElement) {
        PostBuilder postBuilder = builder();
        tagElement(itemElement, "title").ifPresent(element -> postBuilder.title(element.text()));
        tagElement(itemElement, "link").ifPresent(element -> postBuilder.link(element.text()));
        tagElement(itemElement, "pubDate").ifPresent(element ->
                postBuilder.created(LocalDateTime.parse(element.text(), DateTimeFormatter.RFC_1123_DATE_TIME)));
        return postBuilder.build();
    }

    private static Optional<Element> tagElement(Element element, String tag) {
        return Optional.ofNullable(element.selectFirst(tag));
    }
}
