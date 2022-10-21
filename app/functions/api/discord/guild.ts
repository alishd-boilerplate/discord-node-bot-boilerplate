import bot from "@app/core/token";

const getGuild = async () => {
	return await bot.guilds.fetch(process.env.GUILD_ID || "");
};

export { getGuild };
export default {
	getGuild,
};
