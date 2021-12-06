import { Tabbar, TabbarItem } from 'vant'
import { App } from 'vue';
const vantComponents = [Tabbar, TabbarItem]
// vantComponents.forEach(component => {

// })
const install = (app: App): void => {
  vantComponents.forEach(component => {
    app.component(component.name, component)
  })
}
export default { install }