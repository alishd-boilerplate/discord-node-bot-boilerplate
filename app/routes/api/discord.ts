/**
 * Router Wrapper Discord api (message)
 * =====================
 *
 *  Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */

import message from "@app/functions/api/discord/message";
import bot from "@app/functions/api/discord/bot";
import interactions from "@app/functions/api/discord/interactions";
import guild from "@app/functions/api/discord/guild";

const discord = {
	api: {
		message: message,
		bot: bot,
		interactions: interactions,
		guild: guild,
	},
};

export { discord };
export default discord;
