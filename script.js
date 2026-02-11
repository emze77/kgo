/* || Movie Data */

const MOVIES = [
  {
    title: "Der Wert Des Menschen",
    director: "Stéphane Brizé",
    announcement: "Eröffnung: Unsre Leben",
    date: "2026-03-07",
    dateAsText: "Samstag 7. März '26", // Samstag, 18. Oktober, ab 19 Uhr
    img: "./assets/img/2025/01_wert-des-menschen_blackless.png",
    location: "Die Kometin", //  Rechbauerkino
    locationLink: "https://kometin.at", // https://www.filmzentrum.com/
    description:
      "Ein Film, der uns sprachlos zurückließ. Ohne Kitsch und Pathos zeigt Stepháne Brizé eindrücklich, was es in unserer modernen westlichen Gesellschaft bedeutet, Teil der lohnabhängigen Klasse zu sein. Was gezeigt wird ist das, woraus wir einen Ausweg suchen.",
    adress: "Rechbauerstraße 19a/4", // Rechbauerstraße 6
    adressMapLink: "https://www.openstreetmap.org/node/11272595629", // https://www.openstreetmap.org/node/6450145137
  },

  // {
  //   title: "The Promised Land",
  //   director: "Andrzej Wajda",
  //   announcement: "4. Film: Der Marathon",
  //   date: "2025-11-29",
  //   dateAsText: "Datum: to be announced", // Samstag, 29. November, ab 19 Uhr
  //   img: "./assets/img/2025/04_the-promised-land_blackless.png",
  //   location: "Die Kometin",
  //   locationLink: "https://kometin.at",
  //   description:
  //     "Gibt es eigentlich Filme marxistischer Orientierung, die nicht aus der Perspektive der arbeitenden Klasse erzählt werden? Was wir gefunden haben, war ein polnisches Epos aus den 70ern, in welchen drei Söhne des bonzigen Milieus ihre eigene Fabrik gründen wollen. Ein Film, der so spröde wie tief und so irritierend wie aufschlussreich ist. Bei dem Film gibt es mehr als eine Pause und wer ihn durchhält, bekommt einen Schnaps!",
  //   adress: "Rechbauerstraße 19a",
  //   adressMapLink: "https://www.openstreetmap.org/node/11272595629",
  // },

  {
    title: "The Organizer",
    director: "Mario Monicelli",
    announcement: "2. Film: Der Klassiker",
    date: "2026-03-14",
    dateAsText: "Samstag, 14. März '26", // Samstag, 1. November, ab 19 Uhr
    img: "./assets/img/2025/02_the-organizer_blackless.png",
    location: "Die Kometin",
    locationLink: "https://kometin.at",
    description:
      "Ein revolutionärer Professor auf der Flucht trifft auf die streikbereite Belegschaft einer Fabrik. Während der eine endlich die Gelegenheit sieht, genau den Klassenkampf zu führen, den er sich immer erträumte, geht es für die anderen um das nackte Überleben. Was ist die Rolle von Intellektuellen im gewerkschaftlichen Kampf? Durch den zweiten Film unserer Reihe − ein italienischer Klassiker in schwarz und weiß − wollen wir genau dieser Frage nachgehen.",
    adress: "Rechbauerstraße 19a",
    adressMapLink: "https://www.openstreetmap.org/node/11272595629",
  },
  {
    title: "We the Workers",
    director: "Wenhai Huang",
    announcement: "3. Film: Anderswo ist hier",
    date: "2026-03-21",
    dateAsText: "Samstag, 21. März '26", // Samstag, 15. November, ab 19 Uhr
    img: "./assets/img/2025/03_we-the-workers_blackless.png",
    location: "Die Kometin",
    locationLink: "https://kometin.at",
    description:
      "Was geht eigentlich ab in China? Fernab wallender roter Fahnen hat der Klassenkampf noch lange kein Ende gefunden. Wenhai Huang nimmt uns mit in die Fabriken und führt uns vor Augen, dass die Klasse der Lohnabhängigen eine internationale ist. Der Kampf, den sie für ihre Rechte führen, geschieht auf der ganzen Welt in ähnlicher Weise.",
    adress: "Rechbauerstraße 19a",
    adressMapLink: "https://www.openstreetmap.org/node/11272595629",
  },

  {
    title: "Streik",
    director: "Stéphane Brizé",
    announcement: "Abschluss: Unsre Kämpfe",
    date: "2026-03-28",
    dateAsText: "Samstag, 28. März '26", // Samstag, 13. Dezember, ab 19 Uhr
    img: "./assets/img/2025/05_streik_blackless.png",
    location: "KPÖ-Bildungsverein", // KPÖ-Bildungsverein
    locationLink: "https://kpoe-bildungsverein.at/", // https://kpoe-bildungsverein.at/
    description:
      "Wir schließen die Klammer mit einem weiteren Film unseres neuen Helden Stéphane Brizé. War der Protagonist des ersten Films noch den Verhältnissen machtlos ausgesetzt, begibt er sich diesmal in den Arbeitskampf. Ein gegenwärtiger Streikfilm, der uns ein ernsthaftes Gefühl dafür vermittelt, was es bedeutet, die eigenen Interessen gegen einen übermächtig erscheinenden Gegner einzufordern.",
    adress: "Lagergasse 98a", // Lagergasse 98a
    adressMapLink: "https://www.openstreetmap.org/way/122066195", // https://www.openstreetmap.org/way/122066195
  },
];

