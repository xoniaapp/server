import crypto from "crypto";

export default class Crypto {
  /**
   * Returns MD5 hash based on given value
   * @param {string} value - The value to hash
   */
  md_hash(value: string) {
    return crypto.createHash("md5").update(value).digest("hex").toString();
  }
  /**
   * Returns SHA256 hash based on given value
   * @param {string} value - The value to hash
   */
  sha256_hash(value: string) {
    return crypto.createHash("sha256").update(value).digest("hex").toString();
  }
}
