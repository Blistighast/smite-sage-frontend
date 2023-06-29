import { globby } from "globby";
import prettier from "prettier";

const generate = async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettier.js");
  const pages = await globby([]);
};
