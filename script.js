/* || Movie Data */

const MOVIES = [
  {
    title: "Der Wert Des Menschen",
    director: "Stéphane Brizé",
    date: "2025-10-18",
    dateAsText: "Samstag, 18. Oktober, ab 19 Uhr",
    img: "./assets/img/2025/01_wert-des-menschen_blackless.png",
    location: "???", //  Rechbauerkino
    locationLink: "", // https://www.filmzentrum.com/
    description:
      "Der Wert des Menschen (Originaltitel La loi du marché) ist ein Film des französischen Regisseurs Stéphane Brizé, der am 18. Mai 2015 im Rahmen der Filmfestspiele von Cannes seine Premiere feierte und einen Tag später in die französischen Kinos kam. Ab 17. März 2016 war der Film in den deutschen Kinos zu sehen. ",
    adress: "???", // Rechbauerstraße 6
    adressMapLink: "", // https://www.openstreetmap.org/node/6450145137
  },

  {
    title: "The Promised Land",
    director: "Andrzej Wajda",
    date: "2025-11-29",
    dateAsText: "Samstag, 29. November, ab 19 Uhr",
    img: "./assets/img/2025/04_the-promised-land_blackless.png",
    location: "Die Kometin",
    locationLink: "https://kometin.at",
    description:
      "The Promised Land is a 1975 Polish drama film directed by Andrzej Wajda, based on the novel of the same name by Władysław Reymont. Set in the industrial city of Łódź, The Promised Land tells the story of a Pole, a German, and a Jew struggling to build a factory in the raw world of 19th-century capitalism. Wajda presents a shocking image of the city, with its dirty and dangerous factories and ostentatiously opulent residences devoid of taste and culture.",
    adress: "Rechbauerstraße 19a",
    adressMapLink: "https://www.openstreetmap.org/node/11272595629",
  },

  {
    title: "The Organizer",
    director: "Mario Monicelli",
    date: "2025-11-01",
    dateAsText: "Samstag, 1. November, ab 19 Uhr",
    img: "./assets/img/2025/02_the-organizer_blackless.png",
    location: "Die Kometin",
    locationLink: "https://kometin.at",
    description:
      "The Organizer (Italian: I compagni) is a 1963 Italian-French-Yugoslavian-produced drama film written by Mario Monicelli and Age & Scarpelli, and directed by Mario Monicelli. Set in Turin at the end of the 19th century, it stars Marcello Mastroianni as a labor activist who becomes involved with a group of textile factory workers who go on strike. ",
    adress: "Rechbauerstraße 19a",
    adressMapLink: "https://www.openstreetmap.org/node/11272595629",
  },
  {
    title: "We the Workers",
    director: "Wenhai Huang",
    date: "2025-11-15",
    dateAsText: "Samstag, 15. November, ab 19 Uhr",
    img: "./assets/img/2025/03_we-the-workers_blackless.png",
    location: "Die Kometin",
    locationLink: "https://kometin.at",
    description:
      "Although labor activities could be very dangerous in China, some local consulting groups in the big city of Guangzhou continue to help migrant workers get their rights of work.",
    adress: "Rechbauerstraße 19a",
    adressMapLink: "https://www.openstreetmap.org/node/11272595629",
  },

  {
    title: "Streik",
    director: "Stéphane Brizé",
    date: "2025-12-13",
    dateAsText: "Samstag, 13. Dezember, ab 19 Uhr",
    img: "./assets/img/2025/05_streik_blackless.png",
    location: "???", // KPÖ-Bildungsverein
    locationLink: "", // https://kpoe-bildungsverein.at/
    description:
      "Drei Jahre nach 'Der Wert des Menschen' (La loi du marché) präsentiert Stéphane Brizé sein neues Sozialdrama 'Streik' (En guerre). Im südfranzösischen Aden droht dem Werk der Perrin-Industrie, dem einzigen größeren Arbeitgeber der Region, die Schließung.",
    adress: "", // Lagergasse 98a
    adressMapLink: "", // https://www.openstreetmap.org/way/122066195
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

ui.updateMovieBox(0)