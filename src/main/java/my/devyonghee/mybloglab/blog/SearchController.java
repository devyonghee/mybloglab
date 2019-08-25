package my.devyonghee.mybloglab.blog;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.parser.Parser;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@RestController
@RequestMapping("blog")
public class SearchController {
    private final RestTemplate restTemplate;

    private final HttpHeaders naverHeaders;

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
    public ResponseEntity searchPosts(NaverBlogApi naverBlogApi) {
//        naverHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//        HttpEntity httpEntity = new HttpEntity(naverHeaders);
//        return restTemplate.exchange(naver.getQueryUri().toUriString(), HttpMethod.GET, httpEntity, String.class);
        return new ResponseEntity(HttpStatus.OK);
    }
}
