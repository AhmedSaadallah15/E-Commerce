import { IBrand } from "./i-brand";
import { ICategory } from "./i-category";
import { ISubcategory } from "./i-subcategory";

export interface Iproduct {
  sold:number;
  images:string[];
  subcategory:ISubcategory[];
  _id:string;
  title:string;
  description:string;
  price:number;
  imageCover:string;
  category:ICategory;
  brand:IBrand;
  ratingsAverage:number;
  quantity:number;


}


