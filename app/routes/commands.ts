import commandsHandler from "@app/functions/commands/commandsHandler";
import launch from "@app/functions/commands/launch";
import version from "@app/functions/commands/version";
import help from "@app/functions/commands/help";

const commands = {
	commandsHandler,
	launch,
	version,
	help,
};

export { commandsHandler, launch, version, help };
export default commands;
