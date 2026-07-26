export type CatalogNode = {
  name: string;
  slug: string;
  children?: CatalogNode[];
};

export const refractorySizes = ["۷×۳۱", "۸×۴۰", "۱۰×۶۰", "۲۰×۸۰", "۱۲×۱۰۰"];

export const catalog: CatalogNode[] = [
  {
    name: "آجر نما",
    slug: "facade-brick",
    children: [
      {
        name: "آجر نسوز",
        slug: "refractory-brick",
        children: [
          { name: "آجر انگلیسی", slug: "english-brick" },
          { name: "آجر شاموتی", slug: "chamotte-brick" },
          {
            name: "ابعاد آجر نسوز",
            slug: "refractory-sizes",
            children: refractorySizes.map((size, index) => ({
              name: size,
              slug: `refractory-size-${index + 1}`,
            })),
          },
        ],
      },
      { name: "آجر سفید", slug: "white-brick" },
      { name: "آجر طوسی", slug: "gray-brick" },
      { name: "آجر قهوه‌ای", slug: "brown-brick" },
      {
        name: "آجر مشکی",
        slug: "black-brick",
        children: [
          { name: "آجر شومینه", slug: "fireplace-brick" },
          { name: "آجر کرکره‌ای", slug: "shutter-brick" },
          { name: "آجر تایل", slug: "tile-brick" },
        ],
      },
      { name: "آجر قزاقی", slug: "qazagi-brick" },
      { name: "آجر دکوراتیو", slug: "decorative-brick" },
      { name: "آجر رستیک", slug: "rustic-brick" },
      { name: "آجر لعابی", slug: "glazed-brick" },
      { name: "آجر سنتی", slug: "traditional-brick" },
      { name: "آجر رسی", slug: "clay-brick" },
    ],
  },
  { name: "آجر کوره", slug: "kiln-brick" },
  { name: "آجر کف", slug: "floor-brick" },
  {
    name: "آجر معمولی",
    slug: "ordinary-brick",
    children: [
      {
        name: "آجر لفتون",
        slug: "lofton-brick",
        children: [
          { name: "آجر لفتون زرد", slug: "yellow-lofton-brick" },
          { name: "آجر لفتون قرمز", slug: "red-lofton-brick" },
        ],
      },
      { name: "آجر فشاری", slug: "pressed-brick" },
      { name: "آجر سفال", slug: "clay-block" },
    ],
  },
  {
    name: "مصالح جانبی",
    slug: "accessories",
    children: [
      { name: "پودر بندکشی آجر", slug: "brick-grout" },
      { name: "چسب آجر", slug: "brick-adhesive" },
      { name: "نانو آجر", slug: "brick-nano-coating" },
      { name: "محلول شستشوی آجر نما", slug: "brick-cleaner" },
      { name: "اسپیسر آجر نما", slug: "brick-spacer" },
    ],
  },
];
