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
  });
};
