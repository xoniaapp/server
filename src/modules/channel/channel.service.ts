import db from "../../utils/db";

const createChannel = async (body: ICreateChannel) => {
  return await db.channel.create({
    data: {
      name: body.name,
      type: body.type,
      private: body.private,
      guildId: body.guildId,
    },
  });
};

const getChannel = async (id: string) => {
  return await db.channel.findUnique({
    where: {
      id: id,
    },
  });
};

const updateChannel = async (body: IUpdateChannel) => {
  return db.channel.updateMany({
    data: {
      name: body.name,
      type: body.type,
      private: body.private,
    },
  });
};

const deleteChannel = async (id: string) => {
  return db.channel.delete({
    where: {
      id: id,
    },
  });
};

export { getChannel, createChannel, updateChannel, deleteChannel };
