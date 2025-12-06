import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Rodney Ndum",
    description: "Finance Professor & Researcher",
    head: [
        ['link', { rel: 'icon', href: '/assets/images/favicon.ico' }]
    ],
    themeConfig: {
        // We are using a custom layout, so we might not need nav/sidebar
        // But keeping it minimal
        socialLinks: [
            { icon: 'github', link: 'https://github.com/rndum' }
        ]
    },
    // Force clean URLs
    cleanUrls: true,
    srcExclude: ['_legacy_backup/**'],
    buildEnd: async (siteConfig) => {
        // Create .nojekyll file for GitHub Pages
        const { writeFileSync } = await import('fs')
        const { resolve } = await import('path')
        const nojekyllPath = resolve(siteConfig.outDir, '.nojekyll')
        writeFileSync(nojekyllPath, '')
    }
})
