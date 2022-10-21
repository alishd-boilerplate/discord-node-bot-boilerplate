import { SlashCommandBuilder } from "@discordjs/builders";

const version = new SlashCommandBuilder().setName("version").setDescription("Show the current bot version");

export { version };
export default { version };
