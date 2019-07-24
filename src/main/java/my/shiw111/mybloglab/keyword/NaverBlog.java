package my.shiw111.mybloglab.keyword;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpHeaders;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Setter
@Getter
public class NaverBlog {
    final private String blogUrl = "https://openapi.naver.com/v1/search/blog.json";
    final private String id = "wimMMqND6IS9z3VIzppq";
    final private String key = "l7B0yLlyEy";
    private String keyword;
    private String query;
    private Integer display = 5;
    private Integer start = 1;
    private NaverSort sort = NaverSort.SIMILAR;

    public HttpHeaders getApiHeader() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-NaverBlog-Client-Id", id);
        headers.add("X-NaverBlog-Client-Secret", key);
        return headers;
    }

    public UriComponents getQueryUri() {
        return UriComponentsBuilder
                .fromUriString(blogUrl)
                .queryParam("query", keyword)
                .queryParam("display", display)
                .queryParam("sort", sort.getQuery())
                .build();

    }
}


