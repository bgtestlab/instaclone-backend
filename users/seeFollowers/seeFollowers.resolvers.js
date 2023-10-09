import client from "../../client.mjs";

export default {
  Query: {
    seeFollowers: async (_, { username, page }) => {
      // Check if username exists
      const ok = await client.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!ok) {
        return {
          ok: false,
          error: "User not found",
        };
      }

      // query followers
      const followers = await client.user
        .findUnique({ where: { username } })
        .followers({ take: 5, skip: (page - 1) * 5 });

      // check total followers
      const totalFollowers = await client.user.count({
        where: { following: { some: { username } } },
      });

      return {
        ok: true,
        followers,
        totalPages: Math.ceil(totalFollowers / 5),
      };
    },
  },
};
