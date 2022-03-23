const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports =(sequelize,DataTypes) =>{
  const Genero = sequelize.Define("Genero",{ 
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
    name : {
        type : DataTypes.STRING (100),
        allowNull : false 
},
ranking :{
        type : DataTypes.INTEGER(10),
        allowNull: false
},
active :{
    type : DataTypes.BOOLEAN
} } ) 
  
  return Genero }