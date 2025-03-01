/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        root: true,
        env: { browser: true, es2020: true },
        extends: [
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:react/jsx-runtime",
            "plugin:react-hooks/recommended",
        ],
        ignorePatterns: ["dist", ".eslintrc.cjs"],
        parserOptions: { ecmaVersion: "latest", sourceType: "module" },
        settings: { react: { version: "18.2" } },
        plugins: ["react-refresh"],
        rules: {
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "react/prop-types": 0,
            "no-unused-vars": 0,
            "no-undef": 0,
            "react-hooks/exhaustive-deps": 0,
            "react/display-name": 0,
            "react/no-unknown-property": 0,
            "react/jsx-key": 0,
            "react/jsx-no-target-blank": 0,
            "no-empty-pattern": 0,
            "no-prototype-builtins": 0,
            "no-constant-condition": 0,
            "no-case-declarations": 0,
            "react-hooks/rules-of-hooks": 0,
            "no-useless-escape": 0,
            "no-empty": 0,
            "no-control-regex": 0,
            "react/no-unescaped-entities": 0,
            "no-extra-boolean-cast": 0
        },
    },
];
