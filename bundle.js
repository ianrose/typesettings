import path from "path";
import * as fs from "fs";
import { Bundler as scssBundler } from "scss-bundle";
import { Bundler as stylusBundler } from "stylus-bundle";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const projectDirectory = path.resolve(__dirname, "./");

const scss = async () => {
  const bundler = new scssBundler(undefined, projectDirectory);
  const result = await bundler.bundle("./_typesettings.scss");
  fs.writeFileSync("_typesettings.bundle.scss", result.bundledContent, "utf8");
};

const stylus = async () => {
  const bundler = new stylusBundler(undefined, projectDirectory);
  const result = await bundler.bundle("./_typesettings.styl");
  fs.writeFileSync("_typesettings.bundle.styl", result.bundledContent, "utf8");
};

scss();
stylus();
