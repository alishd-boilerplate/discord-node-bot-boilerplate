/**
 * Wrapper discord api (botInfo)
 * =====================
 *
 *  Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */

const getUsername = (ctx: any): string => {
	return ctx?.me?.username || "";
};

const getInfo = (ctx: any): any => {
	return ctx?.me || {};
};

export { getUsername, getInfo };
export default { getUsername, getInfo };
