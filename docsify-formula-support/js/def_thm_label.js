function set_front_matter(node, counters){
    if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.nodeName.match(/H[2-3]/)){
            let index = parseInt(node.nodeName[1]);
            if (index === 2){
                counters.h2_num++;
                counters.h3_num = 0;
                if (counters.chap_num == null){
                    counters.def_thm_num = 0;
                }
                h2_fronet_matter(node, counters);
            }
            else if (index === 3){
                counters.h3_num++;
                h3_fronet_matter(node, counters);
            }
        }
        else if (node.classList.contains('definition')) {
            counters.def_thm_num++;
            definition_front_matter(node, counters);
        }
        else if (node.classList.contains('example')){
            counters.def_thm_num++;
            example_front_matter(node, counters);
        }
    }
    node.childNodes.forEach((child) => set_front_matter(child, counters));
}



function h2_fronet_matter(element_h2, counters){
    if (counters.chap_num){
        element_h2.textContent = counters.chap_num + '.' + counters.h2_num  + '. ' + element_h2.textContent;
    }
    else{
        element_h2.textContent = counters.h2_num + '. ' + element_h2.textContent;
    }
}

function h3_fronet_matter(element_h3, counters){
    if (counters.chap_num){
        element_h3.textContent = counters.chap_num + '.' + counters.h2_num + '.' + counters.h3_num + '. ' + element_h3.textContent;
    }
    else{
        element_h3.textContent = counters.h2_num + '.' + counters.h3_num + '. ' + element_h3.textContent;
    }
}



function definition_front_matter(element_def, counters){
    if (counters.chap_num){
        label = '<b> Definition ' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.def_thm_num + '. </b>';
        sketch = '<i style="color: gray;"> [' + element_def.id + '] </i>';
        element_def.innerHTML = label + sketch + element_def.innerHTML;
    }
    else{
        label = '<b> Definition ' + counters.h2_num + '.' + counters.def_thm_num + '. </b>';
        sketch = '<i style="color: gray;"> [' + element_def.id + '] </i>';
        element_def.innerHTML = label + sketch + element_def.innerHTML;
    }
}


function example_front_matter(element_example, counters){
    if (counters.chap_num){
        label = '<b> Example ' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.def_thm_num + '. </b>';
        sketch = '<i style="color: gray;"> [' + element_example.id + '] </i>';
        element_example.innerHTML = label + sketch + element_example.innerHTML;
    }
    else{
        label = '<b> Example ' + counters.h2_num + '.' + counters.def_thm_num + '. </b>';
        sketch = '<i style="color: gray;"> [' + element_example.id + '] </i>';
        element_example.innerHTML = label + sketch + element_example.innerHTML;
    }
}



// function definition_front_matter(elements_definition){
//     for (var i = 0; i < elements_definition.length; i++){
//         if (elements_definition[i].id){
//             elements_definition[i].innerHTML = '<i style="color: gray;"> [' + elements_definition[i].id + '] </i>' + elements_definition[i].innerHTML;
//         }
//     }
// }


// function example_front_matter(elements_example){
//     for (var i = 0; i < elements_example.length; i++){
//         if (elements_example[i].id){
//             elements_example[i].innerHTML = '<i style="color: gray;"> [' + elements_example[i].id + '] </i>' + elements_example[i].innerHTML;
//         }
//     }
// }

function get_chapter_number(heading_element){
    var match_result = heading_element.textContent.match(/^(\d+)\.(.*?)$/);
    if (match_result){
        chapter_number = parseInt(match_result[1])
        return chapter_number
    }
    else{
        return null;
    }
}

(function () {
    var labelPlugin = function (hook) {
        hook.doneEach(function(){
            var mainHeading = document.querySelector('h1');
            var chap_num = get_chapter_number(mainHeading);
            
            let h2_num = 0;
            let h3_num = 0;
            let def_thm_num = 0;
            let eq_num = 0;
            let counters = {
                chap_num: chap_num,
                h2_num: h2_num,
                h3_num: h3_num,
                def_thm_num: def_thm_num,
                eq_num: eq_num
              };
            set_front_matter(document.body, counters);
            // var elements_definition = document.getElementsByClassName('definition');
            // definition_front_matter(elements_definition);

            // var elements_example = document.getElementsByClassName('example');
            // example_front_matter(elements_example);
        });        
      };
$docsify = $docsify || {};
$docsify.plugins = [].concat($docsify.plugins || [], labelPlugin);
})();