/* || Movie Handler */

const movieHandler = (function () {
  const totalMovies = MOVIES.length;

  const moviesSortedByDate = MOVIES.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  let displayedMovieIndex = 0;
  let displayedMovie = moviesSortedByDate[displayedMovieIndex];

  const increaseDisplayedMovieIndex = () => {
    displayedMovieIndex++;
    return displayedMovieIndex;
  };

  const decreaseDisplayedMovieIndex = () => {
    displayedMovieIndex--;
    return displayedMovieIndex;
  };

  return {
    decreaseDisplayedMovieIndex,
    increaseDisplayedMovieIndex,
    checkDisplayedMovie: () => displayedMovie,
    checkDisplayedMovieIndex: () => displayedMovieIndex,
    checkMoviesSortedByDate: () => moviesSortedByDate,
    checkTotalMovies: () => totalMovies,
  };
})();

const ui = (function () {
  const moviesBox = {
    announcement: document.querySelector("#movies__announcement"),
    dateAsText: document.querySelector("#movies__date-as-text"),
    img: document.querySelector("#movies__img"),
    location: document.querySelector("#movies__location"),
    locationLink: document.querySelector("#movies__locationLink"),
    adress: document.querySelector("#movies__adress"),
    adressMapLink: document.querySelector("#movies__adressMapLink"),
    description: document.querySelector("#movies__description"),
    arrowLeft: document.querySelector("#movies__arrow-left"),
    arrowRight: document.querySelector("#movies__arrow-right"),
  };

  const updateMovieBox = (index) => {
    const displayedMovie = movieHandler.checkMoviesSortedByDate()[index];

    moviesBox.announcement.textContent = displayedMovie.announcement;
    // UNCOMMENT wenn Datum der Filme steht
    moviesBox.dateAsText.textContent = displayedMovie.dateAsText;
    moviesBox.img.src = displayedMovie.img;
    moviesBox.location.textContent = displayedMovie.location;
    moviesBox.description.textContent = displayedMovie.description;
    moviesBox.locationLink.href = displayedMovie.locationLink;
    moviesBox.adress.textContent = displayedMovie.adress;
    moviesBox.adressMapLink.href = displayedMovie.adressMapLink;
  };

  moviesBox.arrowRight.addEventListener("click", () => {
    const movieIndex = movieHandler.increaseDisplayedMovieIndex();
    console.log("movieIndex: " + movieIndex);

    moviesBox.arrowLeft.classList.remove("blur-box__arrow--disabled");
    if (movieIndex > movieHandler.checkTotalMovies() - 2) {
      moviesBox.arrowRight.classList.add("blur-box__arrow--disabled");
    }
    updateMovieBox(movieIndex);
  });

  moviesBox.arrowLeft.addEventListener("click", () => {
    const movieIndex = movieHandler.decreaseDisplayedMovieIndex();
    console.log("movieIndex: " + movieIndex);
    moviesBox.arrowRight.classList.remove("blur-box__arrow--disabled");
    if (movieIndex === 0) {
      moviesBox.arrowLeft.classList.add("blur-box__arrow--disabled");
    }
    updateMovieBox(movieIndex);
  });

  return {
    updateMovieBox,
  };
})();

ui.updateMovieBox(0);
