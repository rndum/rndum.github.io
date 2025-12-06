// .vitepress/theme/index.mts
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ProfileHeader from '../../components/ProfileHeader.vue'
import Timeline from '../../components/Timeline.vue'
import VideoGrid from '../../components/VideoGrid.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('ProfileHeader', ProfileHeader)
        app.component('Timeline', Timeline)
        app.component('VideoGrid', VideoGrid)
    }
}
