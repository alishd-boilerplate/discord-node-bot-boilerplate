/* eslint-disable @typescript-eslint/no-var-requires */
import db from "@routes/api/database";
import commands from "@app/routes/commands";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

if (process.env.RESTAPI === "true") {
	// const authJwt = require("@app/restApi/authHandlers");
	const main = require("@app/restApi/main");
	const auth = require("@app/restApi/auth");

	const app = express();
	app.use(cors());

	app.use(
		fileUpload({
			createParentPath: true,
		}),
	);

	const port = process.env.PORT || 8080;
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.listen(port, () => logger.info("REST API is ready...", "bot.ts:main()"));

	app.use("/", main);
	app.use("/auth", auth);
	// app.use("/someRoute", authJwt.verifyToken, ruoter);
}

/**
 * Start bot
 * =====================
 *
 * Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import logger from "@app/functions/utils/logger";

(async () => {
	logger.info("Bot is starting...", "bot.ts:main()");

	process.env.DATABASE === "true" && (await db.connection.connectDB());

	await commands.commandsHandler();
	await commands.launch();
})();

process.on("SIGTERM", async function () {
	process.env.DATABASE === "true" && (await db.connection.disconnectDB());
	process.exit(1);
});

process.on("SIGINT", async function () {
	// on CTRL-C
	process.env.DATABASE === "true" && (await db.connection.disconnectDB());
	process.exit(1);
});

process.once("SIGUSR2", async function () {
	// On nodemon refresh
	process.env.DATABASE === "true" && (await db.connection.disconnectDB());
});

process.on("uncaughtException", async function (error) {
	console.log("An error uncaughtException has occured. error is: %s", error);
	console.log("Process will restart now.");
	process.env.DATABASE === "true" && (await db.connection.disconnectDB());

	process.exit(1);
});

process.on("unhandledRejection", async function (error) {
	console.log("An error unhandledRejection has occured. error is: %s", error);
	console.log("Process will restart now.");
	process.env.DATABASE === "true" && (await db.connection.disconnectDB());
	process.exit(1);
});
