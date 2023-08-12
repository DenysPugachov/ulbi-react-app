import path from "path"
import webpack from "webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"


const config = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
        rules: [
            {
                test: /\.tsx?$/, // >> .ts, .tsx
                use: 'ts-loader', // what to use for this files?
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // resolve file extensions on import ("/component")
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
    ]
}


export default config;