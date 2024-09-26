function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    title = prompt("Enter the Title for the Video:- ");
    cName = prompt("Enter the Channel Name for the Video:- ");
    views = Number(prompt("Enter the views for the Video:- "));
    monthsOld = prompt("Enter how many months old this video is:- ")+"months ago";
    duration = prompt("Enter the Duration for the Video (mm:ss):- ");
    thumbnail = prompt("Enter the link for the thumbnail of the Video:- ");
    let v;
    if (views>999 & views<=999999) {
        views/=1000;
        views = Math.round(views*10) /10 
        v = `${views}K views`
    }
    else if (views>999999 ) {
        views/=1000000;
        views = Math.round(views*10) /10 
        v = `${views}M views`
    }


    document.querySelector(".image").style.backgroundImage = `url(${thumbnail})`
    document.querySelector(".dur").innerText = duration
    document.querySelector(".title").innerText = title
    document.querySelector(".channel").innerText = cName
    document.querySelector(".views").innerText = v
    document.querySelector(".ago").innerText = monthsOld



}

createCard()

