#!/usr/bin/env -S node --no-warnings

import path from "path";
import { fileURLToPath } from "url";

import data from "../data/input.json" assert { type: "json" };

main();

function main() {
  const interfaces = data
    .map(
      (val) => `interface SomeInterface${val.name} {
  discriminator: "${val.name}";
  type: ${val.type};
}
`,
    )
    .join("\n");
  const union =
    "export type SomeInterface = " +
    data.map((val) => `SomeInterface${val.name}`).join(" | ") +
    ";\n";

  const result = [interfaces, union].join("\n");

  const scriptFile = fileURLToPath(import.meta.url);
  const projectDir = path.join(scriptFile, "..", "..");
  const scriptFileRel = path.relative(projectDir, scriptFile);
  console.log(`/* autogenerated by ${scriptFileRel} */`);

  console.log(result);
}
