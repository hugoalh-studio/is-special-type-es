import {
	getEntrypointsFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
await invokeDenoNodeJSTransformer({
	assetsCopy: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: await getEntrypointsFromConfig("jsr.jsonc"),
	generateDeclarationMap: true,
	metadata: {
		name: "@hugoalh/is-special-type",
		version: "0.1.3",
		description: "A module to determine whether the item is special/specific type.",
		keywords: [
			"is",
			"special",
			"specific",
			"type"
		],
		homepage: "https://github.com/hugoalh-studio/is-special-type-es#readme",
		bugs: {
			url: "https://github.com/hugoalh-studio/is-special-type-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh-studio/is-special-type-es.git"
		},
		scripts: {
		},
		engines: {
			node: ">=16.13.0"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "npm",
	outputDirectoryPreEmpty: true
});
