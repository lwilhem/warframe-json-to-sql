import { defineConfig } from "tsup"

export default defineConfig({
  name: "warframe-json-to-sql",
  platform: "node",
  entry: [
    "./src/**/*.ts",
  ],
  format: ["esm", "cjs"],
  outDir: "./dist",
  bundle: true,
  splitting: true,
  dts: true,
})
