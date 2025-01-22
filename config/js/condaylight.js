document.addEventListener("DOMContentLoaded", function () {
    function updateThemeBasedOnTime() {
        const currentHour = new Date().getHours();
        const rootElement = document.documentElement;

        if (currentHour >= 6 && currentHour < 24) {
            // 白天模式
            rootElement.setAttribute("data-theme", "light");
        } else {
            // 黑夜模式
            rootElement.setAttribute("data-theme", "dark");
        }
    }

    // 初始化主题
    updateThemeBasedOnTime();

    // 每小时检查一次
    setInterval(updateThemeBasedOnTime, 3600000);
});
