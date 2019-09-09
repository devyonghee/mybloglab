// eslint-disable-next-line max-classes-per-file
import moment, { Moment } from 'moment';

class Post {
  title: string;

  link?: URL;

  created?: Moment;

  rank?: number;

  isExist?: boolean;

  constructor(title: string, link?: URL, created?: Moment) {
    this.title = title;
    this.link = link;
    this.created = created;
  }

  static fromJson(json: any): Post {
    return new Post(
      json.title,
      json.link ? new URL(json.link) : undefined,
      json.created ? moment(json.created) : undefined,
    );
  }
}

class Blog {
  title: string;

  link?: URL;

  image?: URL;

  posts: Array<Post> = [] as Array<Post>;

  constructor(title: string, link?: URL, image?: URL, ...posts: Array<Post>) {
    this.title = title;
    this.link = link;
    this.image = image;
    this.posts = posts;
  }

  static fromJson(json: any): Blog {
    return new Blog(
      json.title,
      json.link ? new URL(json.link) : undefined,
      json.image ? new URL(json.image) : undefined,
      ...json.posts
        .filter((post: Post) => post.title)
        .map(Post.fromJson)
        .sort((post1: Post, post2: Post) => {
          if (!!post1.created && !!post2.created)
            return post1.created.isBefore(post2.created) ? 1 : -1;
          if (post1.created && !post2.created) return -1;
          if (!post1.created && post2.created) return 1;
          return 0;
        }),
    );
  }
}

export { Blog, Post };
