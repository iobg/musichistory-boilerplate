"use strict";
var loaded=require("./loading");
function displayBtns(){

var listButton = $("#listview");
var addButton = $("#addview");
var listView=$("#list");
var addView=$("#add");

addButton.click(()=>{
	listView.hide();
	addView.show();
	
});
listButton.click(()=>{
	addView.hide();
	listView.show();
	
});


var addSongBtn = $("#addbutton");
	addSongBtn.click(()=>{
		var songName = $("#song");
		var artistName = $("#artist");
		var albumName = $("#album");
		loaded.songs[loaded.songs.length] = 
			{title: songName[0].value, artist: artistName[0].value, album: albumName[0].value};
		loaded.loadSongs();
});
}
module.exports=displayBtns;
