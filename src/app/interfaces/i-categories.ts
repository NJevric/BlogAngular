export interface ICategories {
    id:number,
    image:string;
    image2:string;
    name:string;
    meals:Array<IMeals>
}
export interface IMeals{
    id:number;
    name:string;
    price:number;
    image:string;
}
