import discord from "@routes/api/discord";
import { MessageEmbed, MessageActionRow, MessageSelectMenu } from "discord.js";

/**
 * command: !help
 * =====================
 * Help command
 *
 * @param ctx
 */
const help = async (ctx): Promise<void> => {
	const isFromSelect = ctx.isSelectMenu();

	const selectedPlugin = isFromSelect ? ctx.values[0] : ctx.options.getString("plugin_name");

	switch (selectedPlugin) {
		case "plugin 1":
			pluginOneHelp(ctx, isFromSelect);
			break;
		case "plugin 2":
			plugin2Help(ctx, isFromSelect);
			break;

		default:
			mainHelp(ctx);
			break;
	}
};

const pluginOneHelp = (ctx, isFromSelect: boolean) => {
	const embedMessage = new MessageEmbed()
		.setColor("#0099ff")
		.setDescription("Some Description")
		.setAuthor({ name: "Some Name", iconURL: "" })
		.addFields(
			{ name: "`Some field name`", value: "Some value" },
			{ name: "`Some field name`", value: "Some value" },
		);

	if (isFromSelect) {
		discord.api.interactions.followUp(ctx, [embedMessage]);
		return;
	}
	discord.api.interactions.sendEmbeded(ctx, [embedMessage]);
};

const plugin2Help = (ctx, isFromSelect: boolean) => {
	const embedMessage = new MessageEmbed()
		.setColor("#0099ff")
		.setDescription("Comandi generali del bot")
		.setAuthor({
			name: "GODBOT - Generale",
			iconURL: "https://cdn-icons-png.flaticon.com/512/2534/2534504.png",
		})
		.addFields(
			{ name: "`/info`", value: "Ottieni informazioni riguardo al bot" },

			{ name: "`/versione`", value: "Ottieni la versione del bot" },
		);

	if (isFromSelect) {
		discord.api.interactions.followUp(ctx, [embedMessage]);
		return;
	}
	discord.api.interactions.sendEmbeded(ctx, [embedMessage]);
};

const mainHelp = (ctx) => {
	const embedMessage = new MessageEmbed()
		.setColor("#0099ff")
		.setAuthor({
			name: "Some Name",
			iconURL: "",
		})
		.addFields(
			{ name: "Some name", value: "`/help plugin`", inline: true },
			{ name: "Some name", value: "`/help plugin`", inline: true },
		);

	const row = new MessageActionRow().addComponents(
		new MessageSelectMenu()
			.setCustomId("plugin_name")
			.setPlaceholder("Select")
			.addOptions([
				{
					label: "Plugin 1",
					description: "Some description for plugin 1",
					value: "plugin 1",
				},
				{
					label: "Plugin 2",
					description: "Some description for plugin 2",
					value: "plugin 2",
				},
			]),
	);

	discord.api.interactions.sendEmbeded(ctx, [embedMessage], [row]);
};

export { help };
export default help;
