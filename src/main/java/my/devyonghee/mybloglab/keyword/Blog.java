package my.devyonghee.mybloglab.keyword;

import lombok.Builder;
import lombok.Getter;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.util.*;
import java.util.stream.Collectors;

@Builder
@Getter
public class Blog {
    private String title;
    private String image;
    private String link;
    private Set<Post> posts = new HashSet<>();

    public static Blog of(Document document) {
        Element channel = document.selectFirst("channel");
        String image_url = channel.selectFirst("image url").text();
        String link = channel.selectFirst("link").text();
        Set<Post> posts = channel
                .select("item")
                .stream()
                .map(Post::of)
                .collect(Collectors.toSet());

        return Blog
                .builder()
                .title(document.title())
                .image(image_url)
                .link(link)
                .posts(posts)
                .build();
    }
}
