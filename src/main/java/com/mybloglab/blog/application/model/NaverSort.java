package com.mybloglab.blog.application.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum NaverSort {

    similar("sim"),

    date("date");

    private String name;
    NaverSort(String name) {
        this.name = name;
    }

    @Override
    @JsonValue
    public String toString() {
        return this.name;
    }
}