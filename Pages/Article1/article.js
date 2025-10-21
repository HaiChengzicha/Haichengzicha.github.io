// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取返回按钮元素
    const backButton = document.getElementById('backButton');
    
    // 为返回按钮添加点击事件
    if (backButton) {
        backButton.addEventListener('click', function() {
            // 返回上一页，如果上一页不存在则返回主页面
            if (document.referrer) {
                window.history.back();
            } else {
                // 返回主页面
                window.location.href = '../../Main/Index.html';
            }
        });
    }
    
    // 平滑滚动功能
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    
    // 页面滚动时，改变导航栏样式
    function handleScroll() {
        const header = document.querySelector('.article-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // 初始化功能
    smoothScroll();
    window.addEventListener('scroll', handleScroll);
});