import express from "express";
import bot from "@app/core/token";
const router = express.Router();
import db from "@routes/api/database";
import jwt from "jsonwebtoken";
import logger from "@app/functions/utils/logger";

// middleware that is specific to this router
router.use(function timeLog(req: express.Request, res: express.Response, next) {
	logger.info(`Time: ${Date.now()}`, "auth.ts:timeLog()");
	next();
});

router.post("/login", async function (req: express.Request, res: express.Response): Promise<void> {
	try {
		const { username } = req.body;

		const user = await db.users.get({ username });

		if (user.id === "0") {
			return res.status(401).send("User not found");
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: 604800, // 24 hours = 86400 , 1 week = 604800
		});

		res.status(200).send({ ...user, accessToken: token });
	} catch (e) {
		logger.error(JSON.stringify(e), "auth.ts:/login()");
		res.send("Login error");
	}
});

router.get("/voiceChannels", async function (req: express.Request, res: express.Response): Promise<void> {
	const channels = bot.channels?.cache
		?.filter((c) => c.type === "GUILD_VOICE")
		.map((channel) => {
			if (channel.type === "GUILD_VOICE") {
				return { id: channel.id, name: channel.name };
			}
		});

	res.json(channels);
});

router.get("/textChannels", async function (req: express.Request, res: express.Response): Promise<void> {
	const channels = bot.channels?.cache
		?.filter((c) => c.type === "GUILD_TEXT")
		.map((channel) => {
			if (channel.type === "GUILD_TEXT") {
				return { id: channel.id, name: channel.name };
			}
		});

	res.json(channels);
});

module.exports = router;
