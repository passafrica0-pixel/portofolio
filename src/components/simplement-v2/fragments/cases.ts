// Corps des études de cas v2, indexés par slug.
import { HTML as case_sofranel } from "./case_sofranel";
import { HTML as case_frate_mate } from "./case_frate_mate";
import { HTML as case_motivart } from "./case_motivart";
import { HTML as case_welcomeurope } from "./case_welcomeurope";

export const CASE_HTML: Record<string, string> = {
  "sofranel": case_sofranel,
  "frate-mate": case_frate_mate,
  "motivart": case_motivart,
  "welcomeurope": case_welcomeurope,
};
