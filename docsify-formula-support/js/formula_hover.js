
// hover equation gives label

// hover reference gives the content

function hover(hover_id, formula_id){
    var hoverElement = document.getElementById(hover_id);
    var formula = document.getElementById(formula_id);

    // 创建提示框元素
    var tooltip = document.createElement('div');
    tooltip.setAttribute('id', 'tooltip');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#fff';
    tooltip.style.border = '1px solid #ccc';
    tooltip.style.padding = '5px';
    tooltip.style.display = 'none';
    tooltip.style.zIndex =  9999; /* 提高层级，确保覆盖其他元素 */

    // 插入提示框元素到body中
    document.body.appendChild(tooltip);

    // 鼠标悬停事件处理函数
    function showTooltip() {
        tooltip.textContent = formula.textContent;
        tooltip.style.display = 'block';
    }

    // 鼠标离开事件处理函数
    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    hoverElement.addEventListener('mouseover', showTooltip);
    hoverElement.addEventListener('mouseout', hideTooltip);
};