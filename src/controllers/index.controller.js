const axios = require('axios').default;
const IndexCrtl = {};
IndexCrtl.renderIndex = async(req, res) => {

    const datos = await axios.get('https://api.themoviedb.org/3/discover/movie/?api_key=453b3a510eefb8a5089d42aa2a25547b');
    res.render('index', {
        movies: datos.data.results
    });
};
IndexCrtl.renderMovieDetails = async(req, res) => {
    const datos = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.idMovie}?api_key=453b3a510eefb8a5089d42aa2a25547b`);
    res.render('movie_details', { movie: datos.data });
}
module.exports = IndexCrtl;