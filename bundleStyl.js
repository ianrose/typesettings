import path from "path"
import * as fs from 'fs'
import { Bundler } from "stylus-bundle"

(async () => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname)
    // Absolute project directory path.
    const projectDirectory = path.resolve(__dirname, "./")
    const bundler = new Bundler(undefined, projectDirectory)
    // Relative file path to project directory path.
    const result = await bundler.bundle("./_typesettings.styl")
    fs.writeFileSync('_typesettings.bundle.styl', result.bundledContent, 'utf8')
})()


