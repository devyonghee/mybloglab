package my.devyonghee.mybloglab.keyword;

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
