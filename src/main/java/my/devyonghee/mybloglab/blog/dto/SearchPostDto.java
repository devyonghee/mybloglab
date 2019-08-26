package my.devyonghee.mybloglab.blog.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonFormatTypes;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.TimeZone;

@Setter
@Getter
public class SearchPostDto {
    private String title;
    private String link;
    private String description;

    @JsonProperty("bloggername")
    private String bloggerName;

    @JsonProperty("bloggerlink")
    private String bloggerLink;

    @JsonFormat(pattern = "yyyyMMdd")
    @JsonProperty("postdate")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate postDate;
}


