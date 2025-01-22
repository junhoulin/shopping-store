export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("auth");
  const config = useRuntimeConfig();
  if (!token.value) navigateTo("/user/login");
  const userInfo = await $fetch("/user/check", {
    baseURL: config.public.apiBase,
    method: "GET",
    headers: {
      Authorization: token.value,
    },
  }).catch((error) => {
    console.log(error.data);
  });
  if (userInfo?.status !== undefined) {
    // 驗證成功，終止函式執行
    return;
  }
  // 驗證失敗，導引回登入頁面
  // 在伺服器端和客戶端操作路由
  return navigateTo("/user/login");
});
