import jwt from "jsonwebtoken";
import client from "../client.mjs";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { id } = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(id);
    const user = await client.user.findUnique({ where: { id } });
    if (user) {
      console.log(user);
      return user;
    } else {
      console.log("no user found");
      return null;
    }
  } catch {
    console.log("error");
    return null;
  }
};

export function protectedResolver(ourResolver) {
  return function (root, args, context, info) {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "Please log in to perform this action.",
      };
    }
    return ourResolver(root, args, context, info);
  };
}
