package my.devyonghee.mybloglab.blog;

import my.devyonghee.mybloglab.blog.dto.RequestSearch;
import my.devyonghee.mybloglab.blog.dto.NaverSearchDto;
import my.devyonghee.mybloglab.blog.dto.SearchPostDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.parser.Parser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("blog")
public class SearchController {
    private final RestTemplate restTemplate;

    private final HttpHeaders naverHeaders;

    @Value("${naver.blog.url}")
    private String blogApiUrl;

    public SearchController(RestTemplate restTemplate, HttpHeaders naverHeaders) {
        this.restTemplate = restTemplate;
        this.naverHeaders = naverHeaders;
    }

    @GetMapping("")
    public ResponseEntity<Blog> search(String url) throws URISyntaxException, IOException {
        Optional<String> scheme = Optional.ofNullable(new URI(url).getScheme());
        if (!scheme.isPresent()) url = "http://" + url;
        Document blogDocument = Jsoup.connect(url).get();
        String rssHref = blogDocument.select("link[type=application/rss+xml]").attr("href");
        if (rssHref.isEmpty()) throw new URISyntaxException(url, "rss가 존재하지 않습니다.");

        Document rssDocument = Jsoup.connect(rssHref).get();
        Blog blog = Blog.of(Jsoup.parse(rssDocument.html(), "", Parser.xmlParser()));
        return new ResponseEntity<>(blog, HttpStatus.OK);
    }


    @GetMapping("search")
    public ResponseEntity<List<SearchPostDto>> searchPosts(RequestSearch postSearchDto) {
        UriComponents query = UriComponentsBuilder.fromUriString(blogApiUrl)
                .queryParam("query", postSearchDto.getKeyword())
                .queryParam("display", postSearchDto.getDisplay())
                .queryParam("sort", postSearchDto.getSort())
                .build();

        naverHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity httpEntity = new HttpEntity(naverHeaders);

        ResponseEntity<NaverSearchDto> exchange = restTemplate.exchange(query.toUriString(), HttpMethod.GET, httpEntity, NaverSearchDto.class);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Objects.requireNonNull(exchange.getBody()).getItems());
    }
}
