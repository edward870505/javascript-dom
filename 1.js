var shopping = document.getElementById('purchases');
//var items = shopping.getElementsByTagName('*');
var items = document.getElementsByClassName('sale');
for(var i=0,len=items.length;i<len;i++){
    console.log(items[i]);
}