import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPath } from "./config/build/types/config";


// mode "development" by default
const mode = "development"
//FIXME: ?? const mode = isDev ? "development" : "production"
const isDev = mode === "development" // false >> mode = "production"

const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build:  path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
}

const config = buildWebpackConfig({
    mode: "development",
    paths,
    isDev,
})


export default config;