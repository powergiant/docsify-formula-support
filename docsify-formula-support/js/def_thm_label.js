function definition_front_matter(elements_definition){
    for (var i = 0; i < elements_definition.length; i++){
        if (elements_definition[i].id){
            elements_definition[i].innerHTML = '<i style="color: gray;"> [' + elements_definition[i].id + '] </i>' + elements_definition[i].innerHTML;
        }
    }
}


function example_front_matter(elements_example){
    for (var i = 0; i < elements_example.length; i++){
        if (elements_example[i].id){
            elements_example[i].innerHTML = '<i style="color: gray;"> [' + elements_example[i].id + '] </i>' + elements_example[i].innerHTML;
        }
    }
}


(function () {
    var labelPlugin = function (hook) {
        hook.doneEach(function(){
            var elements_definition = document.getElementsByClassName('definition');
            definition_front_matter(elements_definition);

            var elements_example = document.getElementsByClassName('example');
            example_front_matter(elements_example);
        });        
      };
$docsify = $docsify || {};
$docsify.plugins = [].concat($docsify.plugins || [], labelPlugin);
})();
