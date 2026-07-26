import Image from "next/image";
import { Menu, Phone, Search } from "./Icons";
import { catalog, type CatalogNode } from "@/lib/catalog";

function MenuBranch({ node, level = 0 }: { node: CatalogNode; level?: number }) {
  const href = `#cat-${node.slug}`;
  if (!node.children?.length) return <a href={href}>{node.name}</a>;

  return (
    <div className={`menuBranch level${level}`}>
      <a className="menuBranchTitle" href={href}>{node.name}</a>
      <div className="menuBranchChildren">
        {node.children.map((child) => <MenuBranch key={child.slug} node={child} level={level + 1} />)}
      </div>
    </div>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Header() {
  return <>
    <div className="topbar">ارسال سراسری از کارخانه • مشاوره رایگان انتخاب آجر</div>
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#"><Image src={`${basePath}/images/logo-mark-light.png`} alt="لوگوی آجر جهان‌نما" width={62} height={62}/><span><b>آجر جهان‌نما</b><small>JAHAN NAMA BRICK</small></span></a>
        <nav className="nav" aria-label="منوی اصلی">
          <div className="megaMenuTrigger">
            <a href="#products">محصولات <span aria-hidden="true">⌄</span></a>
            <div className="megaMenu" aria-label="دسته‌بندی محصولات">
              <div className="megaMenuIntro"><small>فروشگاه آجر جهان‌نما</small><strong>دسته‌بندی کامل محصولات</strong><p>برای مشاهده مدل‌ها، رنگ‌ها و ابعاد، دسته موردنظر را انتخاب کنید.</p><a className="btn btnPrimary btnSmall" href="#products">مشاهده همه محصولات</a></div>
              <div className="megaMenuGrid">{catalog.map((node) => <MenuBranch key={node.slug} node={node} />)}</div>
            </div>
          </div>
          <a href="#projects">پروژه‌ها</a><a href="#calculator">محاسبه‌گر</a><a href="#about">درباره ما</a><a href="#contact">تماس</a>
        </nav>
        <div className="headerActions"><button className="iconBtn" aria-label="جستجو"><Search/></button><a className="phoneLink" href="tel:+982100000000"><Phone/> ۰۲۱-۰۰۰۰۰۰۰۰</a><a className="btn btnPrimary btnSmall" href="#quote">دریافت قیمت</a><button className="mobileMenu" aria-label="بازکردن منو"><Menu/></button></div>
      </div>
    </header>
  </>;
}
