import db from "../utils/db";

const get_message = async (id: string) => {
  return await db.message.findFirst({
    where: {
      id: id,
    },
  });
};

const get_messages = async (channelId: string) => {
  return await db.message.findMany({
    where: {
      channelId: channelId,
    },
  });
};

const send_message = async (body: any) => {
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
};

const edit_message = async (body: any, id: string) => {
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
};

const delete_message = async (id: string) => {
  return await db.message.delete({
    where: {
      id: id,
    },
  });
};

export {
  get_message,
  get_messages,
  send_message,
  edit_message,
  delete_message,
};
