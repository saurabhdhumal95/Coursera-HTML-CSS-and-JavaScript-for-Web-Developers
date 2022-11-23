var x= "in global";
console.log("global: x="+x);


var a=function(){
	var x="inside a";
	console.log("a: x="+x);
	function b (){
	console.log("b : x="+x)
}
	b();
}

a();