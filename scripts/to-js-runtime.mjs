import fs from "fs";

const p =
  "c:/Users/thier/Documents/devIA/site/src/components/dashboard/useDashboardRuntime.ts";
const out =
  "c:/Users/thier/Documents/devIA/site/src/components/dashboard/useDashboardRuntime.js";

let c = fs.readFileSync(p, "utf8");
c = c
  .replace(/^\/\/ @ts-nocheck\r?\n/, "")
  .replace(/declare global \{[\s\S]*?\}\r?\n/, "")
  .replace(/\(e\) => \{\n\s*if \(card\.classList\.contains\("is-dragging"\)\) return;/, "() => {\n      if (card.classList.contains(\"is-dragging\")) return;");

fs.writeFileSync(out, c);
fs.unlinkSync(p);
console.log("converted to js");
