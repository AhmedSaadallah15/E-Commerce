export interface Cart {
  numOfCartItems:number
  data:data
}


interface data{
  totalCartPrice :number;
  products:Product[];
  _id:string

}

interface Product
{
  count:number;
  price:number;
  _id:string;
  product :innerProduct;
}
interface innerProduct{
  brand:brand;
  category:category;
  imageCover:string;
  quantity:number;
  ratingsAverage:number;
  title:string;
  _id:string;
}

interface brand{
  name:string;
}
interface category{
  name:string;
}
