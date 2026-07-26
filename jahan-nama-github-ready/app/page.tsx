import { Header } from "@/components/Header";
import { ArrowLeft, Calculator, Check, Phone } from "@/components/Icons";
import { ProductCard, type Product } from "@/components/ProductCard";
import { catalog, refractorySizes } from "@/lib/catalog";

const products: Product[] = [
  {name:"آجر انگلیسی قرمز",code:"JN-ENG-31",color:"#A83A2C",meta:"آجر نسوز • ۷×۳۱",price:"استعلام قیمت",badge:"پرفروش"},
  {name:"آجر شاموتی روشن",code:"JN-CHA-40",color:"#D19A63",meta:"آجر نسوز • ۸×۴۰",price:"استعلام قیمت",badge:"نمای مدرن"},
  {name:"آجر سفید نما",code:"JN-WHT-60",color:"#E8E2D9",meta:"آجر نما • سفید",price:"استعلام قیمت",badge:"سفید"},
  {name:"آجر طوسی نسوز",code:"JN-GRY-80",color:"#77706E",meta:"آجر نسوز • ۲۰×۸۰",price:"استعلام قیمت",badge:"طوسی"},
  {name:"آجر قزاقی سنتی",code:"JN-QAZ-01",color:"#B56342",meta:"آجر نما • دست‌ساز",price:"استعلام قیمت",badge:"اصیل"},
  {name:"آجر رستیک",code:"JN-RUS-01",color:"#8B4A38",meta:"آجر نما • بافت‌دار",price:"استعلام قیمت",badge:"رستیک"},
  {name:"آجر لفتون زرد",code:"JN-LOF-Y",color:"#D5A649",meta:"آجر معمولی • لفتون",price:"استعلام قیمت",badge:"کاربردی"},
  {name:"پودر بندکشی آجر",code:"JN-GROUT",color:"#C9C5BE",meta:"مصالح جانبی",price:"استعلام قیمت",badge:"ملزومات اجرا"},
];

const categoryColors = ["#9a3d2f", "#7f4736", "#a65036", "#b7835c", "#696360"];


