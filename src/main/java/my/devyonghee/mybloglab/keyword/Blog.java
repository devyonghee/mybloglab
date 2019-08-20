package my.devyonghee.mybloglab.keyword;

import lombok.Builder;
import lombok.Getter;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Builder
@Getter
public class Blog {
    private String title;
    private String user;
    private String image;
    private String link;

    private Set<Post> posts = new HashSet<>();

    public static Blog of(Document document) {
        Elements channel = document.select("channel");
        String image_url = channel.select("image url").text();
        String link = channel.select("link").first().text();

        Stream<Post> posts = channel.select("item").stream().map(element ->
                Post.builder()
                        .title(element.select("title").text())
                        .link(element.select("link").text())
                        .created(LocalDateTime.parse(element.select("pubDate").text(), DateTimeFormatter.RFC_1123_DATE_TIME))
                        .build()
        );

        return Blog
                .builder()
                .title(document.title())
                .image(image_url)
                .link(link)
                .posts(posts.collect(Collectors.toSet()))
                .build();
    }
}
