import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const roots = [
  "c:/Users/thier/Documents/devIA/site/src/components/simplement",
  "c:/Users/thier/Documents/devIA/site/src/app/live/simplement",
];

for (const root of roots) {
  for (const f of walk(root)) {
    let c = fs.readFileSync(f, "utf8");
    let n = c
      .replace(/from "@\/components\/([^"]+)"/g, 'from "@/components/simplement/$1"')
      .replace(/from "@\/lib\/data"/g, 'from "@/lib/simplement/data"')
      .replace(/href="\/"/g, 'href="/live/simplement"')
      .replace(/href="\/(?!live\/|http)([^"]*)"/g, 'href="/live/simplement/$1"')
      .replace(/href: "\/(?!live\/|http)([^"]*)"/g, 'href: "/live/simplement/$1"');
    if (n !== c) {
      fs.writeFileSync(f, n, "utf8");
      console.log("fixed", path.basename(f));
    }
  }
}
