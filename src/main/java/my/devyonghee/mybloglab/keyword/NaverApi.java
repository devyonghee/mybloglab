package my.devyonghee.mybloglab.keyword;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Setter
@Getter
public class NaverApi {
    final private String blogUrl = "https://openapi.naver.com/v1/search/blog.json";
    private String keyword;
    private String query;
    private Integer display = 5;
    private Integer start = 1;
    private NaverSort sort = NaverSort.SIMILAR;

    public UriComponents getQueryUri() {
        return UriComponentsBuilder
                .fromUriString(blogUrl)
                .queryParam("query", keyword)
//                .queryParam("display", display)
//                .queryParam("sort", sort.getQuery())
                .build();

    }
}


