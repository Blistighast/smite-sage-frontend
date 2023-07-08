import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const generate = async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettier.js");
  const pages = await globby([
    "pages/*.js",
    "!pages/player",
    "!pages/api",
    "!pages/404.js",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page.replace("pages", "").replace(".js", "");
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
};
