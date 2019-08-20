export type Blogger = {
  name: string;
  link?: string;
}

export type Blog = {
  name: string;
  link?: string;
  blogger?: Blogger;
}