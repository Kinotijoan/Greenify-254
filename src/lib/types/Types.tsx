export interface Blog {
  title: string;
  description: string;
  author: string | null;
  date: string;
  image: string | null;
  link: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Individual {
userName?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  profileimageUrl?: string | null | undefined;
  email: string;
}

export interface Post {
  title: string;
  description: string;
  price?: number;
  imgUrl: string;
  websiteLink?: string;
  eventDate?: string;
  eventTime?: string;
  venue?: string;
}

export interface Company {
  wasteFacilityId: number
  address: string;
  latitude: number;
  longitude: number;
  name: string;
  email: string;
  district: string;
  county: string;
}

export interface CompanyAccount {
  name?: string;
  email: string;
  location?: string | undefined;
  phoneNumber?: string | null | undefined;
  bio?: string | null | undefined;
  profileimageUrl?: string | null | undefined;

}
