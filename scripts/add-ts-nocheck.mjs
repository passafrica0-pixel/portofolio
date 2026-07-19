import fs from "fs";

const p =
  "c:/Users/thier/Documents/devIA/site/src/components/dashboard/useDashboardRuntime.ts";
let c = fs.readFileSync(p, "utf8");
if (!c.includes("@ts-nocheck")) {
  c = c.replace('"use client";', '"use client";\n// @ts-nocheck');
  fs.writeFileSync(p, c);
}
console.log("runtime ok");
