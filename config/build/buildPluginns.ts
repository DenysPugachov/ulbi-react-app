import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config";


export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths } = options
    
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
    ]
    
}