/**
 * Version
 * =====================
 *
 *  Ali Shadman [@alishd] <support@@alishd.dev> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import discord from "@routes/api/discord";
import logger from "@app/functions/utils/logger";
import pkg from "../../../package.json";

/**
 * command: /version
 * =====================
 * Get the version of the bot
 *
 */

const version = async (ctx): Promise<void> => {
	logger.info("command: /version", "version.ts:version()");
	discord.api.interactions.send(ctx, `v${pkg?.version || "0.0.0"}`, "");
};

export { version };
export default version;
