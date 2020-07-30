let graph = document.getElementsByClassName('graph').item(0);
let arr = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
const green = '#12fb12';
const yelow = '#ebfb12';
const red = '#fb1212';
arr.forEach(function(item){
if(item<=5){
    graph.insertAdjacentHTML("beforeEnd",'<div class="graph_item" style="height:'+item+'px;background: '+green+';"></div>')
}
if (item > 5&&item<=10) {
    graph.insertAdjacentHTML("beforeEnd",'<div class="graph_item" style="height:'+item+'px;background: '+yelow+';"></div>')

}
if (item >10) {
    graph.insertAdjacentHTML("beforeEnd",'<div class="graph_item" style="height:'+item+'px;background: '+red+';"></div>')
}
})