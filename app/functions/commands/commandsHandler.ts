/**
 * Start
 * =====================
 *
 *
 * @license: MIT License
 *
 */
import bot from "@app/core/token";
import discord from "@routes/api/discord";
import commands from "@app/routes/commands";
import translate from "@translations/translate";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const wait = require("node:timers/promises").setTimeout;
const lang = process.env.LANGUAGE || "en";

/**
 * Command Handler
 * =====================
 * The command handler
 *
 */
const commandsHandler = async (): Promise<void> => {
	//
	bot.on("messageCreate", async (ctx): Promise<void> => {
		if (discord.api.message.isBot(ctx)) {
			return;
		}

		discord.api.message.send(ctx, translate(lang, "hello"), "");
	});

	bot.on("interactionCreate", async (ctx): Promise<void> => {
		if (discord.api.interactions.isBot(ctx) || (!ctx.isCommand() && !ctx.isSelectMenu())) {
			return;
		}

		// If it's a text command
		if (!ctx.isSelectMenu()) {
			switch (ctx.commandName) {
				case "help":
					commands.help(ctx);
					break;
				case "version":
					commands.version(ctx);
					break;
				default:
					break;
			}
		} else {
			// If it's a select choice
			switch (ctx.customId) {
				case "plugin_name":
					await ctx.deferUpdate();
					await wait(300);
					commands.help(ctx);
					discord.api.interactions.resetSelectInteraction(ctx);
					break;
			}
		}
	});
};

export { commandsHandler };
export default commandsHandler;
