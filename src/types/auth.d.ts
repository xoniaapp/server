declare interface ICreateUser {
  username: string;
  suffix: number;
  email: string;
  password: string;
}

declare interface IUpdateUser {
  username: string;
  image_url: string | undefined;
  email: string;
  password: string | undefined;
}
