// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded and ready");

  // 初始化應用
  init();
});

// 初始化函數
function init() {
  // 在這裡加入你的初始化邏輯
  setupEventListeners();
  setupResponsiveHandlers();
}

// 設定事件監聽器
function setupEventListeners() {
  // 例如：導航、按鈕點擊等事件
}

// 響應式處理
function setupResponsiveHandlers() {
  // 處理視窗大小變化
  window.addEventListener("resize", handleResize);
}

function handleResize() {
  // 響應式邏輯
}

// Utility functions
const utils = {
  // 節流函數
  throttle: function (func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // 防抖函數
  debounce: function (func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },
};
