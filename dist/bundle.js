(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var loading = require("./loading");
var displaying=require("./displaying");
var filtering=require("./filtering");
displaying();


},{"./displaying":2,"./filtering":3,"./loading":4}],2:[function(require,module,exports){
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

},{"./loading":4}],3:[function(require,module,exports){
"use strict";
function filtering(){
var artistSelect=$("#Artists");
var albumSelect=$("#Albums");

var loaded=require("./loading");
var albums=$(".album");
var artists=$(".artist");
artistSelect.change(filterArtist);
albumSelect.change(filterAlbum);



	function filterArtist(){
		albumSelect.get(0).selectedIndex=0;
		for(var i=0;i<artists.length;i++){
			if(artists[i].innerText===this.value){
				$(artists[i]).parent().show();
			}
			else{
				$(artists[i]).parent().hide();
			}
		}
		
	}

	
	function filterAlbum(){
		artistSelect.get(0).selectedIndex=0;
		for(var i=0;i<albums.length;i++){
			if(albums[i].innerText===this.value){
				$(albums[i]).parent().show();
			}
			else{
				$(albums[i]).parent().hide();
			}
		}
	}

} 

module.exports=filtering;
},{"./loading":4}],4:[function(require,module,exports){
"use strict";
var filtering=require("./filtering");
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
	var artistSelect=$("#Artists");
	var albumSelect=$("#Albums");
	var songList =$('#right');
	var artists="<option selected='selected' disabled='disabled'>Artists</option>";
	var albums="<option selected='selected' disabled='disabled'>Albums</option>";
	songList.html("");
	var songDOM="";
	songs.forEach(function(song){
	songDOM += "<div class='song'>";
	songDOM += "<div class='title'>"+ song.title +"</div>";
	songDOM += "<div class='artist'>"+ song.artist + "</div>";
	songDOM += "<div class='album'>"+song.album +"</div>";
	songDOM += "<input type='button' class='deletebtn' value='delete'>";
	songDOM += "</div>";
	artists+=`<option value="${song.artist}">${song.artist}</option>`;
	albums+=`<option value="${song.album}">${song.album}</option>`;
	});
	artistSelect.html(artists);
	albumSelect.html(albums);
	songDOM += `<input type='button' id='more' value='more songs!'${disabled}>`;
	songList.html(songDOM);

	$(".deletebtn").click(function(){
		$(this).parent().remove();

		});

	var moreButton=$("#more");
	moreButton.click(moreSongs);
	filtering();

	}

module.exports={loadSongs,writeSongs,moreSongs,songs};
},{"./filtering":3}]},{},[1])


//# sourceMappingURL=bundle.js.map
