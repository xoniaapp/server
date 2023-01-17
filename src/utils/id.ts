import { v1, v4 } from "uuid";

export class Generate {
  discriminator() {
    return (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);
  }
  snowflake() {
    return `${Date.now()}${Math.floor(100000 + Math.random() * 900000)}`;
  }
  v1() {
    return v1().toString();
  }
  v4() {
    return v4().toString();
  }
}