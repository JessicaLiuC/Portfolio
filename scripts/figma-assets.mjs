// Exports every image the site uses from Figma into /public.
// Usage: FIGMA_TOKEN=<personal access token> npm run figma:assets
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const token = process.env.FIGMA_TOKEN;
if (!token) throw new Error("Set FIGMA_TOKEN to a Figma personal access token.");

const { fileKey, ...byFormat } = JSON.parse(await readFile(new URL("./figma-assets.json", import.meta.url)));
const api = (path) => fetch(`https://api.figma.com/v1/${path}`, { headers: { "X-Figma-Token": token } }).then((r) => r.json());

for (const [format, assets] of Object.entries(byFormat)) {
  const ids = [...new Set(Object.values(assets))].join(",");
  // PNGs at 2x for retina.
  const { images, err } = await api(`images/${fileKey}?ids=${ids}&format=${format}${format === "png" ? "&scale=2" : ""}`);
  if (err) throw new Error(err);
  for (const [out, id] of Object.entries(assets)) {
    // Figma returns null for nodes it could not render (deleted, hidden, empty).
    if (!images?.[id]) throw new Error(`Figma could not render node ${id} for ${out}`);
    const res = await fetch(images[id]);
    if (!res.ok) throw new Error(`Downloading ${out} failed: ${res.status} ${res.statusText}`);
    const file = join("public", out);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    console.log("✓", out);
  }
}
