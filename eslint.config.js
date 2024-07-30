import antfu from "@antfu/eslint-config"

export default antfu({
  stylistic: {
    quotes: "double",
  },
  type: "lib",
  rules: {
    "no-console": "off",
  },
})
