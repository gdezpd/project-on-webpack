import webpack from "webpack";

export function buildingLoaders(): webpack.RuleSetRule[] {

    const typescriptRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typescriptRule,
    ]
}