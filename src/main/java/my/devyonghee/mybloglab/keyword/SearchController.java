package my.devyonghee.mybloglab.keyword;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Collections;

@RestController
@RequestMapping("search")
public class SearchController {
    private final RestTemplate restTemplate;

    private final HttpHeaders naverHeaders;

    public SearchController(RestTemplate restTemplate, HttpHeaders naverHeaders) {
        this.restTemplate = restTemplate;
        this.naverHeaders = naverHeaders;
    }

    @GetMapping("search")
    public ResponseEntity<String> search(String keyword) {
        if (keyword.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        NaverApi naver = new NaverApi();
        naver.setKeyword(keyword);
        naverHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity httpEntity = new HttpEntity(naverHeaders);
        System.out.println(naver.getQueryUri().toUriString());
        return restTemplate.exchange(naver.getQueryUri().toUriString(), HttpMethod.GET, httpEntity, String.class);
    }


    @GetMapping("posts")
    public ResponseEntity<Blog> searchPosts(String url) throws IOException {
        Document blogDocument = Jsoup.connect(url).get();
        String rssHref = blogDocument.select("link[type=application/rss+xml]").attr("href");
        if (rssHref.isEmpty())
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        Document rssDocument = Jsoup.connect(rssHref).get();
        Blog blog = Blog.of(rssDocument);
        return new ResponseEntity<>(blog, HttpStatus.OK);
    }
}
