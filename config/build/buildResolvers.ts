import { ResolveOptions } from "webpack";

export function buildResolvers():ResolveOptions {
    return {
        // resolve file extensions on import ("/component")
        extensions: ['.tsx', '.ts', '.js'],
    }
}