module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            2,
            {SwitchCase: 1}
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": [
            "off"
        ],
        "no-undef": [
            "warn"
        ],
        "quotes": [
            "off",
            "double"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};