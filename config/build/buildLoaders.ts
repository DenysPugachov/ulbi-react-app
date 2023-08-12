import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
    // use loaders in right order!
    const typeScriptLoader = {
                test: /\.tsx?$/, // >> .ts, .tsx
                use: 'ts-loader', // what to use for this files?
                exclude: /node_modules/,
    }
    
    return [
            typeScriptLoader,
        ]
}