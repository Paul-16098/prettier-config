const config = {
    tabWidth: 2,
    useTabs: true,
    plugins: ["prettier-plugin-ignored"],
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
