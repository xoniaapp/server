import db from "../utils/db";

export default {
  get_messages: async (channelId: string) => {
    return await db.message.findMany({
      where: {
        channelId: channelId,
      },
    })
  },
  get_message: async (id: string) => {
    return await db.message.findFirst({
      where: {
        id: id,
      },
    });
  },
  send_message: async (body: any) => {
    return await db.message.create({
      data: {
        text: body.text,
        attachment: body.attachment,
        reaction: body.reaction,
        authorId: body.authorId,
        channelId: body.channelId,
        guildId: body.guildId,
        groupId: body.groupId,
      },
    });
  },
  edit_message: async (body: any, id: string) => {
    return await db.message.update({
      where: {
        id: id,
      },
      data: {
        text: body.text,
        attachment: body.attachment,
        reaction: body.reaction,
      },
    });
  },
  delete_message: async (id: string) => {
    return await db.message.delete({
      where: {
        id: id,
      }
    })
  },
};
