// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',  
  devtools: { enabled: true },
    ssr: true,
  css: [
    '~/assets/style/main.scss',
  ],
  app: {
    head: {
      title: 'Зарядные станции под ключ | Установка ЭЗС в Москве и России',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }        
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: '/fonts/europe/stylesheet.css'
        },
          {
              rel: 'icon',
              type: 'image/png',
              href: '/ico.png'
          },
      ]
    }
  },
  resolve: {
    alias: {
      "@": resolve(".")
    }
  },

    runtimeConfig: {
        public: {
            apiDomain: process.env.API_DOMAIN
        }
    },

    hooks: {
        'pages:extend'(pages) {
            pages.push(
                {
                    name: "category",
                    path: '/category/:slug',
                    file: resolve("pages/category.vue")
                }
            )
        }
    },

})
