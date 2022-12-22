import db from "../../utils/db";

interface ICreateGuild {
  name: string,
  icon_url: string,
  banner_bg: string,
  invite_bg: string,
  partner: boolean,
  owner_id: string,
}

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