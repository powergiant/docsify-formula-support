function jump(elementId, page = ''){
    if (page){
        jump_out_page(elementId, page);
    }
    else{
        jump_in_page(elementId);
    }
};

function jump_in_page(elementId) {
    // 获取需要高亮的元素
    var element = document.getElementById(elementId);
    
    // 将元素高亮
    element.classList.add('highlight');

    // 将页面滚动到元素的位置
    element.scrollIntoView({ behavior: 'auto', block: 'center'});

    // 一段时间后移除高亮
    setTimeout(function() {
        element.classList.remove('highlight');
    }, 400); // 这里设置的是0.4秒后移除高亮，你可以根据需求调整这个时间
};

function jump_out_page(elementId, page){
    if (page){
        localStorage.setItem('scroll id', elementId);
        if (page.endsWith("/")) {
            window.location.href = '/#/./' + page.slice(0,-1);// + '?id=' + elementId;
        } else {
            window.location.href = '/#/./' + page;// + '?id=' + elementId;
        }
        window.location.reload();
    };
};

(function () {
    var scrollPlugin = function (hook) {
        hook.ready(function(){
            var elementId = localStorage.getItem('scroll id');
            localStorage.removeItem('scroll id');
            var targetElement = document.getElementById(elementId);

            if (targetElement) {
            // 将元素高亮
            targetElement.classList.add('highlight');

            // 将页面滚动到元素的位置
            targetElement.scrollIntoView({
                behavior: "auto",
                block: "center"
            });

            // 一段时间后移除高亮
            setTimeout(function() {
                targetElement.classList.remove('highlight');
            }, 800); // 这里设置的是0.8秒后移除高亮，你可以根据需求调整这个时间
            }
        });        
      };
$docsify = $docsify || {};
$docsify.plugins = [].concat($docsify.plugins || [], scrollPlugin);
})();



// function scrollToHighlight(elementId) {
//     // 获取需要高亮的元素
//     var element = document.getElementById(elementId);
    
//     // 将元素高亮
//     element.classList.add('highlight');

//     // 将页面滚动到元素的位置
//     element.scrollIntoView({ behavior: 'auto', block: 'center'});

//     // 一段时间后移除高亮
//     setTimeout(function() {
//         element.classList.remove('highlight');
//     }, 400); // 这里设置的是0.4秒后移除高亮，你可以根据需求调整这个时间
// }

// window.addEventListener("hashchange", function() {
//     url = location.hash.slice(1);
//     var id = url.split("=")[1];

//     var targetElement = document.getElementById(id);

//     if (targetElement) {
//     // 将元素高亮
//     targetElement.classList.add('highlight');

//     // 将页面滚动到元素的位置
//     targetElement.scrollIntoView({
//         behavior: "auto",
//         block: "center"
//     });

//     var event = new Event('myscroll');

//     window.dispatchEvent(event);

//     // 一段时间后移除高亮
//     setTimeout(function() {
//         targetElement.classList.remove('highlight');
//     }, 400); // 这里设置的是0.4秒后移除高亮，你可以根据需求调整这个时间
//     }
// });


