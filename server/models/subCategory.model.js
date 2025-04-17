import mongoose from "mongoose";
import CategoryModel from "./category.model.js";

const subCategorySchema = new mongoose.Schema({

  name :{
    type : String,
    default : ""
  },
  image :{
    type : String,
    default : ""
  },
  category : [
    {
      type : mongoose.Schema.ObjectId,
      ref : "category"
    }
  ]

},{
  timestamps  :true
})

const SubCategoryModel = mongoose.model('subCategory',subCategorySchema)

export default SubCategoryModel