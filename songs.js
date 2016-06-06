var songs;
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", writeSongs);
myRequest.open("GET", "songs.json");
myRequest.send();
var pressed=false;
function writeSongs(){

var songFile = JSON.parse(event.target.responseText);
if(songs === undefined){
songs = songFile.songs;
loadSongs();
}
else{
	// if(pressed ===false){÷
	songFile.songs.forEach(function(song){
		songs[songs.length]=song;

	});
	loadSongs();
	pressed =true;

}
}



function moreSongs(){
	myRequest.open("GET", "songs2.json");
	myRequest.send();
}



function loadSongs(){
var songList = document.getElementById('right');
var songDOM="";
songList.innerHTML="";
songs.forEach(function(song){
songDOM += "<div class='song'>";
songDOM += "<div class='title'>"+ song.title +"</div>";
songDOM += "<div class='artist'>"+ song.artist + "</div>";
songDOM += "<div class='album'>"+song.album +"</div>";
songDOM += "<input type='button' class='deletebtn' value='delete'>";
songDOM += "</div>";
});



songDOM += "<input type='button' id='more' value='more songs!'>";
songList.innerHTML=songDOM;
var allsongs = document.getElementsByClassName("song");
console.log(allsongs.length);
for(i=0;i<allsongs.length;i++){
	console.log(" ");
	allsongs[i].addEventListener("click", function(){
		if(event.target.value=="delete"){
			
			event.currentTarget.innerHTML="";
		}
		
		
		console.log(event.target);
	});

}
var moreButton= document.getElementById("more");
moreButton.addEventListener("click", moreSongs);
}

var buttonListeners =function(){
var listButton = document.getElementById("listview");
var addButton = document.getElementById("addview");
var listView=document.getElementById("list");
var addView=document.getElementById("add");


addButton.addEventListener("click",function(){
	listView.classList.add("hidden");
	listView.classList.remove("visible");
	addView.classList.add("visible");
	addView.classList.remove("hidden");
	
function deleteSong(){
	console.log(event);
}


});
listButton.addEventListener("click",function(){
	addView.classList.add("hidden");
	addView.classList.remove("visible");
	listView.classList.remove("hidden");
	listView.classList.add("visible");
});
}();



var addSongBtn = document.getElementById("addbutton");
addSongBtn.addEventListener("click", function(){
	var songName = document.getElementById("song");
	var artistName = document.getElementById("artist");
	var albumName = document.getElementById("album");
	songs[songs.length] = {title: songName.value, artist: artistName.value, album: albumName.value};
	loadSongs();
});
