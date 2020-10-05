<script>
var r_text = ["Snow whispering down<br>All day long, Earth has vanished<br>Leaving only sky<br>Joso", "Some poor villages<br>Lack fresh fish or flowers...<br>All can share this moon.<br>Basho", "Oh! That summer moon!<br>It made me go wandering<br>round the pond all night.<br>Basho", "So cold are the waves,<br>The rocking gull can scarcely<br>Fold itself to sleep.<br>Basho", "Moonlit flower-field...<br>Daylight gives it back again<br>To a cotton farm.<br>Basho", "In my small village<br>Even the flies aren't afraid<br>To bite a big man.<br>Issa"];

function doText() {
var i = Math.floor((r_text.length-1)*Math.random())
document.getElementById('poo').innerHTML = r_text[i];
}

var myInterval = setInterval(doText, 5000);
</script>