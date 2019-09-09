package com.mybloglab.blog;

import com.mybloglab.blog.dto.NaverSearchDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.parser.Parser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@RestController
@RequestMapping("blog")
public class SearchController {

    private final NaverFeignClients naverFeignClients;

    public SearchController(NaverFeignClients naverFeignClients) {
        this.naverFeignClients = naverFeignClients;
    }

    @GetMapping("")
    public ResponseEntity<Blog> search(String url) throws URISyntaxException, IOException {
        Optional<String> scheme = Optional.ofNullable(new URI(url).getScheme());
        if (!scheme.isPresent()) url = "http://" + url;
        Document blogDocument = Jsoup.connect(url).get();
        String rssHref = blogDocument.select("link[type=application/rss+xml]").attr("href");
        if (rssHref.isEmpty()) throw new URISyntaxException(url, "rss가 존재하지 않습니다.");

        Document rssDocument = Jsoup.connect(rssHref).get();
        Document document = Jsoup.parse(rssDocument.html(), "", Parser.xmlParser());
        Blog blog = Blog.of(document);
        return new ResponseEntity<>(blog, HttpStatus.OK);
    }


    @GetMapping("search")
    public ResponseEntity searchPosts(String keyword,
                                      @RequestParam(required = false, defaultValue = "similar") NaverSort sort,
                                      @RequestParam(required = false, defaultValue = "100") Integer display) {

        NaverSearchDto naverSearchDto = naverFeignClients.searchBlogByKeyword(keyword, display);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(naverSearchDto);
    }
}
