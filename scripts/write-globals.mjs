import fs from "fs";

const dir = "c:/Users/thier/Documents/devIA/site/src/styles/simplement/";
for (const f of ["globals.css", "tokens.css", "site.css"]) {
  const p = dir + f;
  const b = fs.readFileSync(p);
  console.log(f, "size", b.length, "bom", b[0] === 0xef, "start", JSON.stringify(b.slice(0, 40).toString("utf8")));
}

fs.writeFileSync(dir + "globals.css", '@import "./tokens.css";\n@import "./site.css";\n');
console.log("globals rewritten");
