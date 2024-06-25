import { defineComponent, h } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export default defineComponent({
    name: 'DynamicIcon',
    props: {
        icon: {
            type: String,
            required: true
        }
    },
    render() {
        const IconComponent = ElementPlusIconsVue[this.icon as keyof typeof ElementPlusIconsVue];
        return IconComponent ? h(IconComponent) : null;
    }
});