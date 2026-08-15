import { type Config } from "prettier";
import * as prettierPluginIgnored from "./prettier-plugin-ignored.js";
// const prettierPluginIgnored = require("prettier-plugin-ignored")
//  as typeof import("prettier-plugin-ignored");

const config: Config = {
	tabWidth: 2,
	useTabs: true,
	plugins: [prettierPluginIgnored],

	overrides: [
		{
			files: "**/.justcache/**",
			options: {
				parser: "ignored",
			},
		},
	],
};

export default config;
