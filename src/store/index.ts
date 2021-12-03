import {createStore} from 'vuex';
 
const modulesFiles = import.meta.globEager('./modules/**/*.ts');

// TODO此处不知道怎么解决，就用了any
const modules: any = {}

Object.keys(modulesFiles).forEach((key: string) => {
  
  const moduleName: string = key.replace(/(\.\/modules\/|\.ts)/g, '')

  modulesFiles[moduleName] = modulesFiles[key].default
})

const store = createStore({
  modules
})

export default store