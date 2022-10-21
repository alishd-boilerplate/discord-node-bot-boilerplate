/**
 * Init
 * =====================
 * Configure telegram token and username
 *
 * @contributors: Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
import { argv } from "yargs";

declare const __dirname: string;
const pathDev = `${__dirname}/../.env.development`;
const pathProd = `${__dirname}/../.env.production`;

const service = argv._[0];
const enabling = argv._[1] === "on";
const envoirment = argv._[2];

if ((envoirment === "dev" && fs.existsSync(pathDev)) || (envoirment === "prod" && fs.existsSync(pathProd))) {
	if (service === "api") {
		shell.sed(
			"-i",
			`RESTAPI=${enabling ? "false" : "true"}`,
			`RESTAPI=${enabling ? "true" : "false"}`,
			envoirment === "dev" ? pathDev : pathProd,
		);
		process.exit();
	}
	shell.sed(
		"-i",
		`DATABASE=${enabling ? "false" : "true"}`,
		`DATABASE=${enabling ? "true" : "false"}`,
		envoirment === "dev" ? pathDev : pathProd,
	);
}
