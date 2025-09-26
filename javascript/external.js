// The lab didn't say to delete this part, but the example image
//we need to match doesn't display these names, so I've hidden them
// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
// document.writeln(arr[i],"<br>");
// }
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.getElementById("username").textContent = user_name;

function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
document.write(welcome());
