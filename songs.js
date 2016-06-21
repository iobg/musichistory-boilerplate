"use strict";
var songs=[];
var disabled="";
$.ajax({
	url : "songs.json",
	success: writeSongs
});
function moreSongs(){
	disabled="disabled";

	$.ajax({
	url: "songs2.json",
	success: writeSongs
	});
}


function writeSongs(songFile){
	songFile.songs.forEach(function(song){
		songs[songs.length]=song;
	});
	loadSongs();
}
		
	
function loadSongs(){
var songList =$('#right');
songList.html("");
var songDOM="";
songs.forEach(function(song){
songDOM += "<div class='song'>";
songDOM += "<div class='title'>"+ song.title +"</div>";
songDOM += "<div class='artist'>"+ song.artist + "</div>";
songDOM += "<div class='album'>"+song.album +"</div>";
songDOM += "<input type='button' class='deletebtn' value='delete'>";
songDOM += "</div>";
});

songDOM += `<input type='button' id='more' value='more songs!'${disabled}>`;
songList.html(songDOM);

$(".deletebtn").click(function(){
	$(this).parent().remove();

	});

var moreButton=$("#more");
moreButton.click(moreSongs);

}
(()=>{
var listButton = $("#listview");
var addButton = $("#addview");
var listView=$("#list");
var addView=$("#add");


addButton.click(function(){
	listView.show();
	addView.hide();
	


});
listButton.click(function(){
	addView.show();
	listView.hide();
	
});
})();


var addSongBtn = $("#addbutton");
	addSongBtn.click(()=>{
		var songName = $("#song");
		var artistName = $("#artist");
		var albumName = $("#album");
		songs[songs.length] = {title: songName[0].value, artist: artistName[0].value, album: albumName[0].value};
		loadSongs();
});
