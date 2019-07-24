package my.shiw111.mybloglab.keyword;

public enum NaverSort {
    SIMILAR("sim"), DATE("date");


    private final String query;

    NaverSort(String query) {
        this.query = query;
    }

    public String getQuery() {
        return this.query;
    }
}
