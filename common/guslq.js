var sortByProperty = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
};
        
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}
        
function addMediaThumb(mediaObj) {
    var src = "";
    if(mediaObj.type == "youtube"){
        src = "https://img.youtube.com/vi/"+mediaObj.src+"/sddefault.jpg";
    }
    else {
        src = mediaObj.src;
    }
    return "<img src='"+src+"' alt='"+mediaObj.label+"'>";
}
        
function addMedia(mediaObj) {
    if(mediaObj.type == "youtube"){
        var src = "https://www.youtube.com/watch?v="+mediaObj.src;
        return "<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/"+mediaObj.src+"?rel=0' allowfullscreen></iframe></div>";
    }
    else {
        return "<img class='carMedia' src='"+mediaObj.src+"' alt='"+mediaObj.label+"'>";
    }
}

function addYoutube(videoId) {
    return "<div class='embed-responsive embed-responsive-16by9 youtubeEmbed'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/"+videoId+"?rel=0' allowfullscreen></iframe></div>";
}
        
function readMore(moreId) {
    var dots = document.getElementById("moreDots_"+moreId);
    var moreText = document.getElementById("moreText_"+moreId);
    var btnText = document.getElementById("moreBtn_"+moreId);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
        
        
function openMediaModal(modId,carId,mediaId){
    console.log(modId+","+carId+","+mediaId);
    $('#'+modId).modal('show'); 
    $('#'+carId).carousel(parseInt(mediaId));
}

function monthName (monthNum) {
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return months[monthNum-1];
}