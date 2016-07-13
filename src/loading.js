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