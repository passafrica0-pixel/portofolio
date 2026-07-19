import fs from "fs";
import path from "path";

const srcDir = "c:/Users/thier/Documents/devIA/Dashboard";
const outDir = "c:/Users/thier/Documents/devIA/site/src/components/dashboard/pages";
fs.mkdirSync(outDir, { recursive: true });

function toJsx(html) {
  let body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  body = body.replace(/\sclass=/g, " className=");
  body = body.replace(/\sfor=/g, " htmlFor=");
  body = body.replace(/stroke-width=/g, "strokeWidth=");
  body = body.replace(/stroke-dasharray=/g, "strokeDasharray=");
  body = body.replace(/fill-rule=/g, "fillRule=");
  body = body.replace(/clip-rule=/g, "clipRule=");
  body = body.replace(/tabindex=/g, "tabIndex=");
  body = body.replace(/\sreadonly\b/g, " readOnly");
  body = body.replace(/href="index\.html"/g, 'href="/live/dashboard"');
  body = body.replace(/href="appels\.html"/g, 'href="/live/dashboard/appels"');
  body = body.replace(/href="contenu\.html"/g, 'href="/live/dashboard/contenu"');
  body = body.replace(/<(img|input|br|hr|col|wbr)([^>]*?)(?<!\/)>/gi, "<$1$2 />");
  body = body.replace(/style="([^"]*)"/g, (_, s) => {
    const obj = s
      .split(";")
      .filter(Boolean)
      .map((p) => {
        const [k, ...rest] = p.split(":");
        if (!k) return null;
        const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        const val = rest.join(":").trim();
        if (/^\d+(\.\d+)?$/.test(val)) return `${key}: ${val}`;
        return `${key}: "${val.replace(/"/g, '\\"')}"`;
      })
      .filter(Boolean)
      .join(", ");
    return `style={{${obj}}}`;
  });
  return body.trim();
}

const map = {
  "index.html": "DashboardHome",
  "appels.html": "DashboardAppels",
  "contenu.html": "DashboardContenu",
};

for (const [file, name] of Object.entries(map)) {
  const html = fs.readFileSync(path.join(srcDir, file), "utf8");
  const jsx = toJsx(html);
  const code = `"use client";

import { useDashboardRuntime } from "../useDashboardRuntime";

export default function ${name}() {
  useDashboardRuntime();
  return (
    <>
${jsx
  .split("\n")
  .map((l) => `      ${l}`)
  .join("\n")}
    </>
  );
}
`;
  fs.writeFileSync(path.join(outDir, `${name}.tsx`), code);
  console.log("wrote", name, code.length);
}
