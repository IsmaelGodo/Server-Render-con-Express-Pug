const getHome = (req, res) => {
    res.status(200).render("home")
}

const getFilm = async (req, res) => {

    // console.log(req.params.title);

    try {
        const fetchFilm = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=e0afd07`)
        const dataFilm = await fetchFilm.json()

        res.status(200).render("film.pug", {
            title: dataFilm.Title,
            year: dataFilm.Year,
            genre: dataFilm.Genre,
            runtime: dataFilm.Runtime,
            director: dataFilm.Director,
            writer: dataFilm.Writer,
            actors: dataFilm.Actors,
            awards: dataFilm.Awards,
            poster: dataFilm.Poster,
            country: dataFilm.Country,
            plot: dataFilm.Plot
        })
    } catch (error) {
        console.log(error);
    }
}

const postHome = (req, res) => {
    res.redirect(`http://localhost:3000/film/${req.body.peli}`)
}
//API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e0afd07"
//API_KEY = "e0afd07";
module.exports = {
    getHome,
    postHome,
    getFilm
}