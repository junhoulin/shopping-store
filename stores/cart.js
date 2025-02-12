export const headercartStore = defineStore("cart", () => {
  const headerShop = ref(0);
  const getHeaderCart = async () => {
    const userCookie = useCookie("auth");
    try {
      const config = useRuntimeConfig();
      const res = await $fetch("/cart/cartlist", {
        baseURL: config.public.apiBase,
        headers: {
          Authorization: userCookie.value,
        },
      });
      if (
        res.cart &&
        Array.isArray(res.cart) &&
        res.cart[0] &&
        Array.isArray(res.cart[0].cartList)
      ) {
        headerShop.value = res.cart[0].cartList.length;
      } else {
        console.error("Cart list is empty or not in the expected format");
        headerShop.value = 0; // 如果格式不對，可以設置為 0
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    headerShop,
    getHeaderCart,
  };
});
