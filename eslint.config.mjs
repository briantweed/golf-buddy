import {defineConfig, globalIgnores} from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = defineConfig([
    ...nextVitals,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            "@next/next/no-img-element": 0,
            "consistent-return": 1,
            "jsx-quotes": [
                "error",
                "prefer-double"
            ],
            "indent": [1, 4, { "SwitchCase": 1 }],
            "no-else-return": 1,
            "semi": [
                1,
                "always"
            ],
            "space-unary-ops": 1,
            "no-var": 1,
            "yoda": 1,
            "array-bracket-spacing": 1,
            "arrow-parens": 1,
            "no-await-in-loop": 1,
            "no-cond-assign": 1,
            "no-debugger": 1,
            "curly": 1,
            "object-curly-spacing": [1, "never"],
            "eqeqeq": 1,
            "no-multiple-empty-lines": 1,
            "no-unused-vars": 1,
            "no-use-before-define": 1,
            "vars-on-top": 1,
            "react/jsx-fragments": [
                "error",
                "syntax"
            ],
            "react/jsx-props-no-multi-spaces": "error",
            "react/button-has-type": [
                "error",
                {
                    "button": true,
                    "submit": true,
                    "reset": false
                }
            ],
            "react/boolean-prop-naming": [
                "off",
                {
                    "propTypeNames": [
                        "bool",
                        "mutuallyExclusiveTrueProps"
                    ],
                    "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
                    "message": ""
                }
            ],
            "react/no-unused-state": "error",
            "react/no-children-prop": "error",
            "react/no-unescaped-entities": "error",
            "react/jsx-equals-spacing": [
                "error",
                "never"
            ],
            "react/jsx-first-prop-new-line": [
                "error",
                "multiline-multiprop"
            ],
            "react/require-render-return": "error",
            "react/jsx-pascal-case": [
                "error",
                {
                    "allowAllCaps": false,
                    "allowNamespace": true,
                    "ignore": []
                }
            ],
            "jsx-a11y/anchor-has-content": [
                "error",
                {
                    "components": []
                }
            ],
            "jsx-a11y/anchor-is-valid": [
                "off",
                {
                    "components": [
                        "Link"
                    ],
                    "specialLink": [
                        "to"
                    ],
                    "aspects": [
                        "noHref",
                        "invalidHref",
                        "preferButton"
                    ]
                }
            ],
            "jsx-a11y/aria-activedescendant-has-tabindex": "error",
            "jsx-a11y/aria-props": "error",
            "jsx-a11y/aria-proptypes": "error",
            "jsx-a11y/aria-role": [
                "error",
                {
                    "ignoreNonDOM": false
                }
            ],
            "jsx-a11y/aria-unsupported-elements": "error",
            "jsx-a11y/autocomplete-valid": [
                "off",
                {
                    "inputComponents": []
                }
            ],
            "jsx-a11y/click-events-have-key-events": "error",
            "jsx-a11y/control-has-associated-label": [
                "error",
                {
                    "labelAttributes": [
                        "label"
                    ],
                    "controlComponents": [],
                    "ignoreElements": [
                        "audio",
                        "canvas",
                        "embed",
                        "input",
                        "textarea",
                        "tr",
                        "video"
                    ],
                    "ignoreRoles": [
                        "grid",
                        "listbox",
                        "menu",
                        "menubar",
                        "radiogroup",
                        "row",
                        "tablist",
                        "toolbar",
                        "tree",
                        "treegrid"
                    ],
                    "depth": 5
                }
            ],
            "jsx-a11y/heading-has-content": [
                "error",
                {
                    "components": [
                        ""
                    ]
                }
            ],
            "jsx-a11y/img-redundant-alt": "error",
            "jsx-a11y/interactive-supports-focus": "error",
            "jsx-a11y/label-has-associated-control": [
                "off",
                {
                    "labelComponents": [],
                    "labelAttributes": [],
                    "controlComponents": [],
                    "assert": "both",
                    "depth": 25
                }
            ],
            "jsx-a11y/lang": "error",
            "jsx-a11y/no-distracting-elements": [
                "error",
                {
                    "elements": [
                        "marquee",
                        "blink"
                    ]
                }
            ],
            "jsx-a11y/role-has-required-aria-props": "error",
            "jsx-a11y/role-supports-aria-props": "error",
            "jsx-a11y/scope": "error",
            "jsx-a11y/tabindex-no-positive": "error"
        }
    },
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
])

export default eslintConfig