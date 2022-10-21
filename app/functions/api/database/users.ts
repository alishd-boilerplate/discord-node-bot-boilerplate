/**
 * Users database
 * =====================
 *
 *
 *
 * @license: MIT License
 *
 */
import { Schema, model } from "mongoose";
import type { DiscordUsersInferface } from "@app/types/databases.type";
import { logger } from "@app/functions/utils/logger";

const schema = new Schema<DiscordUsersInferface>({
	id: { type: String, default: "0" },
	username: { type: String, default: "" },
	role: { type: String, default: "user" },
	idDiscord: { type: String, default: "0" },
});

const query = model<DiscordUsersInferface>("User", schema, "users");

/*
 *
 * Users CRUD
 * =====================
 * Add user to DB
 *
 * @param {DiscordUsersInferface} user - user to add
 * */

const add = async (user: DiscordUsersInferface): Promise<void> => {
	try {
		const doc = new query(user);
		await doc.save();
	} catch (error: any) {
		logger.error(JSON.stringify(error || ""), "users.ts:add()");
	}
};

/*
 *
 * Users CRUD
 * =====================
 * Remove user from DB
 *
 * @param {Record<string, number | string | boolean>} search - search condition e.g {id:"123"}
 *
 */

const remove = async (search: Record<string, number | string | boolean>): Promise<void> => {
	try {
		await query.findOneAndDelete(search, function (error: string) {
			if (error) {
				logger.error(error || "");
			}
		});
	} catch (error: any) {
		logger.error(JSON.stringify(error || ""), "users.ts:remove()");
	}
};

/*
 *
 * Users CRUD
 * =====================
 * Update user from DB
 *
 * @param {Record<string, number | string | boolean>} search - search condition e.g {id:"123"}
 * @param {DiscordUsersInferface} user - user info to update
 * */

const update = async (
	search: Record<string, number | string | boolean>,
	user: DiscordUsersInferface,
): Promise<void> => {
	try {
		await query.findOneAndUpdate(search, user, function (error: string) {
			if (error) {
				logger.error(error || "");
			}
		});
	} catch (error: any) {
		logger.error(JSON.stringify(error || ""), "users.ts:update()");
	}
};

/*
 *
 * Users CRUD
 * =====================
 * Get user from DB
 *
 * @param {Record<string, number | string | boolean>} search - search condition e.g {id:"123"}
 * @return { DiscordUsersInferface} user. */

const get = async (search: Record<string, number | string | boolean>): Promise<DiscordUsersInferface> => {
	try {
		if (Object.keys(search).length > 0) {
			const user = await query.findOne(search, { _id: 0, __v: 0 }, {}, function (error: string) {
				if (error) {
					logger.error(JSON.stringify(error || ""), "users.ts:get()");
				}
			});
			return (await user.toObject()) || new query().toJSON();
		} else {
			const users = await query.find(search, { _id: 0, __v: 0 }, function (error: string) {
				if (error) {
					logger.error(JSON.stringify(error || ""), "users.ts:get()");
				}
			});
			return (await users) || [];
		}
	} catch (error: any) {
		logger.error(JSON.stringify(error || ""), "users.ts:get()");
	}

	return new query().toJSON();
};
/*
 *
 * Users CRUD
 * =====================
 * Get all user from DB
 *
 * @return {DiscordUsersInferface[]} users.
 *  */

const getAll = async (): Promise<DiscordUsersInferface[]> => {
	try {
		const users = await query.find({}, { _id: 0, __v: 0 }, function (error: string) {
			if (error) {
				logger.error(JSON.stringify(error || ""), "users.ts:get()");
			}
		});
		return (await users) || [];
	} catch (error: any) {
		logger.error(JSON.stringify(error || ""), "users.ts:get()");
	}

	return new query().toJSON();
};

export { get, update, remove, add, getAll };
export default { get, update, remove, add, getAll };
