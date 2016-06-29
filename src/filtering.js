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