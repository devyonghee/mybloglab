package my.devyonghee.mybloglab.blog.dto;

import lombok.Getter;
import lombok.Setter;
import my.devyonghee.mybloglab.blog.NaverSort;

@Setter
@Getter
public class RequestSearch {
    private String keyword;
    private Integer display = 100;
    private NaverSort sort = NaverSort.similar;
}


