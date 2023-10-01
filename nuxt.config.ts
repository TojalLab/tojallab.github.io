// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "pathe";
// import {globSync} from "glob"
// const routes = globSync('./content/**/*.md')
//     .map(path => path.slice(7, -3))
//console.log(routes)
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/google-fonts'],
    //plugins:[],
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    devtools: { enabled: false },
    build: {
        transpile: ['vuetify'],
    },
    vuetify: {
        defaultAssets: {
            icons: "mdi"
        }
    },
    googleFonts: {
        families: {
            Roboto: true,
            Lora: true,
            Lobster: true,
            Montserrat: true
        }
    },
    content: {
        markdown: {
            anchorLinks: false
        },

        experimental: {
            clientDb: true
        },
        sources: {
            // overwrite default source AKA `content` directory
            // content: {
            //     driver: 'fs',
            //     // prefix: '/meta',
            //     base: resolve(__dirname, 'content')
            // },
            // news: {
            //     driver: 'fs',
            //     prefix: '/news',
            //     base: resolve(__dirname, 'posts/news')
            // },
            // software: {
            //     driver: 'fs',
            //     prefix: '/software',
            //     base: resolve(__dirname, 'posts/software')
            // },
            // publications: {
            //     driver: 'fs',
            //     prefix: '/publications',
            //     base: resolve(__dirname, 'posts/publications')
            // }
        }
    },
    app: {
        head: {
            script: [{src: 'particles.min.js'}],
        },
    },
    devtools: {enabled: true}
})
