export default defineNuxtRouteMiddleware(async (to, from) => {
  const showAlert = (text, icon) => {
    const { $swal } = useNuxtApp();
    $swal.fire({
      text: text,
      icon: icon,
      confirmButtonText: "確定",
      timer: 2000,
      customClass: {
        popup: "my-popup",
        title: "my-title",
        confirmButton: "my-button",
      },
    });
  };
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
    showAlert(`${error.data.message}`, "error");
  });
  if (userInfo?.status !== undefined) {
    // 驗證成功，終止函式執行
    return;
  }
  // showAlert("請先登入", "error");
  // 驗證失敗，導引回登入頁面
  // 在伺服器端和客戶端操作路由
  return navigateTo("/user/login");
});
