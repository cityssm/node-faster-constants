import { configWebApp, cspellWords, tseslint } from 'eslint-config-cityssm';
import eslintConstants from './other/eslint.js';
export const config = tseslint.config(...configWebApp, {
    rules: {
        '@cspell/spellchecker': [
            'warn',
            {
                cspell: {
                    words: [
                        ...cspellWords,
                        ...eslintConstants.cspellWords
                    ]
                }
            }
        ]
    }
});
export default config;
