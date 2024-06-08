import { generateEsLintLintRules } from "custom-element-eslint-rule-generator";
import manifest from "@shoelace-style/shoelace/dist/custom-elements.json" assert {type: 'json'};

generateEsLintLintRules(manifest, { typesSrc: 'type' });