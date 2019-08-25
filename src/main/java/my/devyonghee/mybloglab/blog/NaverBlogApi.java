package my.devyonghee.mybloglab.blog;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Setter
@Builder
@AllArgsConstructor
public class NaverBlogApi {
    private String keyword;
    private Integer display = 5;

    private NaverSort sort = NaverSort.SIMILAR;

    @JsonCreator
    public static NaverSort fromString(@JsonProperty("sort") final String string) {
        for (NaverSort type : NaverSort.values()) {
            System.out.println(type.name());
        }
        return NaverSort.DATE;
    }

    @JsonIgnore
    private final String blogUrl = "https://openapi.naver.com/v1/search/blog.json";

    public UriComponents getQueryUri() {
        return UriComponentsBuilder
                .fromUriString(blogUrl)
                .queryParam("query", keyword)
//                .queryParam("display", 100)
//                .queryParam("sort", sort)
                .build();

    }
}


