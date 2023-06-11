function sendmail(){
    window.location = "mailto:feedback@thevastmediaproductions.com";
}

function donate(){
    a = document.getElementById('showhide');

    if(a.style.display === "block"){
        a.style.display = "none";
    }else {
        a.style.display = "block";
    }
}