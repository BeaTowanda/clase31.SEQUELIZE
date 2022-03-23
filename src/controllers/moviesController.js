let db = require ("../databse/models");
/*const Movies = require ("models/Movies.js")*/

let moviesController = {
    list : function(req,res) {
        /*let pelis = Movies.findAll(movies)*/
        let movies = db.Movie.findAll()
            .then (function(pelis){
                res.render("moviesList",{movies: pelis})
            })
        }
    };
module.exports= moviesController;
