
var muaji =prompt("Ne cilin muaj ndodhemi","");
if (muaji==="dhjetor"){
  document.write("<p>E sakte</p>");
  document.body.style.backgroundColor="green"
}
else if (muaji==="nentor"){
	document.write("<p>Shume afer pergjgjes se sakte!</p>");
    document.body.style.backgroundColor="orange";
}
else{
	document.write("<p>Jo e sakte!</p>");
    document.body.style.backgroundColor="red";
}
