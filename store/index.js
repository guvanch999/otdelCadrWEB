import {sidebarArray} from "~/settigns/sidebarSettigns";
export const state = () => ({
  sidebarMenus:sidebarArray
})

export const mutations = {
      setSelected(state,index){
        state.sidebarMenus.forEach(x=>x.selected=false);
        state.sidebarMenus[index].selected=true;
      }
}

export const actions = {

}

export const getters = {
      getSidebarArray:s=>s.sidebarMenus
}
