export interface Blog {
  title: string;
  description: string;
  author: string | null;
  date: string;
  image: string | null;
  link: string;
};

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export interface Post{
  title: string;
  description: string;
  price?: number;
  imgUrl: string;
  websiteLink?: string;
  eventDate?: string;
  eventTime?: string;
  venue?: string;
}
