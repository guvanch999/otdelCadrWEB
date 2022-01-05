import Cookie from 'js-cookie'
export default function (context) {
  console.log("[Middleware] Just Auth");
  if (!context.store.getters.isAuthenticated) {
    console.log(context.route.fullPath);
    if(Cookie.get('mainToken')){
      console.log('Auth type'+ Cookie.get('mainToken'))
      context.store.commit('setToken',Cookie.get('mainToken'));
      //context.redirect(context.app.localePath('/students/addstudent'))
      context.store.commit('setReturnPath',context.route.fullPath);
    } else {
      context.redirect(context.app.localePath("/login"));
    }
  }
}
