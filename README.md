# Metaprogramming with TypeScript

This is the playground for a [blog post](https://blog.whilenot.dev/posts/metaprogramming-with-typescript/) about [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming) with TypeScript.

I take [these data](./data/input.json) as input via JSON:

```json
[
  {
    "name": "A",
    "type": "boolean"
  },
  {
    "name": "B",
    "type": "number"
  },
  {
    "name": "C",
    "type": "string"
  }
]
```

...and output the following valid TypeScript file in three different ways:

```typescript
interface SomeInterfaceA {
  discriminator: "A";
  type: boolean;
}

interface SomeInterfaceB {
  discriminator: "B";
  type: number;
}

interface SomeInterfaceC {
  discriminator: "C";
  type: string;
}

export type SomeInterface = SomeInterfaceA | SomeInterfaceB | SomeInterfaceC;
```

The methods to output a TypeScript file include:

1. [Template literals](./src/1_template_literals.js)
1. [A template engine](./src/2_template_engine.js)
1. [The TypeScript AST](./src/3_typescript_ast.js)

## Usage

Launch the scripts one-by-one and inspect their output:

```bash
$ npm run -s start:1
```

```bash
$ npm run -s start:2
```

```bash
$ npm run -s start:3
```
