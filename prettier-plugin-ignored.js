/**
 * https://github.com/tobysmith568/prettier-plugin-ignored/blob/5306a73b70d2366cd581bbf1bcc38904ea80cac7/src/index.ts
 */
// https://prettier.io/docs/en/plugins.html#languages
export const languages = [
    {
        name: "ignored",
        parsers: ["ignored-parser"],
    },
];
// https://prettier.io/docs/en/plugins.html#parsers
export const parsers = {
    ignored: {
        parse: (source) => source,
        astFormat: "ignored-ast",
        locStart: (_) => 0,
        locEnd: (node) => node.length,
    },
};
// https://prettier.io/docs/en/plugins.html#printers
export const printers = {
    "ignored-ast": {
        print: (path) => path.getNode() ?? "",
    },
};
