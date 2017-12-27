import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//添-
  private products: Array<Product>;
  private imgURL="http://placehold.it/320x150";
//加-

  constructor() { }

  ngOnInit() {
    //添
    this.products=[
      new Product(1,"第一个商品",1.99,3.5,"第一个商品，是我学习的angular的第一步",["电子产品","硬件设施"]),
      new Product(2,"第二个商品",2.99,2.5,"第二个商品，是我学习的angular的第一步",["硬件设施"]),
      new Product(3,"第三个商品",3.99,4.5,"第三个商品，是我学习的angular的第一步",["图书","硬件设施"]),
      new Product(4,"第四个商品",4.99,3.5,"第四个商品，是我学习的angular的第一步",["电子产品","图书"]),
      new Product(5,"第五个商品",5.99,1.5,"第五个商品，是我学习的angular的第一步",["服饰","硬件设施"]),
      new Product(6,"第六个商品",5.99,1.5,"第六个商品，是我学习的angular的第一步",["服饰","硬件设施"]),
    ]
    this.products.push(new Product(7,"第七个商品",5.99,1.6,"第七个商品，是我学习的angular的第一步",["服饰","硬件设施"]));
    //加
  }

}
//添-构造一个类
export class Product {
  constructor(
    public id:number,
    public  title:string,
    public  price:number,
    public  rating:number,
    public desc:string,
    public categeories:Array<string>
  ){

  }
}
//加-
