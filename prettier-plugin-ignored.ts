/**
 * https://github.com/tobysmith568/prettier-plugin-ignored/blob/5306a73b70d2366cd581bbf1bcc38904ea80cac7/src/index.ts
 */

import { type Parser, type Printer, type SupportLanguage } from "prettier";

// https://prettier.io/docs/en/plugins.html#languages
export const languages: SupportLanguage[] = [
	{
		name: "ignored",
		parsers: ["ignored-parser"],
	},
];

type ASTFormat = "ignored-ast";

// https://prettier.io/docs/en/plugins.html#parsers
export const parsers: Record<string, Parser<string>> = {
	ignored: {
		parse: (source) => source,
		astFormat: "ignored-ast" satisfies ASTFormat,
		locStart: (_) => 0,
		locEnd: (node) => node.length,
	},
};

// https://prettier.io/docs/en/plugins.html#printers
export const printers: Record<ASTFormat, Printer<string>> = {
	"ignored-ast": {
		print: (path) => path.getNode() ?? "",
	},
};
