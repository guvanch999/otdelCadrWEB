export default function (context) {
  console.log("[Middleware] Just Auth");
  if (!context.store.getters.isAuthenticated) {
    console.log(context.route.fullPath);
    context.store.commit("setReturnPath", context.route.fullPath);
    context.redirect(context.app.localePath("/login"));
  }
}
