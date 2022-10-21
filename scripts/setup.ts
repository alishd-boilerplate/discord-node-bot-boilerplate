/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/**
 * Setup
 * =====================
 * Replace package name, authors, url with others values.
 *
 * Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
const replace = require("replace-in-file");
const setup = require("../setup.json");
const pkg = require("../package.json");

(async () => {
	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /github.com\/alishd-boilerplate\/discord-node-bot-boilerplate/g,
			to: setup.github_full_repository_url,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /github.com\/alishadman95\/discord-node-bot-boilerplate/g,
			to: setup.github_full_repository_url,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /githubusercontent.com\/alishd-boilerplate/g,
			to: setup.github_repository_url.replace("github.com", "githubusercontent.com"),
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /githubusercontent.com\/alishd/g,
			to: setup.github_repository_url.replace("github.com", "githubusercontent.com"),
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /github.com\/alishd-boilerplate/g,
			to: setup.github_repository_url,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /github.com\/alishadman95/g,
			to: setup.github_repository_url,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /@alishd\/discord-node-bot-boilerplate/g,
			to: setup.package_org !== "" ? `${setup.package_org}/${setup.package_name}` : setup.package_name,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /Node Discord BOT Boilerplate/g,
			to: setup.display_name,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /Create your discord bot with this awesome boilerplate. Use this repository as template for your bot/g,
			to: setup.description,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /Ali Shadman \[@alishd\] <alishadman955@gmail.com> \(https:\/\/alishd.dev\)/g,
			to: setup.author,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /\[Ali Shadman\]\(https:\/\/alishd.dev\) \(\[@alishd\]/g,
			to: setup.author_markdown,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: [".all-contributorsrc"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-shieldsrc"],
			from: /"projectName": "alishd-boilerplate\/discord-node-bot-boilerplate"/g,
			to: `"projectName": "${setup.github_full_repository_url.replace("github.com/", "")}"`,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: [".all-contributorsrc"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-shieldsrc"],
			from: /"projectOwner": "alishd"/g,
			to: `"projectOwner": "${setup.github_nickname}"`,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: [".github/**/*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-shieldsrc"],
			from: /alishadman95/g,
			to: setup.github_nickname,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /discord-node-bot-boilerplate/g,
			to: setup.package_name.replace(setup.package_org),
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["**/*", ".*", "**/.*"],
			ignore: [
				"node_modules/**/*",
				"setup.json",
				"package-lock.json",
				"scripts/setup.ts",
				".all-contributorsrc",
				".all-shieldsrc",
			],
			from: /alishadman955@gmail.com/g,
			to: setup.email,
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}

	try {
		await replace({
			files: ["package.json"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-shieldsrc"],
			from: pkg.version,
			to: "1.0.0",
		});
	} catch (error) {
		console.error("Error occurred:", error);
	}
})();
