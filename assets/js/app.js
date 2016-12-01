// sanity check
console.log("app.js linked.");

var elementEdit = document.getElementById("most-recent");

function printPyramid(length){
    var x = ''
    for (j = 0;j<length-1;j++){
        x+=' '
    }
    // var element = document.getElementsByClassName('most-recent')
    for (var i = 0; i<length; i++){
        x = x.slice(1)
        x += ' *';
        var node = document.createElement('div');
        var textNode = document.createTextNode(x);
        node.appendChild(textNode);
        console.log(node);
        console.log(elementEdit);
        // elementEdit += node
        elementEdit.appendChild(node);
        console.log(x);
    }
}

printPyramid(10)
