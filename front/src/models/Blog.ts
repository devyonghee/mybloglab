import moment, { Moment } from 'moment';

class Post {
  title: string;
  link?: URL;
  created?: Moment;

  constructor (title: string, link?: URL, created?: Moment) {
    this.title = title;
    this.link = link;
    this.created = created;
  }

  static fromJson (json: any): Post {
    return new Post(
      json.title,
      json.link ? new URL(json.link) : undefined,
      json.created ? moment(json.created) : undefined);
  }
}

class Blog {
  title: string;
  link?: URL;
  image?: URL;
  posts: Array<Post> = [] as Array<Post>;

  constructor (title: string, link?: URL, image?: URL, ...posts: Array<Post>) {
    this.title = title;
    this.link = link;
    this.image = image;
    this.posts = posts;
  }

  static fromJson (json: any): Blog {
    return new Blog(
      json.title,
      json.link ? new URL(json.link) : undefined,
      json.image ? new URL(json.image) : undefined,
      ...json.posts.filter((post: Post) => post.title).map(Post.fromJson)
    );
  }
}

export {
  Blog,
  Post
};
