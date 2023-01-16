declare interface ICreateUser {
  id: string,
  bot: boolean,
  system: boolean,
  avatar: string,
  avatarUrl: string,
  discriminator: string,
  tag: string,
  username: string,
  email: string,
  password: string,
  image: string,
  status: UserStatus,
  badges: UserBadges[],
  flags: UserFlags,
  online: boolean,
}

type UserStatus = "Online" | "Idle" | "DoNotDisturb" | "Offline"
type UserBadges = "Developer" | "Supporter" | "SecurityDisclosure" | "Founder" | "PlatformModerator" | "ActiveSupporter" | "EarlyAdopter"
type UserFlags = "Nothing" | "Suspended" | "Deleted" | "Banned"

export { ICreateUser }