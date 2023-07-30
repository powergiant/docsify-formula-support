function set_front_matter(node, counters){
    if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.nodeName.match(/H[1-3]/)){
            let index = parseInt(node.nodeName[1]);
            if (index === 1){
                h1_front_matter(node, counters);
            }
            else if (index === 2){
                counters.h2_num++;
                counters.h3_num = 0;
                if (counters.chap_num == null){
                    counters.def_thm_num = 0;
                }
                h2_front_matter(node, counters);
            }
            else if (index === 3){
                counters.h3_num++;
                h3_front_matter(node, counters);
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
        else if (node.classList.contains('theorem')){
            counters.def_thm_num++;
            theorem_front_matter(node, counters);
        }
        else if (node.classList.contains('remark')){
            remark_front_matter(node, counters);
        }
        else if (node.classList.contains('lemma')){
            counters.def_thm_num++;
            lemma_front_matter(node, counters);
        }
        else if (node.classList.contains('proposition')){
            counters.def_thm_num++;
            proposition_front_matter(node, counters);
        }
        else if (node.classList.contains('equation')){
            counters.eq_num++;
            equation_front_matter(node, counters);
        }
        else if (node.classList.contains('sidebar-nav')){
            div_match_and_replace(node);
        }
    }
    node.childNodes.forEach((child) => set_front_matter(child, counters));
}

function h1_front_matter(element_h1, counters){
    var name;
    if (counters.chap_num){
        name = counters.chap_num;
        element_h1.setAttribute('name', 'Section ' + name);
    }

    let ref_label = div_match_and_replace(element_h1);
    if (ref_label){
        element_h1.setAttribute('ref_label',  ref_label);
    }
}


function h2_front_matter(element_h2, counters){
    var name;
    if (counters.chap_num){
        name = counters.chap_num + '.' + counters.h2_num;
    }
    else{
        name = counters.h2_num;
    }
    element_h2.textContent = name + '. ' + element_h2.textContent;
    element_h2.setAttribute('name', 'Section ' + name);

    let ref_label = div_match_and_replace(element_h2);
    if (ref_label){
        element_h2.setAttribute('ref_label', ref_label);
    }
}

function h3_front_matter(element_h3, counters){
    var name;
    if (counters.chap_num){
        name = counters.chap_num + '.' + counters.h2_num + '.' + counters.h3_num;
    }
    else{
        name = counters.h2_num + '.' + counters.h3_num;
    }
    element_h3.textContent = name + '. ' + element_h3.textContent;
    element_h3.setAttribute('name', 'Section ' + name);

    let ref_label = div_match_and_replace(element_h3);
    if (ref_label){
        element_h3.setAttribute('ref_label', ref_label);
    }
}

function div_match_and_replace(element_h){
    let html = element_h.innerHTML;
    let match_result = html.match(/\[\s*ref_label\s*=\s*["|'](.*?)["|']\s*\]/);
    var ref_label = null;

    if (match_result){
        ref_label = match_result[1];
        element_h.innerHTML = html.replace(/\[\s*ref_label\s*=\s*["|'](.*?)["|']\s*\]/g, '');
    }
    return ref_label;
}

function sketch_calcuate(sketch_text){
    if(sketch_text){
        return '<i style="color: gray;"> [' + sketch_text + '] </i>';
    }
    else{
        return '';
    }
}

function definition_front_matter(element_def, counters){
    var name, label, sketch;
    if (counters.chap_num){
        name = 'Definition ' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_def.getAttribute('sketch'));
    }
    else{
        name = 'Definition ' + counters.h2_num + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_def.getAttribute('sketch'));
    }
    element_def.innerHTML = label + sketch + element_def.innerHTML;
    element_def.setAttribute('name', name);
}


function example_front_matter(element_example, counters){
    var name, label, sketch;
    if (counters.chap_num){
        name = 'Example ' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_example.getAttribute('sketch'));
    }
    else{
        name = 'Example ' + counters.h2_num + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_example.getAttribute('sketch'));
    }
    element_example.innerHTML = label + sketch + element_example.innerHTML;
    element_example.setAttribute('name', name);
}

function theorem_front_matter(element_theorem, counters){
    var name, label, sketch;
    if (counters.chap_num){
        name = 'Theorem ' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_theorem.getAttribute('sketch'));
    }
    else{
        name = 'Theorem ' + counters.h2_num + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_theorem.getAttribute('sketch'));
    }
    element_theorem.innerHTML = label + sketch + element_theorem.innerHTML;
    element_theorem.setAttribute('name', name);
}

function lemma_front_matter(element_lemma, counters){
    var name, label, sketch;
    if (counters.chap_num){
        name = 'Lemma ' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_lemma.getAttribute('sketch'));
    }
    else{
        name = 'Lemma ' + counters.h2_num + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_lemma.getAttribute('sketch'));
    }
    element_lemma.innerHTML = label + sketch + element_lemma.innerHTML;
    element_lemma.setAttribute('name', name);
}

function proposition_front_matter(element_proposition, counters){
    var name, label, sketch;
    if (counters.chap_num){
        name = 'Proposition ' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_proposition.getAttribute('sketch'));
    }
    else{
        name = 'Proposition ' + counters.h2_num + '.' + counters.def_thm_num;
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_proposition.getAttribute('sketch'));
    }
    element_proposition.innerHTML = label + sketch + element_proposition.innerHTML;
    element_proposition.setAttribute('name', name);
}

function remark_front_matter(element_remark, counters){
    var name, label, sketch;
    if (counters.chap_num){
        name = 'Remark';
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_remark.getAttribute('sketch'));
    }
    else{
        name = 'Remark';
        label = '<b>' + name + '. </b>';
        sketch = sketch_calcuate(element_remark.getAttribute('sketch'));
    }
    element_remark.innerHTML = label + sketch + element_remark.innerHTML;
    element_remark.setAttribute('name', name);
}

function equation_front_matter(element_equation, counters){
    var name;
    if (counters.chap_num){
        name = '(' + counters.chap_num /*+ '.' + counters.h2_num*/ + '.' + counters.eq_num + ')';
    }
    else{
        name = '(' + counters.h2_num + '.' + counters.eq_num + ')';
    }
    element_equation.setAttribute('name', name);
}

function reference_front_matter(element_ref){
    ref_label = element_ref.getAttribute('ref');
    if (ref_label){
        if (element_ref.innerHTML.match(/^\s*$/)!==null){
            element = document.querySelector('[ref_label="' + ref_label + '"]');
            element_ref.innerHTML = element.getAttribute('name');
        } 
        onclick_str =  `jump('${ref_label}', '')`;
        element_ref.setAttribute("onclick", onclick_str);
    }
}

function get_chapter_number(heading_element){
    var chapter_number;
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
        // hook.afterEach(function(html){
        //     var elements = document.getElementsByTagName('h3');
        //     for (let i = 0; i < elements.length; i++) {
        //         let element = elements[i];
        //         let ref_label = div_match_and_replace(element);
        //         if (ref_label){
        //             element.setAttribute('ref_label', ref_label);
        //         }
        //     }
        //     return html;
        // });

        hook.doneEach(function(){
        
        let mainContent = document.querySelector('section.content');
        var mainHeading = mainContent.querySelector('h1');
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

        var references = document.getElementsByClassName('reference');
        for (let i = 0; i < references.length; i++) {
            let reference = references[i];
            reference_front_matter(reference);
          }
        });        
      };
$docsify = $docsify || {};
$docsify.plugins = [].concat($docsify.plugins || [], labelPlugin);
})();
