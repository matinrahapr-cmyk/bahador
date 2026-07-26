import { ArrowLeft } from "./Icons";
export type Product = { name:string; code:string; color:string; meta:string; price:string; badge?:string };
export function ProductCard({product, index}:{product:Product; index:number}) {
  return <article className="productCard">
    <div className={`productVisual productVisual${index+1}`}><span className="productBadge">{product.badge ?? "پرفروش"}</span><div className="brickWall"/></div>
    <div className="productBody"><div className="productTop"><span className="swatch" style={{background:product.color}}/><span>{product.meta}</span></div><h3>{product.name}</h3><p className="sku">کد محصول: {product.code}</p><div className="price"><span>شروع قیمت</span><strong>{product.price}</strong></div><div className="productActions"><a className="btn btnPrimary btnSmall" href="#quote">افزودن به استعلام</a><a className="roundLink" href="#" aria-label={`مشاهده ${product.name}`}><ArrowLeft/></a></div></div>
  </article>
}
