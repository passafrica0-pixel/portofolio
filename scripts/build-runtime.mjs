import fs from "fs";

const src = "c:/Users/thier/Documents/devIA/Dashboard/app.js";
const out =
  "c:/Users/thier/Documents/devIA/site/src/components/dashboard/useDashboardRuntime.js";

let inner = fs.readFileSync(src, "utf8");
inner = inner.replace(/^\(\(\)\s*=>\s*\{/, "").replace(/\}\)\(\);\s*$/, "");
// unused event param
inner = inner.replace(
  /card\.addEventListener\("click", \(e\) => \{/,
  'card.addEventListener("click", () => {',
);

const code = `"use client";

import { useEffect } from "react";

export function useDashboardRuntime() {
  useEffect(() => {
${inner}
    return () => {
      window.__voiceAbort = true;
      if ("speechSynthesis" in window) speechSynthesis.cancel();
    };
  }, []);
}
`;

fs.writeFileSync(out, code);
console.log("wrote", out, code.length);
