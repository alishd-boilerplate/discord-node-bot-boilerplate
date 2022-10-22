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
import v from "@app/configs/version.json";

/**
 * command: /version
 * =====================
 * Get the version of the bot
 *
 */

const version = async (ctx): Promise<void> => {
	logger.info("command: /version", "version.ts:version()");
	discord.api.interactions.send(ctx, `v${v?.semver || "0.0.0"}`, "");
};

export { version };
export default version;
