// The lab didn't say to delete this part, but the example image
//we need to match doesn't display these names, so I've hidden them
// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
// document.writeln(arr[i],"<br>");
// }
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.getElementById("username").textContent = user_name;

var webmaps =
[
  ["FEMA National Flood Hazard Layer",
  "https://hazards-fema.maps.arcgis.com/apps/webappviewer/index.html?id=8b0adb51996444d4879338b5529aa9cd",
   "The FEMA National Flood Hazard Layer exists to display flood hazard areas and provide an easy source to view and acquire flood hazard layers to use with GIS applications."],
  ["US Forest Service Webmap",
  "https://experience.arcgis.com/experience/a695e1dbdeab4e8ba5c6ad4fd06a0ba0",
  "The purpose of the USFS web map is to provide visitors to National Forests with an interactive map that can display forest areas and attractions like campgrounds or horse-riding trails."]
];


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

function webmap_table() {
  document.write("<table width='100%'>");

  for (var i = 0; i < webmaps.length; i++) {

    if (i % 2 === 0) {
      document.write("<tr class='even'>");
      document.write("<td>" + webmaps[i][0] + "</td>");
      document.write("<td>" + webmaps[i][1] + "</td>");
      document.write("</tr>");
      document.write("<tr class='even'>");
      document.write("<td colspan='2'><p>" + webmaps[i][2] + "</p></td>");
      document.write("</tr>");
    } else {
      document.write("<tr class='odd'>");
      document.write("<td>" + webmaps[i][0] + "</td>");
      document.write("<td>" + webmaps[i][1] + "</td>");
      document.write("</tr>");
      document.write("<tr class='odd'>");
      document.write("<td colspan='2'><p>" + webmaps[i][2] + "</p></td>");
      document.write("</tr>");
    }
  }

  document.write("</table>");
}
