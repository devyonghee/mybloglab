export interface Blogger {
  name: String;
  link: String;
}

export interface Blog {
  name: String;
  link: String;
  blogger: Blogger;
}