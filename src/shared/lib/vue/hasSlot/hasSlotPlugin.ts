import { App } from 'vue';
import hasSlot from './hasSlot';

const hasSlotPlugin = {
  install(app: App) {
    app.config.globalProperties.$hasSlot = hasSlot;
  },
};

export default hasSlotPlugin;
