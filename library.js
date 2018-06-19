//Library organizer for all Media types
//Media Super Class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut === false) {
      this._isCheckedOut = true;
    } else {
      this._isCheckedOut = false;
    }
  }

  getAverageRating() {
    let sum = 0;
    for (var i = 0; i < this._ratings.length; i++) {
      sum += this._ratings[i]
    }
    let avg = Math.floor(sum / this._ratings.length);
    console.log(`The average rating is ${avg}.`);
  }

  addRating(newRating) {
    return this._ratings.push(newRating);
  }

}

// Book sub class
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

}

const testBook = new Book('Test Title', 'Test Author', 100);

//console.log(testBook);

//Movies sub class
class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get director() {
    return this._director;
  }

  get runtime() {
    return this._runtime;
  }

}

const testMovie = new Movie('Test Title', 'Test Director', 90);

//console.log(testMovie);

//CD sub class
class CD extends Media {
  constructor(title, artist ) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  addSong(newSong) {
    this._songs.push(newSong);
  }

}

const testCD = new CD('Test Title', 'Test Artist');







//end
