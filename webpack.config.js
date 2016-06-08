module.exports = {
    entry: "./public/javascripts/script.js",
    output: {
        path: __dirname,
        filename: "public/javascripts/script.min.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};