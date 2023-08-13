import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        // resolve (add default) file extensions on import ("/component")
        extensions: ['.tsx', '.ts', '.js'],
    }
}