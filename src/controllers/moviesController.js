let db = require ("../databse/models");
/*const Movies = require ("models/Movies.js")*/

let moviesController = {
    list : function(req,res) {
        /*let pelis = Movies.findAll(movies)*/
         db.Movie.findAll()
            .then (function(movies){
                res.render("moviesList",{movies: movies})
            })
        },
    detail: function(req,res){
         db.Movie.findByPK(req.params.id)
        .then (function (movie){
            /*falta agregar el where*/
            res.render ("moviesDetail",{movie:movie})
        })
    }
    };
module.exports= moviesController;
