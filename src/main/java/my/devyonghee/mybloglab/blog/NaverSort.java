package my.devyonghee.mybloglab.blog;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum NaverSort {

    @JsonProperty("similar")
    SIMILAR("sim"),

    @JsonProperty("date")
    DATE("date");

    private String name;

    NaverSort(String name) {
        this.name = name;
    }

    @JsonValue
    @Override
    public String toString() {
        return this.name;
    }


}
