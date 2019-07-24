package my.shiw111.mybloglab.keyword;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

@RestController
@RequestMapping("keyword")
public class SearchController {
    private final RestTemplate restTemplate;

    public SearchController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("search")
    public ResponseEntity<String> search(String keyword) {
        if (keyword.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        NaverBlog naver = new NaverBlog();
        HttpHeaders apiHeader = naver.getApiHeader();
        apiHeader.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity httpEntity = new HttpEntity(apiHeader);
        return restTemplate.exchange(naver.getQueryUri().toUriString(), HttpMethod.GET, httpEntity, String.class);
    }
}
