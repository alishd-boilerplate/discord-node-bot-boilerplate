/**
 * Wrapper discord api (message)
 * =====================
 *
 *
 * @license: MIT License
 *
 */
import logger from "@app/functions/utils/logger";

const getUsername = (ctx: any): string => {
	const username = ctx?.author?.username;

	return username || "";
};

const getBotName = (ctx: any): string => {
	const username = ctx?.username;

	return username || "";
};

const getUserDiscriminator = (ctx: any): string => {
	return ctx?.author?.discriminator;
};
const getUserID = (ctx: any): string => {
	const id = ctx?.author?.id;

	return `${id}` || "0";
};

const getBotID = (ctx: any): string => {
	const id = ctx?.id;

	return `${id}` || "0";
};

const getUserAvatar = (ctx: any): string => {
	return ctx?.author?.displayAvatarURL({ format: "jpg" });
};

const send = async (ctx: any, text: string, image: any): Promise<any> => {
	if (text || image) {
		let message;

		try {
			message = await ctx.channel.send(image ? { files: [{ attachment: image }] } : text);
			return message;
		} catch (err: any) {
			logger.error(JSON.stringify(err), "message.ts:send()");
		}
	}
};

const isCommand = (command) => {
	return command.startsWith("!") || command.startsWith("/");
};

const isBot = (ctx) => {
	return ctx?.author?.bot;
};

export { getUsername, getUserID, getUserAvatar, getUserDiscriminator, send, isBot, isCommand, getBotName, getBotID };
export default {
	getUsername,
	getUserDiscriminator,
	getUserAvatar,
	getUserID,
	send,
	isBot,
	isCommand,
	getBotName,
	getBotID,
};
