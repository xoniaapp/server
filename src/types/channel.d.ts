declare interface ICreateChannel {
  name: string;
  type: "VOICE" | "ANNOUNCEMENT" | "FORUM" | "TEXT" | "STAGE";
  private: boolean;
  guildId: string;
}

declare interface IUpdateChannel {
  name: string;
  type: "VOICE" | "ANNOUNCEMENT" | "FORUM" | "TEXT" | "STAGE";
  private: boolean;
}
