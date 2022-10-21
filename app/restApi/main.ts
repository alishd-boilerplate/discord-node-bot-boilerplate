import express from "express";
const router = express.Router();
import logger from "@app/functions/utils/logger";
import db from "@routes/api/database";

// middleware that is specific to this router
router.use(function timeLog(req: express.Request, res: express.Response, next) {
	logger.info(`Time: ${Date.now()}`, "main.ts:timeLog()");
	next();
});

router.get("/", async function (req: express.Request, res: express.Response): Promise<void> {
	res.send("HEllO, YOU PINGED ME ?!");
});

router.get("/users", async function (req: express.Request, res: express.Response): Promise<void> {
	const users = await db.users.getAll();
	res.json(users);
});

router.post("/", async function (req: express.Request, res: express.Response): Promise<void> {
	res.send("HEllO, YOU POSTED ?!");
});

module.exports = router;
