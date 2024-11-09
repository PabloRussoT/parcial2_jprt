import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default {
  overrides: [
    {
      name: 'app/files-to-lint',
      files: ['**/*.{ts,mts,tsx,vue}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
    {
      name: 'app/files-to-ignore',
      ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },
    {
      ...pluginVue.configs['essential'], // Using essential config from eslint-plugin-vue
    },
    {
      ...vueTsEslintConfig(), // Vue TypeScript ESLint config
    },
    {
      ...pluginVitest.configs.recommended,
      files: ['src/**/__tests__/*'],
    },
    skipFormatting, // Prettier skip formatting rule
  ],
};
