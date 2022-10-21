/**
 * Check configs.js
 * =====================
 * Check if configs/config.js exist, if don't exist rename .tpl
 *
 * Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
declare const __dirname: string;

const pathConfig = `${__dirname}/../app/configs/config.js`;
const pathEnvDevelopment = `${__dirname}/../.env.development`;
const pathEnvProduction = `${__dirname}/../.env.production`;

if (!fs.existsSync(pathConfig)) {
	shell.cp("-Rf", `${__dirname}/../app/configs/config.js.tpl`, `${pathConfig}`);
}
if (!fs.existsSync(pathEnvDevelopment)) {
	shell.cp("-Rf", `${__dirname}/../.env.example`, `${pathEnvDevelopment}`);
}
if (!fs.existsSync(pathEnvProduction)) {
	shell.cp("-Rf", `${__dirname}/../.env.example`, `${pathEnvProduction}`);
}
