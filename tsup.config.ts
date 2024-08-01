import { defineConfig } from "tsup"

export default defineConfig({
  name: "warframe-json-to-sql",
  platform: "node",
  entry: [
    "./src/**/*.ts",
  ],
  format: ["esm"],
  outDir: "./dist",
  dts: true,
  clean: true,
})
