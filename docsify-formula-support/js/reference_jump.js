function jump(element_ref_label, page = ''){
    if (page){
        jump_out_page(element_ref_label, page);
    }
    else{
        jump_in_page(element_ref_label);
    }
};

function jump_in_page(element_ref_label) {
    // 获取需要高亮的元素
    var element = document.querySelector('[ref_label='+ '"' + element_ref_label + '"' +']');
    if (element == null){
        element = document.querySelector('[name='+ '"' + element_ref_label + '"' +']');
    }
    
    // 将元素高亮
    element.classList.add('highlight');

    // 将页面滚动到元素的位置
    element.scrollIntoView({ behavior: 'auto', block: 'center'});

    // 一段时间后移除高亮
    setTimeout(function() {
        element.classList.remove('highlight');
    }, 400); // 这里设置的是0.4秒后移除高亮，你可以根据需求调整这个时间
};

function jump_out_page(element_ref_label, page){
    if (page){
        localStorage.setItem('scroll id', element_ref_label);
        if (page.endsWith("/")) {
            window.location.href = '/#/./' + page.slice(0,-1);// + '?id=' + element_ref_label;
        } else {
            window.location.href = '/#/./' + page;// + '?id=' + element_ref_label;
        }
        // window.location.reload();
    };
};

(function () {
    var scrollPlugin = function (hook) {
        hook.doneEach(function(){
            var element_ref_label = localStorage.getItem('scroll id');
            localStorage.removeItem('scroll id');
            
            var targetElement = document.querySelector('[ref_label='+ '"' + element_ref_label + '"' +']');
            if (targetElement == null){
                targetElement = document.querySelector('[name='+ '"' + element_ref_label + '"' +']');
            }

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
            }, 600); // 这里设置的是0.8秒后移除高亮，你可以根据需求调整这个时间
            }
        });        
      };
$docsify = $docsify || {};
$docsify.plugins = [].concat($docsify.plugins || [], scrollPlugin);
})();

// 遍历整个站点，进行reference存储，和check，set ref_ready = True
// 每个网页load时要加载reference
// 写回退功能