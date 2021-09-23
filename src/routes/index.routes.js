const { Router } = require('express');
const { renderIndex, renderMovieDetails } = require('../controllers/index.controller');
const router = Router();
router.get('/', renderIndex);
router.get('/movie_details/:idMovie', renderMovieDetails);

module.exports = router;