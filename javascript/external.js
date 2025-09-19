// The lab didn't say to delete this part, but the example image
//we need to match doesn't display these names, so I've hidden them
// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
// document.writeln(arr[i],"<br>");
// }

user_name = window.prompt("Please enter your name", "Type your name here");
document.getElementById("username").textContent = user_name;
