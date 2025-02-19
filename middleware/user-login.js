export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("auth", { default: () => "" });
  const config = useRuntimeConfig();
  const { $swal } = useNuxtApp();

  if (!token.value) {
    $swal.fire({
      text: "請先登入會員",
      icon: "info",
      confirmButtonText: "確定",
      timer: 2000,
      customClass: {
        popup: "my-popup",
        title: "my-title",
        confirmButton: "my-button",
      },
      position: "center",
      backdrop: true,
    });
    return navigateTo("/user/login");
  }

  try {
    const userInfo = await $fetch("/user/check", {
      baseURL: config.public.apiBase,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (userInfo?.status !== undefined) {
      return;
    }
  } catch (error) {
    if (process.client) {
      $swal.fire({
        text: `${error.message}`,
        icon: "info",
        confirmButtonText: "確定",
        timer: 2000,
        customClass: {
          popup: "my-popup",
          title: "my-title",
          confirmButton: "my-button",
        },
        position: "center",
        backdrop: true,
      });
    }
  }

  return navigateTo("/user/login");
});
