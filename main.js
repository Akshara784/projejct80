var name_of_guests = [];
function submit(){
  var display_guests = [];
for(var a=1;a<5;a++)
{
    var name=document.getElementById("name_"+a).value;
    name_of_guests.push(name);
}
console.log(name_of_guests);
var length_of_guests= name_of_guests.length;
for(var a=0;a<length_of_guests;a++)
{
    display_guests.push("<h4>Name-"+ name_of_guests[a]+"</h4>");
    console.log(display_guests);
}
var remove_commas=display_guests.join("");
console.log(remove_commas);
console.log(display_guests);
document.getElementById("display_without_commas").innerHTML=remove_commas;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sorting(){
  name_of_guests.sort();
  console.log(name_of_guests);
  var display_sorting=[];
  var length_of_guests= name_of_guests.length;
  for(var a=0;a<length_of_guests;a++)
{
  display_sorting.push("<h4>Name-"+ name_of_guests[a]+"</h4>");
  console.log(display_sorting);
}
console.log(display_sorting);
var remove_commas=display_sorting.join("");
console.log(remove_commas);
document.getElementById("display_without_commas").innerHTML=remove_commas;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
