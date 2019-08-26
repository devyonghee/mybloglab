package my.devyonghee.mybloglab.blog;

public enum NaverSort {

    similar("sim"),

    date("date");

    private String name;
    NaverSort(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return this.name;
    }
}