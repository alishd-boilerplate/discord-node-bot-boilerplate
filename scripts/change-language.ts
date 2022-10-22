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
const pathDev = `${__dirname}/../.env.development`;
const pathProd = `${__dirname}/../.env.production`;

const lang = argv._[0];
const envoirment = argv._[1];

if ((envoirment === "dev" && fs.existsSync(pathDev)) || (envoirment === "prod" && fs.existsSync(pathProd))) {
	shell.sed(
		"-i",
		`LANGUAGE=${lang === "it" ? "en" : "it"}`,
		`LANGUAGE=${lang === "it" ? "it" : "en"}`,
		envoirment === "dev" ? pathDev : pathProd,
	);
}
