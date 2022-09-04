let isDarkMode = true;

function switchModes() {
    if (isDarkMode === true) {
      
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02","#f2fbeb");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    } else {
      
        document.documentElement.style.setProperty("--col-02", "#171219");
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDarkMode =true;



    }

}