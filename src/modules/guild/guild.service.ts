import db from "../../utils/db";

const createGuild = async (body: ICreateGuild) => {
  return await db.guild.create({
    data: {
      name: body.name,
      icon_url: body.icon_url,
      banner_bg: body.banner_bg,
      invite_bg: body.invite_bg,
      partner: body.partner,
      owner_id: body.owner_id,
    },
  });
};

export { createGuild };