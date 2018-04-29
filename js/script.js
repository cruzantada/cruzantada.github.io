/* Toggle between top navigation bars when the menu button is clicked */
function toggleMenuIcon() {
    var x = document.getElementById("topNavBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
