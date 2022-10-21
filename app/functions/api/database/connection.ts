/**
 * MongoDB Connection
 * =====================
 *
 *  Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import Mongoose from "mongoose";
import { logger } from "@app/functions/utils/logger";

let database: Mongoose.Connection;

/**
 * MongoDB Connection
 * =====================
 * Connects to mongo DB
 *
 */
const connectDB = async (): Promise<void> => {
	if (database) {
		logger.info("trying to connect but have already a connection");
		return;
	}
	try {
		await Mongoose.connect(process.env.MONGODB, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true,
			maxPoolSize: 100,
			keepAlive: true,
			keepAliveInitialDelay: 3600,
		});
		database = Mongoose.connection;
		logger.info("Connected to database", "connections.ts:connectDB()");
	} catch (error: any) {
		logger.error(JSON.stringify(error || ""), "connections.ts:connectDB()");
	}
};

/**
 * MongoDB Disconnection
 * =====================
 * Disconnect to mongo DB
 *
 */
const disconnectDB = async (): Promise<void> => {
	if (!database) {
		logger.info("tried to disconnect but dont have connections");
		return;
	}
	try {
		await Mongoose.disconnect(() => {
			logger.info("Disconnected from database", "connections.ts:disconnectDB()");
			process.exit(0);
		});
	} catch (error: any) {
		logger.error(JSON.stringify(error || ""), "connections.ts:disconnectDB()");
	}
};

export { connectDB, disconnectDB };
export default { connectDB, disconnectDB };
