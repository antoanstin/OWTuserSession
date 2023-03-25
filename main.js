let live= parseInt(prompt("enter the time"));
var actual= new Date();
actual.setHours(live);
var time=actual.getHours();
if(6<=time&&time<12)
{
	console.log("morning");
}
else if(12<=time&&time<18)
{
	console.log("afternoon");
}
else{
	console.log("night");
}