import Warframe from "warframe-items"

export function handleWarframeData(): void {
  const items = new Warframe({
    category: ["Warframes"],
    ignoreEnemies: true,
    i18n: false,
  })

  items.forEach((item) => {
    console.log(item.name)
  })
}
