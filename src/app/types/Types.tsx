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
