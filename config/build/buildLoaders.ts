import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
    // use loaders in right order!
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
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