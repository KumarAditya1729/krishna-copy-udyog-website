import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const clientDir = path.join(projectRoot, "dist", "client");
const assetsDir = path.join(clientDir, "assets");
const indexPath = path.join(clientDir, "index.html");

if (!existsSync(assetsDir)) {
  throw new Error("dist/client/assets not found. Run vite build first.");
}

const files = readdirSync(assetsDir);

const cssFiles = files
  .filter((file) => file.endsWith(".css"))
  .sort();

const jsFiles = files
  .filter((file) => file.endsWith(".js"))
  .map((file) => {
    const fullPath = path.join(assetsDir, file);
    return {
      file,
      fullPath,
      size: statSync(fullPath).size,
      content: readFileSync(fullPath, "utf8"),
    };
  });

const browserEntryCandidates = jsFiles
  .filter(({ content }) =>
    /hydrateRoot|createRoot|StartClient|createRouter|RouterProvider|startTransition/.test(content)
  )
  .sort((a, b) => a.size - b.size);

if (browserEntryCandidates.length === 0) {
  console.log("Available JS files:");
  for (const item of jsFiles.sort((a, b) => a.size - b.size)) {
    console.log(`- ${item.file} (${item.size} bytes)`);
  }
  throw new Error("Could not identify browser entry JS file.");
}

const entryFile = browserEntryCandidates[0].file;

const cssTags = cssFiles
  .map((file) => `    <link rel="stylesheet" href="/assets/${file}" />`)
  .join("\n");

const scriptTag = `    <script type="module" src="/assets/${entryFile}"></script>`;

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
${scriptTag}
  </body>
</html>
`;

mkdirSync(clientDir, { recursive: true });
writeFileSync(indexPath, html, "utf8");

console.log(`Created ${indexPath}`);
console.log(`Using browser entry: /assets/${entryFile}`);
