import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // use loaders in right order!
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")), // ... *.module.*
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]"
                    }
                },
            },
            "sass-loader",
        ],
    }

    // You do NOT need babel if you use TS.
    const typeScriptLoader = {
        test: /\.tsx?$/, // >> .ts, .tsx
        use: 'ts-loader', // what to use for this files?
        exclude: /node_modules/,
    }

    return [
        typeScriptLoader,
        scssLoader,
    ]
}