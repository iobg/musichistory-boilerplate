var songs = [];

songs[songs.length] = "Nevereverland > by nano on the album Nanoir";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Nine point eight > by mili on the album Mag Mell";

function loadSongs(){
var songList = document.getElementById('right');
songList.innerHTML="";
songs.forEach(function(song){
song = song.replace(">", "-");
song = song.replace("*", "");
song = song.replace("@", "");
song = song.replace("(", "");
song = song.replace("!", "");
songList.innerHTML += "<div class='song'>"+song+"</div>";
});
}
loadSongs();

var listButton = document.getElementById("listview");
var addButton = document.getElementById("addview");
var listView=document.getElementById("list");
var addView=document.getElementById("add");


addButton.addEventListener("click",function(){
	listView.classList.add("hidden");
	listView.classList.remove("visible");
	addView.classList.add("visible");
	addView.classList.remove("hidden");
	
	


});
listButton.addEventListener("click",function(){
	addView.classList.add("hidden");
	addView.classList.remove("visible");
	listView.classList.remove("hidden");
	listView.classList.add("visible");
});

var addSongBtn = document.getElementById("addbutton");
addSongBtn.addEventListener("click", function(){
	var songName = document.getElementById("song");
	var artistName = document.getElementById("artist");
	var albumName = document.getElementById("album");
	songs[songs.length] = songName.value + "- by " + artistName.value + " on the album " + albumName.value;
	loadSongs();
});
