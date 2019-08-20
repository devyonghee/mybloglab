package my.devyonghee.mybloglab.keyword;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@JsonIgnoreProperties
public class NaverResponse {
    private String rss;
    private String channel;
    private String lastBuildDate;
    private String start;
    private String display;
    private String title;
    private String link;
    private String description;
    private String bloggername;
    private String bloggerlink;
}
