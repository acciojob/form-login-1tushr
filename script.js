function getFormvalue() {
    //Write your code here
	var fname=document.getElementById("f").value;
	var lname=document.getElementById("l").value;
	alert(fname+" "+lname);
	

}
var button =document.getElementById("button")
button.addEventListener('click', getFormvalue)



