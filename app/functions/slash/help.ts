import { SlashCommandBuilder } from "@discordjs/builders";

const help = new SlashCommandBuilder()
	.setName("help")
	.setDescription("Get helper commands")
	.addStringOption((option) =>
		option.setName("plugin_name").setDescription("Name of the plugin you want to see commands"),
	);

export { help };
export default { help };
