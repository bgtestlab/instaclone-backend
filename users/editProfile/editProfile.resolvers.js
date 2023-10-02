import bcrypt from "bcrypt";
import client from "../../client.mjs";
import { protectedResolver } from "../users.utils.mjs";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _, // root
        { firstName, lastName, username, email, password: newPassword }, // args
        { loggedInUser } // context
      ) => {
        console.log(loggedInUser);

        // hashing
        let uglyPassword = null;
        if (newPassword) {
          uglyPassword = await bcrypt.hash(newPassword, 10);
        }

        // update user
        const updatedUser = await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            firstName,
            lastName,
            username,
            email,
            ...(uglyPassword && { password: uglyPassword }),
          },
        });

        if (updatedUser.id) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "could not update the profile.",
          };
        }
      }
    ),
  },
};
