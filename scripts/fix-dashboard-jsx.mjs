import fs from "fs";
import path from "path";

const dir = "c:/Users/thier/Documents/devIA/site/src/components/dashboard/pages";
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".tsx"))) {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, "utf8");
  c = c.replace(/<!--([\s\S]*?)-->/g, (_, body) => `{/*${body.replace(/\*\//g, "* /")}*/}`);
  c = c.replace(/\sdata-count(?!=)/g, ' data-count=""');
  fs.writeFileSync(p, c);
  console.log("patched", f);
}
