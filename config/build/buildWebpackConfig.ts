import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPluginns";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {mode, paths } = options    
    
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    }
}