const { resolve } = require('path')
const CracoLessPlugin = require("craco-less");

/** @type {import('@craco/craco').CracoConfig} */
const config = {
    plugins: [{ plugin: CracoLessPlugin }],
    webpack:{
        alias:{
            "@":resolve("src"),
            "components":resolve("src/components"),
        }
    }
    

}

module.exports = config