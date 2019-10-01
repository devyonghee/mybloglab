package com.mybloglab.api.blog.ui;

import com.mybloglab.api.blog.application.model.BlogDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.parser.Parser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@RestController
@RequestMapping("blog")
public class BlogController {

    @GetMapping
    public ResponseEntity<BlogDto> search(String url) throws URISyntaxException, IOException {
        Optional<String> scheme = Optional.ofNullable(new URI(url).getScheme());
        if (!scheme.isPresent()) url = "http://" + url;
        Document blogDocument = Jsoup.connect(url).get();
        String rssHref = blogDocument.select("link[type=application/rss+xml]").attr("href");
        if (rssHref.isEmpty()) throw new URISyntaxException(url, "rss가 존재하지 않습니다.");

        Document rssDocument = Jsoup.connect(rssHref).get();
        Document document = Jsoup.parse(rssDocument.html(), "", Parser.xmlParser());
        BlogDto blog = BlogDto.of(document);
        return ResponseEntity.status(HttpStatus.OK).body(blog);
    }
}