export default function Home() {
  return <main>
    <Header/>
    <section className="hero">
      <div className="container heroGrid">
        <div className="heroContent"><span className="eyebrow">خرید مستقیم از کارخانه</span><h1>نمای ماندگار،<br/><em>با انتخاب دقیق آجر.</em></h1><p>مجموعه تخصصی آجر نما برای معماران، سازندگان و پروژه‌های شاخص؛ با مشاوره انتخاب، محاسبه تعداد و ارسال سراسری.</p><div className="heroCtas"><a className="btn btnPrimary" href="#quote">دریافت قیمت پروژه <ArrowLeft/></a><a className="btn btnSecondary" href="#products">مشاهده محصولات</a></div><div className="heroTrust"><span><Check/> تضمین کیفیت</span><span><Check/> نمونه واقعی</span><span><Check/> ارسال سراسری</span></div></div>
        <div className="heroVisual"><div className="heroPanel"><div className="heroBricks"></div><div className="floatingCard"><small>محصول منتخب معماران</small><strong>آجر نسوز قرمز رستیک</strong><span>بافت طبیعی • مقاوم در برابر یخبندان</span></div></div><div className="heroStat"><strong>+۱۸</strong><span>سال تجربه در تولید آجر نما</span></div></div>
      </div>
    </section>

    <section className="stats"><div className="container statsGrid"><div><strong>۴۵۰+</strong><span>پروژه اجراشده</span></div><div><strong>۳۶</strong><span>مدل و رنگ تخصصی</span></div><div><strong>۲۴</strong><span>استان تحت پوشش</span></div><div><strong>۹۲٪</strong><span>رضایت مشتریان</span></div></div></section>

    <section className="section" id="products"><div className="container"><div className="sectionHead"><div><span className="eyebrow">دسته‌بندی محصولات</span><h2>دسته‌بندی کامل فروشگاه آجر جهان‌نما</h2></div><a className="textLink" href="#all-products">مشاهده محصولات منتخب <ArrowLeft/></a></div><div className="categoryGrid categoryGridFive">{catalog.map((category,i)=><article className="categoryCard catalogCard" id={`cat-${category.slug}`} key={category.slug}><span className="categoryIndex">۰{i+1}</span><div className="miniWall" style={{backgroundColor:categoryColors[i]}}/><h3>{category.name}</h3>{category.children?.length ? <ul className="categoryChildren">{category.children.map((child)=><li key={child.slug}><a href={`#cat-${child.slug}`}>{child.name}</a>{child.children?.length ? <span>{child.children.map(item=>item.name).join("، ")}</span>:null}</li>)}</ul>:<p>مشاهده مدل‌ها و دریافت استعلام</p>}<ArrowLeft/></article>)}</div><div className="sizePanel"><div><span className="eyebrow">ابعاد آجرهای نسوز</span><h3>ابعاد قابل سفارش</h3><p>ابعاد زیر برای خانواده آجر نسوز در نظر گرفته شده‌اند.</p></div><div className="sizeChips">{refractorySizes.map(size=><span key={size}>{size} سانتی‌متر</span>)}</div></div></div></section>

    <section className="section muted" id="all-products"><div className="container"><div className="sectionHead"><div><span className="eyebrow">محصولات منتخب</span><h2>پرفروش‌ترین انتخاب‌های این ماه</h2></div><p className="sectionNote">قیمت‌ها پایه و نیازمند تأیید موجودی و کرایه حمل هستند.</p></div><div className="productGrid">{products.map((p,i)=><ProductCard key={p.code} product={p} index={i}/>)}</div></div></section>

    <section className="section" id="calculator"><div className="container calculatorWrap"><div className="calcContent"><span className="eyebrow light">محاسبه‌گر هوشمند</span><h2>تعداد آجر پروژه‌تان را در کمتر از یک دقیقه محاسبه کنید.</h2><p>متراژ، ابعاد آجر و درصد پرت را وارد کنید؛ تعداد تقریبی قالب و بسته موردنیاز را دریافت کنید.</p><ul><li><Check/> محاسبه بر اساس بندکشی استاندارد</li><li><Check/> لحاظ‌کردن پرت پروژه</li><li><Check/> تبدیل مستقیم نتیجه به پیش‌فاکتور</li></ul></div><div className="calcCard"><Calculator/><h3>محاسبه سریع</h3><label>متراژ نما (مترمربع)<input defaultValue="120" inputMode="decimal"/></label><label>نوع آجر<select defaultValue="ap33"><option value="eng31">آجر انگلیسی - ۷×۳۱</option><option>آجر شاموتی - ۸×۴۰</option><option>آجر نسوز - ۱۰×۶۰</option><option>آجر نسوز - ۲۰×۸۰</option><option>آجر نسوز - ۱۲×۱۰۰</option></select></label><label>درصد پرت<input defaultValue="7" inputMode="numeric"/></label><div className="calcResult"><span>تعداد تقریبی</span><strong>۵,۱۳۶ قالب</strong></div><button className="btn btnPrimary">دریافت پیش‌فاکتور محاسبه‌شده</button></div></div></section>

    <section className="section" id="projects"><div className="container"><div className="sectionHead"><div><span className="eyebrow">پروژه‌های اجراشده</span><h2>آجر جهان‌نما در معماری واقعی</h2></div><a className="textLink" href="#">همه پروژه‌ها <ArrowLeft/></a></div><div className="projectsGrid"><article className="project projectLarge"><div className="projectOverlay"><span>ویلای مدرن • لواسان</span><h3>ترکیب آجر سفید و طوسی</h3><a href="#">مشاهده پروژه <ArrowLeft/></a></div></article><article className="project projectSmall p2"><div className="projectOverlay"><span>مسکونی • تهران</span><h3>نمای نسوز رستیک</h3></div></article><article className="project projectSmall p3"><div className="projectOverlay"><span>بازسازی • اصفهان</span><h3>آجر قزاقی سنتی</h3></div></article></div></div></section>

    <section className="section quoteSection" id="quote"><div className="container quoteGrid"><div><span className="eyebrow">مشاوره و استعلام</span><h2>برای پروژه شما، دقیق‌ترین پیشنهاد را آماده می‌کنیم.</h2><p>اطلاعات اولیه را ثبت کنید؛ کارشناس فروش در ساعات کاری با شما تماس می‌گیرد.</p><div className="contactCard"><Phone/><div><small>تماس مستقیم با فروش</small><strong>۰۲۱-۰۰۰۰۰۰۰۰</strong></div></div></div><form className="quoteForm"><div className="fieldRow"><label>نام و نام خانوادگی<input placeholder="مثلاً محمد رضایی"/></label><label>شماره موبایل<input placeholder="۰۹۱۲۱۲۳۴۵۶۷" inputMode="tel"/></label></div><div className="fieldRow"><label>شهر پروژه<input placeholder="مثلاً تهران"/></label><label>متراژ تقریبی<input placeholder="مثلاً ۱۲۰ متر"/></label></div><label>محصول موردنظر<select><option>انتخاب کنید</option>{catalog.map(c=><option key={c.slug}>{c.name}</option>)}</select></label><button className="btn btnPrimary" type="button">ثبت درخواست مشاوره</button><small>با ثبت فرم، با شرایط حفظ حریم خصوصی موافقت می‌کنید.</small></form></div></section>

    <footer className="footer" id="contact"><div className="container footerGrid"><div><h3>آجر جهان‌نما</h3><p>تولید و عرضه مستقیم آجر نما برای پروژه‌های معماری و ساختمانی در سراسر ایران.</p></div><div><h4>محصولات</h4>{catalog.map(c=><a href={`#cat-${c.slug}`} key={c.slug}>{c.name}</a>)}</div><div><h4>دسترسی سریع</h4><a href="#projects">پروژه‌ها</a><a href="#calculator">محاسبه‌گر</a><a href="#quote">استعلام قیمت</a><a href="#">سوالات متداول</a></div><div><h4>ارتباط با ما</h4><p>شنبه تا پنجشنبه، ۸ تا ۱۸</p><a href="tel:+982100000000">۰۲۱-۰۰۰۰۰۰۰۰</a><a href="mailto:info@jahannama.ir">info@jahannama.ir</a></div></div><div className="container footerBottom"><span>© ۱۴۰۵ آجر جهان‌نما</span><span>طراحی‌شده برای تجربه خرید حرفه‌ای</span></div></footer>
    <a className="whatsapp" href="#quote" aria-label="مشاوره واتساپی">WA</a>
  </main>;
}
