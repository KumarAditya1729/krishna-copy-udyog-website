import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const clientDir = resolve("dist/client");
const assetsDir = resolve(clientDir, "assets");
const indexPath = resolve(clientDir, "index.html");

if (!existsSync(clientDir)) {
  throw new Error("dist/client not found. Run vite build first.");
}

if (!existsSync(assetsDir)) {
  throw new Error("dist/client/assets not found. Build assets are missing.");
}

const files = readdirSync(assetsDir);

const cssFiles = files
  .filter((file) => file.endsWith(".css"))
  .sort();

const jsFiles = files
  .filter((file) => file.endsWith(".js"))
  .filter((file) => file.startsWith("index-"))
  .sort();

if (jsFiles.length === 0) {
  throw new Error("No built JS entry files found in dist/client/assets.");
}

const cssTags = cssFiles
  .map((file) => `    <link rel="stylesheet" href="/assets/${file}" />`)
  .join("\n");

const scriptTags = jsFiles
  .map((file) => `    <script type="module" src="/assets/${file}"></script>`)
  .join("\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Krishna Copy Udyog | Notebook Manufacturer in Patna</title>
    <meta
      name="description"
      content="Krishna Copy Udyog is a Patna-based educational stationery manufacturer and wholesale trader offering notebooks, registers, worksheets, catalogue download, and bulk order support."
    />
${cssTags}
  </head>
  <body>
    <div id="root"></div>
${scriptTags}
  </body>
</html>
`;

mkdirSync(clientDir, { recursive: true });
writeFileSync(indexPath, html, "utf8");

console.log(`Created ${indexPath}`);
