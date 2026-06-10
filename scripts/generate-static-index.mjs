import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const clientDir = join(projectRoot, "dist", "client");
const assetsDir = join(clientDir, "assets");
const indexPath = join(clientDir, "index.html");

const files = readdirSync(assetsDir);

const cssFiles = files
  .filter((file) => file.endsWith(".css"))
  .sort();

const indexJsFiles = files
  .filter((file) => file.startsWith("index-") && file.endsWith(".js"))
  .map((file) => ({
    file,
    size: statSync(join(assetsDir, file)).size,
  }))
  .sort((a, b) => a.size - b.size);

if (indexJsFiles.length === 0) {
  throw new Error("No index-*.js files found in dist/client/assets.");
}

// For this TanStack/Lovable client build, the smaller index-*.js is the browser bootstrap.
// The larger index-*.js is a route/page chunk and causes "Invariant failed" if loaded directly.
const entryFile = indexJsFiles[0].file;

const cssTags = cssFiles
  .map((file) => `    <link rel="stylesheet" href="/assets/${file}" />`)
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
    <script type="module" src="/assets/${entryFile}"></script>
  </body>
</html>
`;

mkdirSync(clientDir, { recursive: true });
writeFileSync(indexPath, html, "utf8");

console.log(`Created ${indexPath}`);
console.log(`Using browser entry: /assets/${entryFile}`);
