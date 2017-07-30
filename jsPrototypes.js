class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
}

class Playlist{
  constructor(name){
    this.name = name;
    this.tracks = [];
  }
  overallRating(){
    let sumRating = 0;
    this.tracks.forEach(function(track){
      sumRating += track.rating;
    });
    let averageRating = sumRating / this.tracks.length;
    return averageRating;
  }

  totalDuration(){
    let totalTime = 0;
    this.tracks.forEach(function(track){
      totalTime += track.length;
    });
    return totalTime;
  }
}

class Track{
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const track1 = new Track("test1" , 5, 10);
const track2 = new Track("test2" , 4, 5);
const track3 = new Track("test3" , 3, 3);
const track4 = new Track("test4" , 2, 2);

const playlist1 = new Playlist("First");
const playlist2 = new Playlist("Second");

const theLibrary = new Library("Experiments", "The creator");

playlist1.tracks.push(track3);
playlist1.tracks.push(track4);

playlist2.tracks.push(track1);
playlist2.tracks.push(track2);

console.log(playlist1, playlist2);

theLibrary.playlists.push(playlist1);
theLibrary.playlists.push(playlist2);

console.log(JSON.stringify(theLibrary,null,1));

console.log(playlist1.overallRating());
console.log(playlist2.totalDuration());
