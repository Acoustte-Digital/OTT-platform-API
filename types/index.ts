export interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
  category: string;
  isTrending: boolean;
  isPopular: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
