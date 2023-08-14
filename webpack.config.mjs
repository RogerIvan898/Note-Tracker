import path from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/dist/public/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.ejs'],
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: 'ejs-webpack-loader',
            },
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'ts-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
};
