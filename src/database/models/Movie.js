const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
/* duda con el rating sobre si poner FLOAT O PONER DECIMAL Y CON DATETIMES */
module.exports =(sequelize,DataTypes) =>{
  const Movie = sequelize.Define("Movie",{ 
      id : {
      type : DataTypes.INTERGER(10),
        primaryKey : true,
        autoIncrement : true ,
        allowNull : false    
  },
  created_at:{
      type : DataTypes.timestamps,
      allowNull : true
    },
  update_at :{
      type : dataTypes.timestamps,
      allowNull : true
  },  
    tittle : {
        type : DataTypes.STRING (500),
        allowNull : false 
},
    rating :{
        type : DataTypes.DECIMAL(3.1),
        allowNull: false
},
    rating :{
        type : DataTypes.INTEGER(10),
        allowNull: false
},
    realise_date :{
        type : DataTypes.timestamps,
        allowNull: false
},
    release_date :{
    type : DataTypes.timestamps,
    allowNull: false
},
    length :{
        type : DataTypes.INTEGER(3),
        allowNull: TRUE
},
    genre_id :{
        foreignKey :true,
        type : DataTypes.INTEGER(10),
        allowNull: true 

} } ) 
  
  return Movie }