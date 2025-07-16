document.addEventListener("DOMContentLoaded", function () {
  // 取得所有 sidebar-item 連結
  const sidebarItems = document.querySelectorAll(".sidebar-item");

  // 為每個 sidebar-item 添加點擊事件監聽器
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // 防止預設的連結行為

      // 移除所有 sidebar-item 的 active 類別
      sidebarItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // 為當前點擊的項目添加 active 類別
      this.classList.add("active");
    });
  });

  // 取得 menu-icon 按鈕和 navbar ul
  const menuIcon = document.querySelector(".menu-icon");
  const navbarMenu = document.querySelector(".navbar ul");

  // 為 menu-icon 添加點擊事件監聽器
  menuIcon.addEventListener("click", function () {
    // 切換 navbar ul 的顯示狀態
    if (
      navbarMenu.style.display === "none" ||
      navbarMenu.style.display === ""
    ) {
      navbarMenu.style.display = "block";
    } else {
      navbarMenu.style.display = "none";
    }
  });
});
