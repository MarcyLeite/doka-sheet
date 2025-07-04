import vuetify from 'eslint-config-vuetify'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig, globalIgnores } from 'eslint/config'

const config = defineConfig([
	...pluginVue.configs['flat/recommended'],
	...(await vuetify()),
	globalIgnores(['.eslintrc-auto-import.json', 'auto-imports.d.ts']),
	{
		files: ['**/*.{js,ts,mts,tsx,vue}'],
		rules: {
			'@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/indent': ['error', 'tab'],
			'vue/script-indent': [
				'error',
				'tab',
				{
					baseIndent: 0,
					switchCase: 0,
					ignores: [],
				},
			],
			'import/no-duplicates': 'off',
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@stylistic/comma-dangle': [
				'error',
				{
					arrays: 'always-multiline',
					objects: 'always-multiline',
					imports: 'always-multiline',
					exports: 'always-multiline',
					functions: 'never',
				},
			],
		},
	},
	{
		files: ['package.json', '**/*.{json}'],
		rules: {
			'@stylistic/no-tabs': 'off',
			'@stylistic/indent': ['error', 'tab'],
		},
	},
])

export default config
