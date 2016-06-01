var songs = [];

songs[songs.length] = "Nevereverland > by nano on the album Nanoir";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Nine point eight > by mili on the album Mag Mell";

songs.forEach(function(song){
song = song.replace(">", "-");
song = song.replace("*", "");
song = song.replace("@", "");
song = song.replace("(", "");
song = song.replace("!", "");
document.getElementById('right').innerHTML += "<div class='song'>"+song+"</div>";
console.log(song);
});

