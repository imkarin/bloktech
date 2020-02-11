
  function byTagName(node, tagName) {
let wantedTag = tagName.toUpperCase();

var c = node.children;
var x = [] ;
for(var i =0; i<c.length;i++)
 {
  
  if(c[i].tagName===wantedTag){ // children_tag_name should be in capital, eg. "SPAN"
   x.push(c[i]);
  }
}
    return x
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
