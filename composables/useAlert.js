export const showAlert = (text, icon = "info") => {
  const { $swal } = useNuxtApp();
  $swal.fire({
    text,
    icon,
    confirmButtonText: "確定",
    timer: 2000,
    customClass: {
      popup: "my-popup",
      title: "my-title",
      confirmButton: "my-button",
    },
    position: "center", // 讓彈窗固定在中央，避免影響頁面排版
    backdrop: true, // 保持背景固定
  });
};
