/**
 * Wrapper discord api (interactions)
 * =====================
 *
 *
 * @license: MIT License
 *
 */
import logger from "@app/functions/utils/logger";

const getUsername = (ctx: any): string => {
	const username = ctx?.user?.username;

	return username || "";
};

const getUserDiscriminator = (ctx: any): string => {
	return ctx?.user?.discriminator;
};
const getUserID = (ctx: any): string => {
	const id = ctx?.user?.id;

	return `${id}` || "0";
};

const getUserAvatar = (ctx: any): string => {
	return ctx?.user?.displayAvatarURL({ format: "jpg" });
};

const send = async (ctx: any, text: string, image: any): Promise<any> => {
	if (text || image) {
		let message;
		try {
			message = await ctx.reply(image ? { files: [{ attachment: image }] } : text);
			return message;
		} catch (err: any) {
			console.log(err);
			logger.error(JSON.stringify(err), "interactions.ts:send()");
		}
	}
};

const sendEmbeded = async (ctx: any, embeds: any[], components: any = null): Promise<any> => {
	if (embeds) {
		let message;
		try {
			message = await ctx.reply({ embeds, ...(components && { components }) });
			return message;
		} catch (err: any) {
			console.log(err);
			logger.error(JSON.stringify(err), "interactions.ts:sendEmbeded()");
		}
	}
};

const followUp = async (ctx: any, embeds: any[], components: any = null): Promise<any> => {
	if (embeds) {
		let message;
		try {
			message = await ctx.followUp({ embeds, ...(components && { components }) });
			return message;
		} catch (err: any) {
			console.log(err);
			logger.error(JSON.stringify(err), "interactions.ts:followUp()");
		}
	}
};

const updateEmbedReply = async (ctx: any, embeds: any[], components: any = null): Promise<any> => {
	if (embeds) {
		let message;
		try {
			message = await ctx.editReply({ embeds, ...(components && { components }) });
			return message;
		} catch (err: any) {
			console.log(err);
			logger.error(JSON.stringify(err), "interactions.ts:updateEmbedReply()");
		}
	}
};

const resetSelectInteraction = async (ctx: any): Promise<any> => {
	if (ctx) {
		let message;
		try {
			message = await ctx.editReply({ embeds: ctx.embeds, components: [] });
			return message;
		} catch (err: any) {
			console.log(err);
			logger.error(JSON.stringify(err), "interactions.ts:resetSelectInteraction()");
		}
	}
};

const isBot = (ctx) => {
	return ctx?.user?.bot;
};

export {
	getUsername,
	getUserID,
	getUserAvatar,
	getUserDiscriminator,
	send,
	isBot,
	sendEmbeded,
	resetSelectInteraction,
	updateEmbedReply,
	followUp,
};
export default {
	getUsername,
	getUserDiscriminator,
	getUserAvatar,
	getUserID,
	send,
	isBot,
	sendEmbeded,
	resetSelectInteraction,
	updateEmbedReply,
	followUp,
};
