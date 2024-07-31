import { defineConfig, squooshImageService } from "astro/config"

import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import vercel from "@astrojs/vercel/serverless"
import lit from "@astrojs/lit"
import svelte from "@astrojs/svelte"
import autoprefixer from "autoprefixer"
import Icons from "unplugin-icons/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    isr: true
  }),
  experimental: {
    directRenderScript: true,
    clientPrerender: true
  },
  redirects: {
    "/blog/posts/[slug]": "/blog/[slug]",
    "/blog/post/[slug]": "/blog/[slug]",
    "/posts/[slug]": "/blog/[slug]",
    "/post/[slug]": "/blog/[slug]"
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [lit(), svelte(), tailwind(), mdx(), sitemap()],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        customCollections: {
          kuro: FileSystemIconLoader("./src/lib/icons/kuro"),
          brands: FileSystemIconLoader("./src/lib/icons/brands")
        }
      })
    ],
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  site: "https://kurojifusky.com",
  image: {
    service: squooshImageService(),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net"
      },
      {
        protocol: "https",
        hostname: "fuskylabs-cdn.imgix.net"
      }
    ]
  },
  build: {
    assets: "_kuro"
  }
})
