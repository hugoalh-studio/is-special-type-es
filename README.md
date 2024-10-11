# Is Special Type (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/is-special-type-es](https://img.shields.io/github/v/release/hugoalh-studio/is-special-type-es?label=hugoalh-studio/is-special-type-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/is-special-type-es")](https://github.com/hugoalh-studio/is-special-type-es)
[![JSR: @hugoalh/is-special-type](https://img.shields.io/jsr/v/@hugoalh/is-special-type?label=@hugoalh/is-special-type&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/is-special-type")](https://jsr.io/@hugoalh/is-special-type)
[![NPM: @hugoalh/is-special-type](https://img.shields.io/npm/v/@hugoalh/is-special-type?label=@hugoalh/is-special-type&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-special-type")](https://www.npmjs.com/package/@hugoalh/is-special-type)

An ES (JavaScript & TypeScript) module to determine whether the item is special/specific type:

- Async Function
- Async Generator Function
- Async Generator
- Sync Function
- Sync Generator Function
- Sync Generator

This only reports back what the JavaScript engine is seeing; In particular, the return value may not match the original source code if a transpilation tool was used.

## 🔰 Begin

### 🎯 Targets

|  | **Remote** | **JSR** | **NPM** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ❓ | ✔️ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | ❌ | ❓ | ✔️ |
| **[Deno](https://deno.land/)** >= v1.42.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | ❌ | ❓ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh-studio/is-special-type-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/is-special-type[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/is-special-type[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Require Runtime Permissions

*This module does not require any runtime permission.*

## 🧩 APIs

- ```ts
  function isAsyncFunction(item: unknown): item is (...parameters: unknown[]) => Promise<unknown>;
  ```
- ```ts
  function isAsyncGeneratorFunction(item: unknown): item is AsyncGeneratorFunction;
  ```
- ```ts
  function isAsyncGenerator(item: unknown): item is AsyncGenerator;
  ```
- ```ts
  function isSyncFunction(item: unknown): item is (...parameters: unknown[]) => Exclude<unknown, Promise<unknown>>;
  ```
- ```ts
  function isSyncGeneratorFunction(item: unknown): item is GeneratorFunction;
  ```
- ```ts
  function isSyncGenerator(item: unknown): item is Generator;
  ```

> [!NOTE]
> - For the prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/is-special-type)
