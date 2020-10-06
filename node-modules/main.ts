import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);

const path = require('path');
const definePath = path.dirname('/foo/bar/baz/folder/file');
console.log(definePath);

const os = require('os');
const homeDirectory = os.homedir();
console.log(homeDirectory);

const osRel = os.release();
console.log(osRel);

