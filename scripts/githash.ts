import fs from "fs";
import path from "path";
import semver from "../package.json";

const obj = {
	semver: semver.version.split("-")[0],
};

fs.writeFileSync(path.resolve("app/configs", "version.json"), JSON.stringify(obj, null, "\t"));
