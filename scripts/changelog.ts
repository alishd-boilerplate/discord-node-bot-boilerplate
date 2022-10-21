/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Reset CHANGELOG
 * =====================
 *
 * Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";

declare const __dirname: any;

const changelog = `# v1.0.0 (${new Date().toLocaleString("en-us", {
	month: "long",
	year: "numeric",
	day: "numeric",
})})

-   First release

<!-- all-shields/sponsors-badges:START -->
<!-- all-shields/sponsors-badges:END -->
`;

fs.unlinkSync(`${__dirname}/../CHANGELOG.md`);
fs.writeFileSync(`${__dirname}/../CHANGELOG.md`, `${changelog}`, {
	encoding: "utf8",
});
