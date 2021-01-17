const eventTemplates = {
  channelCreate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super('channelCreate');
  }
  
  async run(client, channel) {
    try {
      console.log(channel.name + ' was created.');
    } catch (error) {
      console.log(error);
    }
    
  }
}`,
  channelDelete: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ChannelDeleteEvent extends BaseEvent {
  constructor() {
    super('channelDelete');
  }
  
  async run(client, channel) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}
`,
  channelPinsUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelPinsUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ChannelPinsUpdateEvent extends BaseEvent {
  constructor() {
    super('channelPinsUpdate');
  }
  
  async run(client, channel) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  channelUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ChannelUpdateEvent extends BaseEvent {
  constructor() {
    super('channelUpdate');
  }
  
  async run(client, oldChannel, newChannel) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  debug: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-debug
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ChannelPinsUpdateEvent extends BaseEvent {
  constructor() {
    super('channelPinsUpdate');
  }
  
  async run(client, info) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  emojiCreate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class EmojiCreateEvent extends BaseEvent {
  constructor() {
    super('emojiCreate');
  }
  
  async run(client, emoji) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}
`,
  emojiDelete: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class EmojiDeleteEvent extends BaseEvent {
  constructor() {
    super('emojiDelete');
  }
  
  async run(client, emoji) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  emojiUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class EmojiUpdateEvent extends BaseEvent {
  constructor() {
    super('emojiUpdate');
  }
  
  async run(client, oldEmoji, newEmoji) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  error: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-error
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ErrorEvent extends BaseEvent {
  constructor() {
    super('error');
  }
  
  async run(client, error) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}
`,
  guildBanAdd: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildBanAddEvent extends BaseEvent {
  constructor() {
    super('guildBanAdd');
  }
  
  async run(client, guild, user) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildBanRemove: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildBanRemove
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildBanRemoveEvent extends BaseEvent {
  constructor() {
    super('guildBanRemove');
  }
  
  async run(client, guild, user) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildCreate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildDelete: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super('guildDelete');
  }
  
  async run(client, guild) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildIntegrationsUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildIntegrationsUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildIntegrationsUpdateEvent extends BaseEvent {
  constructor() {
    super('guildIntegrationsUpdate');
  }
  
  async run(client, guild) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildMemberAdd: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildMemberRemove: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
  const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, member) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildMembersChunk: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMembersChunk
  const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMembersChunkEvent extends BaseEvent {
  constructor() {
    super('guildMembersChunk');
  }
  
  async run(client, members, guild) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildMemberSpeaking: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberSpeaking
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberSpeakingEvent extends BaseEvent {
  constructor() {
    super('guildMemberSpeaking');
  }
  
  async run(client, member, speaking) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildMemberUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberUpdateEvent extends BaseEvent {
  constructor() {
    super('guildMemberUpdate');
  }
  
  async run(client, oldMember, newMember) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildUnavailable: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUnavailable
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildUnavailableEvent extends BaseEvent {
  constructor() {
    super('guildUnavailable');
  }
  
  async run(client, guild) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  guildUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildUpdateEvent extends BaseEvent {
  constructor() {
    super('guildUpdate');
  }
  
  async run(client, oldGuild, newGuild) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  invalidated: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-invalidated
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class InvalidatedEvent extends BaseEvent {
  constructor() {
    super('invalidated');
  }
  
  async run(client) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  inviteCreate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-inviteCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class EmojiDeleteEvent extends BaseEvent {
  constructor() {
    super('inviteCreate');
  }
  
  async run(client, invite) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  inviteDelete: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-inviteDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class InviteDeleteEvent extends BaseEvent {
  constructor() {
    super('inviteDelete');
  }
  
  async run(client, invite) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  ready: `// const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  
  async run(client) {
    try {
      console.log(client.user.tag + ' has logged in.');
    } catch (error) {
      console.log(error);
    }
  }
}`,
  message: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    try {
    console.log(client.usert.tag + ' has logged in.');
    } catch (error) {
      console.log(error);
    }
  }
}`,
  messageDelete: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('messageDelete');
  }
  
  async run(client, message) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  messageDeleteBulk: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDeleteBulk
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageDeleteBulkEvent extends BaseEvent {
  constructor() {
    super('messageDeleteBulk');
  }
  
  async run(client, messages) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  messageReactionAdd: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageReactionAddEvent extends BaseEvent {
  constructor() {
    super('messageReactionAdd');
  }
  
  async run(client, reaction, user) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  messageReactionRemove: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemove
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageReactionRemoveEvent extends BaseEvent {
  constructor() {
    super('messageReactionRemove');
  }
  
  async run(client, reaction, user) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  messageReactionRemoveAll: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveAll
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageReactionRemoveAllEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  
  async run(client, message) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  messageReactionRemoveEmoji: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageReactionRemoveEmoji
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageReactionRemoveEmojiEvent extends BaseEvent {
  constructor() {
    super('messageReactionRemoveEmoji');
  }
  
  async run(client, reaction) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  messageUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageUpdateEvent extends BaseEvent {
  constructor() {
    super('messageUpdate');
  }
  
  async run(client, oldMessage, newMessage) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  presenceUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-presenceUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class PresenceUpdateEvent extends BaseEvent {
  constructor() {
    super('presenceUpdate');
  }
  
  async run(client, oldPresence, newPresence) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  rateLimit: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-rateLimit
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class RateLimitEvent extends BaseEvent {
  constructor() {
    super('rateLimit');
  }
  
  async run(client, rateLimitInfo) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  roleCreate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class RoleCreateEvent extends BaseEvent {
  constructor() {
    super('roleCreate');
  }
  
  async run(client, role) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  roleDelete: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class RoleDeleteEvent extends BaseEvent {
  constructor() {
    super('roleDelete');
  }
  
  async run(client, role) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  roleUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-roleUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class RoleUpdateEvent extends BaseEvent {
  constructor() {
    super('roleUpdate');
  }
  
  async run(client, oldRole, newRole) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  shardDisconnect: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ShardDisconnectEvent extends BaseEvent {
  constructor() {
    super('shardDisconnect');
  }
  
  async run(client, message) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  shardError: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardError
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ShardErrorEvent extends BaseEvent {
  constructor() {
    super('shardError');
  }
  
  async run(client, message) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  shardReady: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-emojiUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class EmojiDeleteEvent extends BaseEvent {
  constructor() {
    super('shardReady');
  }
  
  async run(client, id, unavailableGuilds) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  shardReconnecting: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardReconnecting
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ShardReconnectingEvent extends BaseEvent {
  constructor() {
    super('shardReconnecting');
  }
  
  async run(client, id) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  shardResume: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-shardResume
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ShardResumeEvent extends BaseEvent {
  constructor() {
    super('shardResume');
  }
  
  async run(client, id, replayedEvents) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  typingStart: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-typingStart
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class TypingStartEvent extends BaseEvent {
  constructor() {
    super('typingStart');
  }
  
  async run(client, channel, user) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  userUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-userUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class UserUpdateEvent extends BaseEvent {
  constructor() {
    super('userUpdate');
  }
  
  async run(client, oldUser, newUser) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  voiceStateUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class WoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super('voiceStateUpdate');
  }
  
  async run(client, oldState, newState) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  warn: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-warn
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class WarnEvent extends BaseEvent {
  constructor() {
    super('warn');
  }
  
  async run(client, info) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
  webhookUpdate: `// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-webhookUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class WebhookUpdateEvent extends BaseEvent {
  constructor() {
    super('webhookUpdate');
  }
  
  async run(client, channel) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
}`,
};

export default eventTemplates;
