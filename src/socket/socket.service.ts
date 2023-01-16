import db from "../utils/db";

export class SocketService {
  userId!: string;
  constructor(userId: string) {
    this.userId = userId;
  }

  get_message(message: { messageId: string; userId: string }) {}

  send_message(message: { userId: string; channelId: string; text: string }) {}

  update_message(message: {
    userId: string;
    messageId: string;
    channelId: string;
    text: string;
  }) {}

  delete_message(message: {
    userId: string;
    messageId: string;
    channelId: string;
  }) {}
}
