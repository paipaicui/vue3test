// eslint-disable-next-line @typescript-eslint/no-var-requires
let path = require('path')
const {
    SkeletonPlugin
} = require('page-skeleton-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: process.env.VUE_APP_FLAG,
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    chainWebpack: config => {
        // 解决vue-cli3脚手架创建的项目压缩html 干掉<!-- shell -->导致骨架屏不生效
        if (process.env.NODE_ENV !== 'development') {
            config.plugin('html').tap(opts => {
                opts[0].minify.removeComments = false
                return opts
            })
        }
        config.resolve.alias
            .set('@', resolve('src'))
            .set('images', resolve('src/assets/images'))
    },
    /* 骨架屏配置  */
    configureWebpack: {
        plugins: [
            new SkeletonPlugin({
                pathname: path.resolve(__dirname, './shell'), // 用来存储 shell 文件的地址
                staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
                routes: ['/', '/home'], // 将需要生成骨架屏的路由添加到数组中
            })
        ],
    },
    /* 注意sass，scss，less的配置 */
    css: {
        loaderOptions: {
            // sass: {
            //     prependData: `@import "~@/assets/name.scss";`
            // },
            sass: {
                // prependData: `@import "~@/assets/css/common.scss";`

            }
        }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
    },

    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '127.0.0.1',
        port: 80,
        https: false,
        hotOnly: false,
        /* 使用代理 */
    }
}