const listQuotes = ['“Every child is an artist; the problem is staying an artist when you grow up” By Pablo Picasso', '“Every artist was first an amateur.” By Ralph Waldo Emerson', '“Art is a collaboration between God and the artist, and the less the artist does the better.” By Andre Gide', '“I found I could say things with color and shapes that I could not say any other way things I had no words for.” By Georgia Keeffe', 'Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.” By Scott Adams', '“Whether you succeed or not is irrelevant, there is no such thing.  Making your unknown known is the important thing.” By Georgia Keeffe', '“If everything was perfect you would never learn and you would never grow.” - Beyonce', '“One thing I have learned is that I am not the owner of my talent, I am the manager of it.” - Madonna', '“There are always going to be bad things. But you can write it down and make a song out of it.” -Billie Eilish', '“One can have no smaller or greater mastery than mastery of oneself.” -Leonardo da Vinci', '“Art is a lie that makes us realize truth.”  -Pablo Picasso', '“The artist is world is limitless. It can be found anywhere, far from where he lives or a few feet away. It is always on his doorstep.” -Paul Strand', '“An artist is not paid for his labor but for his vision.” -James McNeill Whistler', '“Learn the rules like a pro so you can break them like an artist.” -Pablo Picasso', '“I invent nothing, I rediscover.” -Auguste Rodin']

var arrLen = listQuotes.length;
function getRandomItem() {

    const arrNum =Math.floor(Math.random() * arrLen);
 
    const item = listQuotes[arrNum];

    const display = document.getElementById
    ("Result")
    display.innerHTML = item
}
function Reset() {
    Result.innerHTML= '';
}

