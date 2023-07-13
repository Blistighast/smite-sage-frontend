import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const generate = async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettier.js");
  const pages = await globby([
    "pages/*.js",
    "pages/*.tsx",
    ".next/server/pages/god/*.html",
    "!pages/player",
    "!pages/dev*",
    "!pages/api",
    "!pages/_*.js",
    "!pages/_*.tsx",
    "!pages/404.js",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace("data", "")
              .replace(".next/server/", "")
              .replace(".html", "")
              .replace(".js", "")
              .replace(".tsx", "")
              .replace(".mdx", "");
            const route = path === "/index" ? "" : path;

            return `
              <url>
                  <loc>${`https://www.smitesage.com${route}`}</loc>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
};

generate();
