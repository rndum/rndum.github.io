# Personal Website (VitePress Edition)

This website is built using [VitePress](https://vitepress.dev/), designed to be minimal, fast, and easy to maintain.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run docs:dev
```
The site will be available at `http://localhost:5173`.

### Build for Production
```bash
npm run docs:build
```

## 📝 Updating Content

The website content is separated from the code. You can update your information by editing the JSON files in the `data/` directory.

### 1. Profile Information
Edit `data/profile.json` to update:
- Name & Tagline
- Avatar URL
- Bio
- Social Media Links

### 2. Timeline
Edit `data/timeline.json`. This is a list where new items should be added at the top.
Format:
```json
{
  "year": "2024",
  "logo": "/path/to/logo.png",
  "content": "Your description with <b>HTML support</b>."
}
```

### 3. Talks / Videos
Edit `data/talks.json` to add new video cards.

## 🛠 Adding New Pages

Simply create a new markdown file in the root directory.
Example: `about.md` -> `yoursite.com/about.html`

You can use Vue components inside markdown files:
```html
<script setup>
import MyComponent from './components/MyComponent.vue'
</script>

<MyComponent />
```

## 🧩 Creating New Apps/Tools

To create an interactive tool (e.g., a calculator or demo), create a Vue component in `components/` and embed it in a markdown page.

Example: `components/Calculator.vue`
Then in `tools/calculator.md`:
```md
# Calculator

<script setup>
import Calculator from '../components/Calculator.vue'
</script>

<Calculator />
```

##  Deployment

This site is configured for GitHub Pages.
1. Commit your changes.
2. Push to `main`.
3. Ensure GitHub Actions are enabled or manually deploy the `docs/.vitepress/dist` folder.
