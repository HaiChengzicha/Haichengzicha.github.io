// 页面初始化

document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const gridBoxes = document.querySelectorAll('.grid-box');
    const placeholderBox = document.querySelector('.placeholder-box');
    const pageTitle = document.querySelector('header h1');
    
    // 将标题字体设置为与welcome欢迎语相同的字体和颜色
    if (pageTitle) {
        pageTitle.style.fontFamily = '"Lucida Handwriting", cursive, sans-serif';
        pageTitle.style.color = 'transparent';
        pageTitle.style.backgroundImage = 'linear-gradient(135deg, #ff6600, #ffcc00)';
        pageTitle.style.backgroundClip = 'text';
        pageTitle.style.webkitBackgroundClip = 'text';
        pageTitle.style.webkitTextFillColor = 'transparent';
    }
    
    // 添加苹果风格的欢迎语功能
    function showWelcomeMessage() {
        // 创建欢迎语元素
        const welcomeElement = document.createElement('div');
        welcomeElement.className = 'welcome-message';
        welcomeElement.textContent = 'Hello';
        
        // 添加样式
        welcomeElement.style.fontSize = '200px';
        welcomeElement.style.fontWeight = '790';
        welcomeElement.style.color = 'transparent';
        welcomeElement.style.backgroundImage = 'linear-gradient(135deg, #ff6600, #ffcc00)';
        welcomeElement.style.backgroundClip = 'text';
        welcomeElement.style.webkitBackgroundClip = 'text';
        welcomeElement.style.webkitTextFillColor = 'transparent';
        welcomeElement.style.opacity = '0';
        welcomeElement.style.transform = 'translateY(20px)';
        welcomeElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        welcomeElement.style.fontFamily = '"Lucida Handwriting", cursive, sans-serif';
        
        // 添加到方框中
        placeholderBox.appendChild(welcomeElement);
        
        // 触发动画
        setTimeout(() => {
            welcomeElement.style.opacity = '1';
            welcomeElement.style.transform = 'translateY(0)';
        }, 100);
        
        // 记录上一次滚动位置，用于判断滚动方向
        let lastScrollY = 0;
        
        // 滚动监听器处理函数
        function handleScroll() {
            // 获取滚动距离
            const scrollY = window.scrollY;
            
            // 设置滚动阈值
            const startDisappearThreshold = 80;
            const fullyDisappearThreshold = 140;
            
            // 判断是向上滚动还是向下滚动
            const isScrollingDown = scrollY > lastScrollY;
            
            // 更新上一次滚动位置
            lastScrollY = scrollY;
            
            // 当向上滚动且滚动距离小于完全消失阈值时，重新显示欢迎语
            if (!isScrollingDown && scrollY <= startDisappearThreshold) {
                welcomeElement.style.opacity = '1';
                welcomeElement.style.transform = 'translateY(0)';
            }
            // 当向下滚动超过开始消失阈值时，开始淡出
            else if (isScrollingDown && scrollY > startDisappearThreshold) {
                if (scrollY >= fullyDisappearThreshold) {
                    // 完全消失
                    welcomeElement.style.opacity = '0';
                    welcomeElement.style.transform = 'translateY(-20px)';
                } else {
                    // 计算消失进度
                    const progress = (scrollY - startDisappearThreshold) / 
                                   (fullyDisappearThreshold - startDisappearThreshold);
                    const opacity = 1 - progress;
                    const translateY = -20 * progress;
                    
                    // 应用渐变效果
                    welcomeElement.style.opacity = opacity.toString();
                    welcomeElement.style.transform = `translateY(${translateY}px)`;
                }
            }
        }
        
        // 添加滚动事件监听
        window.addEventListener('scroll', handleScroll);
        
        // 添加清理函数引用
        welcomeElement._cleanup = () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    
    // 页面加载时显示欢迎语
    showWelcomeMessage();
});