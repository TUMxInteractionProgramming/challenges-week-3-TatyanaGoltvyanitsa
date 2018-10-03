"use strict";

// console.log('working');      ##STEP 1 TEST TO SEE IF JS IS WORKING

//Function changes star in chat app bar to empty; called by switchChannel() function
function emptyStar() {
    console.log('Changing star');
    $('#titleStar').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

//Function changes channel name in chat app bar when channel is clicked in channel list
//Also: Adds and removes class .selected to indicate whether or not that channel is active
function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName); //console test for validation of changing channels
    emptyStar(); //calling this function to change star icon in chat app bar
    document.getElementById('channelTitle').innerHTML = channelName;
    document.getElementById('titleAuthor').innerHTML = '<a href="http://w3w.co/upgrading.never.helps" target="_blank">upgrading.never.helps</a>';
    $("#channelList>li").removeClass("selected");
    $("li:contains(" + channelName + ")").addClass("selected");
}

//Function fills the star in the chat app bar when clicked
function filledStar() {
    console.log('Filling the star');
    $('#titleStar').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

//Function adds and removes .selected class of tabs on click
function selectTab(tabId) {
    console.log('Toggling tab selections');
    console.log(tabId); //checking to see if correct tab button is being selected
    $("#tab-bar>button").removeClass("selected"); //removes selected class only from buttons with #tab-bar as parent
    $("#"+tabId).addClass("selected"); //adds selected class to clicked tab
}

//Function toggles visibility of emojis when icon is clicked
function toggleEmojis() {
    $("#emojis").toggle();
}