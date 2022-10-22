/**
 * Migration script for the database.
 * =====================
 *
 *  Ali Shadman [@alishd] <support@@alishd.dev> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import connection from "@app/functions/api/database/connection";
import users from "@app/functions/api/database/users";

const db = {
	connection: connection,
	users: users,
};

export { db };
export default db;
