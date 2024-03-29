import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPath } from "./config/build/types/config";


export default (env: BuildEnv) => {

    const mode = env.mode || "development"
    const PORT = env.port || 3000
    const isDev = mode === "development"

    const paths: BuildPath = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "dist"),
        html: path.resolve(__dirname, "public", "index.html"),
    }

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config
};