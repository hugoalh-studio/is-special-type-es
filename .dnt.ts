import {
	getMetadataFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
const configJSR = await getMetadataFromConfig("jsr.jsonc");
await invokeDenoNodeJSTransformer({
	assetsCopy: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: configJSR.getExports(),
	generateDeclarationMap: true,
	metadata: {
		name: configJSR.getName(),
		version: configJSR.getVersion(),
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
