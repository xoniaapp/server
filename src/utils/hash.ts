import argon2 from "argon2";

const hash = async (plain: string) => {
  return await argon2.hash(plain);
};

const verify = async (plain: string, hash: string) => {
  return await argon2.verify(hash, plain);
};

export { hash, verify };
