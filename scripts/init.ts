/**
 * Init
 * =====================
 * Configure telegram token and username
 *
 * @contributors: Ali Shadman [@alishd] <support@@alishd.dev> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
import { argv } from "yargs";

declare const __dirname: string;
console.log(argv, argv._[0]);
const pathDev = `${__dirname}/../.env.development`;
const pathProd = `${__dirname}/../.env.production`;

if (fs.existsSync(pathDev) && fs.existsSync(pathProd)) {
	shell.sed("-i", "BOT_KEY", `${argv._[0]}`, pathDev);
	shell.sed("-i", "BOT_KEY", `${argv._[0]}`, pathProd);

	shell.sed("-i", "CLIENT_ID_DISCORD", `${argv._[1]}`, pathDev);
	shell.sed("-i", "CLIENT_ID_DISCORD", `${argv._[1]}`, pathProd);

	shell.sed("-i", "GUILD_ID_DISCORD", `${argv._[2]}`, pathDev);
	shell.sed("-i", "GUILD_ID_DISCORD", `${argv._[2]}`, pathProd);

	argv._[3] && shell.sed("-i", "MONGODB_STRING_KEY", `${argv._[3]}`, pathDev);
	argv._[3] && shell.sed("-i", "MONGODB_STRING_KEY", `${argv._[3]}`, pathProd);

	argv._[4] && shell.sed("-i", "JWT_SECRET_STRING", `${argv._[4]}`, pathDev);
	argv._[4] && shell.sed("-i", "JWT_SECRET_STRING", `${argv._[4]}`, pathProd);

	shell.sed("-i", "development", `production`, pathProd);

	shell.sed("-i", /"/g, ``, pathDev);
	shell.sed("-i", /"/g, ``, pathProd);
}
