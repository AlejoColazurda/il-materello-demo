import { Category } from '../../app/core/models/category.model';
import { Comment } from '../../app/core/models/comment.model';
import { Dish } from '../../app/core/models/dish.model';

export const CATEGORIES_MOCK: Category[] = [
  {
    "id": "antipasto",
    "label": "Antipasti",
    "icon": "tools-kitchen-2"
  },
  {
    "id": "pastas",
    "label": "Pastas Caseras",
    "icon": "tools-kitchen"
  },
  {
    "id": "risotto",
    "label": "Risotto",
    "icon": "bowl"
  },
  {
    "id": "pesce-carne",
    "label": "Carnes y Pesce",
    "icon": "meat"
  },
  {
    "id": "ensaladas",
    "label": "Insalate",
    "icon": "leaf"
  },
  {
    "id": "postres",
    "label": "Dolci / Postres",
    "icon": "cake"
  },
  {
    "id": "bebidas",
    "label": "Vinos y Bebidas",
    "icon": "glass-cocktail"
  }
];

export const DISHES_MOCK: Dish[] = [
  {
    "id": "mellanzane-della-casa-198",
    "name": "Mellanzane della  Casa",
    "description": "Berenjenas en aceite con receta de la nonna",
    "price": 15500,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 247,
    "shares": 66,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4178_1708735229_e264c587-e05c-4454-ab79-d5978cd9e5dd.jpeg"
  },
  {
    "id": "matambre-della-casa-636",
    "name": "Matambre della Casa",
    "description": "Clásico matambre relleno",
    "price": 18500,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 98,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4179_1599852640_3D872885-A119-4BEF-879E-37D6D6A7E861.jpeg"
  },
  {
    "id": "vitello-tonnato-143",
    "name": "Vitello Tonnato",
    "description": "Viteltoné",
    "price": 18500,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 158,
    "shares": 26,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "lengua-alla-modena-588",
    "name": "Lengua alla Módena",
    "description": "Lengua en mayonesa especial suave",
    "price": 18500,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 408,
    "shares": 26,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "carpaccio-di-manzo-707",
    "name": "Carpaccio di Manzo",
    "description": "Carpaccio de Lomo",
    "price": 22000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 359,
    "shares": 14,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4182_1646693185_7AA17D98-2456-4E3E-81C3-716AB60245CC.jpeg"
  },
  {
    "id": "caponatina-di-verdure-897",
    "name": "Caponatina di Verdure",
    "description": "Berenjenas, morrón y tomates con aceitunas",
    "price": 18000,
    "categoryId": "antipasto",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 145,
    "shares": 45,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "mellanzane-alla-parmigiana-178",
    "name": "Mellanzane alla Parmigiana",
    "description": "Beremjenas a la parmesana",
    "price": 19000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 228,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4184_1653180721_2003B4BF-6954-4773-AC2D-9581A2ADAF4A.jpeg"
  },
  {
    "id": "verdure-gratinate-a-la-parmegi-260",
    "name": "Verdure Gratinate a la Parmegiana",
    "description": "Zucchinis, hinojo y tomates gratinados con parmesano",
    "price": 20000,
    "categoryId": "antipasto",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 301,
    "shares": 44,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "croquetas-de-verdura-499",
    "name": "Croquetas de verdura",
    "description": "Croquetas de espinaca rebozadas",
    "price": 17500,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 85,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "bruschetta-di-pomodoro-y-basil-454",
    "name": "Bruschetta di Pomodoro y Basilico",
    "description": "Pan tostado con tomate y albahaca",
    "price": 17000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 318,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4187_1646693277_18E6C417-6473-459A-8070-849D5672FD7E.jpeg"
  },
  {
    "id": "olivas-alla-ascolana-562",
    "name": "Olivas alla Ascolana",
    "description": "Olivas rellenas rebozadas",
    "price": 18000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 388,
    "shares": 47,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "burrata-tricolor-657",
    "name": "Burrata Tricolor",
    "description": "Burrata, prosciutto italiano y rúcula",
    "price": 49000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 78,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4189_1703641609_CA392162-C318-4D8F-8379-B3EBED495106.jpeg"
  },
  {
    "id": "burrata-con-rucula-407",
    "name": "Burrata con Rucula",
    "description": "Burrta con rucula",
    "price": 32000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 403,
    "shares": 36,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "mozzarella-capresse-460",
    "name": "Mozzarella Capresse",
    "description": "Mozzarella, tomates secos y albahaca",
    "price": 21000,
    "categoryId": "antipasto",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 145,
    "shares": 65,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "prosciutto-di-parma-787",
    "name": "Prosciutto di Parma",
    "description": "Jamon crudo italiano",
    "price": 43000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 423,
    "shares": 45,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "antipasto-completo-630",
    "name": "Antipasto Completo",
    "description": "FREDDO: Sobresatta, parmesano, mozzarella, mortadela, tomates secos, berenjenas, olivas griegas, lengua, aji en aceite, jardineraCALDO: Caponatina,  tomates gratinados, zucchinis, berenjena parmesana, hinojos, croquetas de verdura.",
    "price": 31000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 324,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4193_1706205251_IMG_4783.jpeg"
  },
  {
    "id": "langostinos-crocantes-con-pank-778",
    "name": "LANGOSTINOS CROCANTES con Panko",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 472,
    "shares": 36,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "porotos-picantes-y-gigantes-874",
    "name": "Porotos PIcantes y Gigantes",
    "description": "Pallares",
    "price": 13000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 252,
    "shares": 45,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "mortadela-con-pistacchio-156",
    "name": "MORTADELA con PISTACCHIO",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 17000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 370,
    "shares": 33,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "sobreasatta-563",
    "name": "Sobreasatta",
    "description": "como la sopresata, pero de puro cerdo",
    "price": 17000,
    "categoryId": "antipasto",
    "tags": [
      " Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 62,
    "shares": 50,
    "bgGradient": "linear-gradient(160deg, #3a2a1a 0%, #1c140e 50%, #0d0a07 100%)"
  },
  {
    "id": "gnocchi-875",
    "name": "Gnocchi",
    "description": "(sólo los días 29)",
    "price": 29200,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 369,
    "shares": 22,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4194_1653180584_C4A9E7FB-7FEA-4BCD-B902-50F39BD00F1D.jpeg"
  },
  {
    "id": "tagliatelle-blanco-putanesca-193",
    "name": "Tagliatelle Blanco Putanesca",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25300,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 441,
    "shares": 82,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4195_1599853933_DD523C64-D79A-4E4E-A3BE-457E86DA942B.jpeg"
  },
  {
    "id": "tagliolini-fruti-di-mare-847",
    "name": "Tagliolini Fruti di Mare",
    "description": "Con langostinos, calamarettis y mejillones",
    "price": 32000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      " Frutos de Mar"
    ],
    "inStock": true,
    "likes": 186,
    "shares": 77,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4196_1643334446_42886932-0BFF-45A6-A9CE-93C16AF748F4.jpeg"
  },
  {
    "id": "tagliatelle-alla-rucola-753",
    "name": "Tagliatelle alla Rucola",
    "description": "Tomates secos, rucula fresca",
    "price": 28500,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 278,
    "shares": 50,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4197_1599852992_C64461E5-FFFA-4F1F-9876-ACE797A5B9EB.jpeg"
  },
  {
    "id": "tagliatelle-bianchi-e-gamberi--995",
    "name": "Tagliatelle Bianchi e Gamberi, Zuccini e Pomodorini",
    "description": "Con langostinos, zapallitos y tomate cherry",
    "price": 32000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      "⭐ Especialidad de la casa",
      " Frutos de Mar"
    ],
    "inStock": true,
    "likes": 122,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4198_1599757604_88E38702-C21C-44AD-87AF-77077A42ED29.jpeg"
  },
  {
    "id": "pappardelle-ragu-232",
    "name": "Pappardelle Ragú",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 30000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 194,
    "shares": 93,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4199_1599853726_2DC8A59A-1EA1-47D3-8018-E1471FCFBC1D.jpeg"
  },
  {
    "id": "ravioli-genovesi-al-tuco-103",
    "name": "Ravioli Genovesi, al tuco",
    "description": "De carne de vaca, cerdo, pollo y verdura con tuco",
    "price": 30000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 285,
    "shares": 87,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4200_1599855048_FCC5B87F-E639-498D-B867-F3334CCA2449.jpeg"
  },
  {
    "id": "ravioli-de-verdura-e-ricota-al-407",
    "name": "Ravioli de Verdura e Ricota, al Fileto",
    "description": "De verdura, ricota y queso con fileto",
    "price": 28000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 141,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4201_1599853350_243F5D06-A0B9-4E9A-8711-F2F526C22C1C.jpeg"
  },
  {
    "id": "ravioli-verdi-di-zucca-al-burr-961",
    "name": "Ravioli Verdi di Zucca, al Burro e Salvia",
    "description": "De calabaza, a la manteca y salvia",
    "price": 28000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 448,
    "shares": 19,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4202_1599756065_4B27FA0A-70A7-4B50-8869-8C146B04BA87.jpeg"
  },
  {
    "id": "ravioli-di-funghi-e-espinaci-a-266",
    "name": "Ravioli di Funghi e Espinaci alla Panna",
    "description": "De espinaca y hongos a la crema",
    "price": 31000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 488,
    "shares": 53,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4203_1600199664_1ADB610F-B6CE-4E53-9824-DBF9B933BE74.jpeg"
  },
  {
    "id": "fazzoletti-di-salmone-alla-pan-559",
    "name": "Fazzoletti di Salmone alla Panna e Zucchini",
    "description": "De Salmon fresco a la crema con zucchini",
    "price": 33000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      " Frutos de Mar"
    ],
    "inStock": true,
    "likes": 429,
    "shares": 87,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4204_1703985173_943FF83E-DF7C-4CDD-AD28-60F94F37BF34.jpeg"
  },
  {
    "id": "fazzoletti-alla-carbonara-732",
    "name": "Fazzoletti alla Carbonara",
    "description": "De mozzarella, jamon y queso y salsa carbonara",
    "price": 29000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 86,
    "shares": 39,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4205_1599756257_C3D72A89-C62B-4B81-98E5-EA8DF7BB1277.jpeg"
  },
  {
    "id": "tortelli-bianchi-burro-fuso-al-799",
    "name": "Tortelli Bianchi, Burro fuso all Aglio",
    "description": "De verdura y queso a la manteca quemada y ajo",
    "price": 32000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 326,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4206_1599853231_6EB22CAC-C528-4A9D-98E8-862BBC525C6F.jpeg"
  },
  {
    "id": "tortelli-verdi-alla-panna-grat-938",
    "name": "Tortelli Verdi, alla Panna Gratinati",
    "description": "De queso gruyere, a la crema gratinados",
    "price": 32500,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 235,
    "shares": 35,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4207_1646700008_48E4B2F6-4B90-4110-B9FB-9D1FDB3E3D43.jpeg"
  },
  {
    "id": "lasagna-bolognese-501",
    "name": "Lasagna Bolognese",
    "description": "Rellena de Ragú, salsa blanca y queso",
    "price": 31000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 476,
    "shares": 55,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4208_1599756880_AE37B68E-88D6-4288-B501-AE57BCCC3F94.jpeg"
  },
  {
    "id": "lasagna-di-vegetale-147",
    "name": "Lasagna di Vegetale",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 29000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 69,
    "shares": 49,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4209_1599853513_953A0303-2D1F-4933-B80D-69B98DD70790.jpeg"
  },
  {
    "id": "canneloni-con-salsa-blanca-y-f-283",
    "name": "Canneloni con salsa blanca y fileto",
    "description": "De verdura y carne",
    "price": 29000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 236,
    "shares": 78,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4210_1653182330_C583BD61-B8DE-4D44-8A8E-0D268AC2E972.jpeg"
  },
  {
    "id": "tortellini-brodo-452",
    "name": "Tortellini Brodo",
    "description": "De carne en caldo natural",
    "price": 30000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 374,
    "shares": 93,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4211_1599851597_88E59B96-259C-447A-8AA4-74A505262751.jpeg"
  },
  {
    "id": "pasta-italiana-936",
    "name": "Pasta Italiana",
    "description": "Spaghetti, Fusilli, Penne Rigate.Con salsa a Elección Para CELÍACOS",
    "price": 26000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 186,
    "shares": 83,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4212_1599757445_8846BC5A-8059-4EFC-933F-2A30C7901A89.jpeg"
  },
  {
    "id": "tagliolini-277",
    "name": "Tagliolini",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 29200,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 193,
    "shares": 65,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4481_1653180009_91EB7BFC-09A8-415B-8A4B-BBE6FF7FB9CC.jpeg"
  },
  {
    "id": "pappardelle-549",
    "name": "Pappardelle",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 29200,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 216,
    "shares": 72,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4482_1599854099_52FFF925-C472-4BCF-935E-3B71018EFB6C.jpeg"
  },
  {
    "id": "ragu-584",
    "name": "Ragú",
    "description": "Carne de Vaca y Cerdo a cuchillo y un toque de tomate",
    "price": 21000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 478,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)"
  },
  {
    "id": "estofado-de-carne-760",
    "name": "Estofado de Carne",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 505,
    "shares": 63,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)"
  },
  {
    "id": "estofado-de-salsiccia-492",
    "name": "Estofado de Salsiccia",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 254,
    "shares": 54,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)"
  },
  {
    "id": "ragu-733",
    "name": "Ragú",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 14000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 162,
    "shares": 41,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)"
  },
  {
    "id": "estofado-705",
    "name": "Estofado",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 14000,
    "categoryId": "pastas",
    "tags": [
      " Pasta Casera"
    ],
    "inStock": true,
    "likes": 165,
    "shares": 74,
    "bgGradient": "linear-gradient(160deg, #3d1f1f 0%, #1f1010 50%, #0e0707 100%)"
  },
  {
    "id": "fruti-di-mare-694",
    "name": "Fruti di Mare",
    "description": "Risotto con langostinos, calamaretis y mejillones",
    "price": 39000,
    "categoryId": "risotto",
    "tags": [
      " Frutos de Mar",
      " Risotto al Dente"
    ],
    "inStock": true,
    "likes": 226,
    "shares": 38,
    "bgGradient": "linear-gradient(160deg, #2b2b1a 0%, #17170e 50%, #0c0c07 100%)"
  },
  {
    "id": "nero-e-gamberi-519",
    "name": "Nero e Gamberi",
    "description": "Risotto en tinta de calamar y langostinos",
    "price": 39000,
    "categoryId": "risotto",
    "tags": [
      " Frutos de Mar",
      " Risotto al Dente"
    ],
    "inStock": true,
    "likes": 395,
    "shares": 48,
    "bgGradient": "linear-gradient(160deg, #2b2b1a 0%, #17170e 50%, #0c0c07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4231_1599849303_F01C0A46-645F-4D71-A116-5F0E82D612F2.jpeg"
  },
  {
    "id": "al-funghi-664",
    "name": "Al Funghi",
    "description": "Risotto con hongos",
    "price": 35000,
    "categoryId": "risotto",
    "tags": [
      " Risotto al Dente"
    ],
    "inStock": true,
    "likes": 83,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg, #2b2b1a 0%, #17170e 50%, #0c0c07 100%)"
  },
  {
    "id": "alla-milanese-301",
    "name": "Alla Milanese",
    "description": "Risotto con azafran",
    "price": 35000,
    "categoryId": "risotto",
    "tags": [
      " Risotto al Dente"
    ],
    "inStock": true,
    "likes": 435,
    "shares": 36,
    "bgGradient": "linear-gradient(160deg, #2b2b1a 0%, #17170e 50%, #0c0c07 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4233_1643330582_70268CB9-CD47-44F1-B710-B1B470A47E2B.jpeg"
  },
  {
    "id": "azul-489",
    "name": "AZUL",
    "description": "Queso Patagonzola (Queseia Ventimiglia)",
    "price": 36500,
    "categoryId": "risotto",
    "tags": [
      " Risotto al Dente"
    ],
    "inStock": true,
    "likes": 61,
    "shares": 81,
    "bgGradient": "linear-gradient(160deg, #2b2b1a 0%, #17170e 50%, #0c0c07 100%)"
  },
  {
    "id": "salmone-alla-griglia-899",
    "name": "SALMONE ALLA GRIGLIA",
    "description": "Con manteca de lima acompañado de caponatina de verduras",
    "price": 39500,
    "categoryId": "pesce-carne",
    "tags": [
      " Frutos de Mar"
    ],
    "inStock": true,
    "likes": 477,
    "shares": 23,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)"
  },
  {
    "id": "trotta-all-burro-con-anneto-e--825",
    "name": "Trotta all Burro con Anneto e Capperi",
    "description": "Trucha a la manteca de eneldo con alcaparras y papas al natural",
    "price": 36000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 85,
    "shares": 49,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4235_1708735384_17085663-73ad-434f-9a0a-8114c8e1b136.jpeg"
  },
  {
    "id": "abadejo-della-giornatta-911",
    "name": "ABADEJO DELLA GIORNATTA",
    "description": "COCINADO EN SUS JUGOS CON PAPAS NATURAL, O VERDURAS",
    "price": 36500,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 494,
    "shares": 16,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)"
  },
  {
    "id": "ojo-de-bife-alla-grilla-948",
    "name": "OJO DE BIFE ALLA GRILLA",
    "description": "Con chimi de ajo y perejil y papas baston",
    "price": 45000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 130,
    "shares": 52,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)"
  },
  {
    "id": "filetto-di-manzo-al-rosmarino-636",
    "name": "Filetto di Manzo al Rosmarino",
    "description": "Lomo al romero con papas",
    "price": 39000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 278,
    "shares": 32,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4237_1610828045_28B1D97D-46ED-46B8-8178-C5599BB43865.jpeg"
  },
  {
    "id": "tagliata-de-bife-de-chorizo-982",
    "name": "TAGLIATA DE BIFE DE CHORIZO",
    "description": "Entrecot Grillado con guarnición de caponatina y rúcula",
    "price": 44000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 293,
    "shares": 32,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4238_1750618655_7e90a1c6-97da-41e7-afbf-d9741ba358c4.jpeg"
  },
  {
    "id": "milanesa-a-la-napolitana-de-oj-568",
    "name": "MILANESA A LA NAPOLITANA DE OJO DE BIFE",
    "description": "Con jamón, muzzarella y pomodoro c/guarnición",
    "price": 39000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 161,
    "shares": 96,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4239_1610828130_7BC79297-8B31-45E8-94E0-25961D3141D8.jpeg"
  },
  {
    "id": "solomillo-de-cerdo-con-ciruela-828",
    "name": "Solomillo de Cerdo con Ciruelas y Manzana",
    "description": "Lomo de cerdo a la ciruela con manzanas",
    "price": 35000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 311,
    "shares": 68,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4240_1599854491_95FB67BA-20A7-4E4E-89F9-2B1B0ED7E28D.jpeg"
  },
  {
    "id": "tagliatta-de-pollo-con-rucola-815",
    "name": "Tagliatta de Pollo con Rucola",
    "description": "Láminas de pollo en reducción de aceto, cubiertas de rúcula",
    "price": 31000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 112,
    "shares": 14,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)"
  },
  {
    "id": "milanesa-de-ojo-de-bife-104",
    "name": "MILANESA DE OJO DE BIFE",
    "description": "Acompañada con pasta, Tagliolini al burro",
    "price": 35000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 416,
    "shares": 88,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)"
  },
  {
    "id": "milanesa-de-ojo-de-bife-porten-659",
    "name": "MILANESA DE OJO DE BIFE PORTEÑA",
    "description": "CON PAPAS FRITAS Y HUEVO FRITO",
    "price": 35000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 447,
    "shares": 75,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)"
  },
  {
    "id": "picanha-con-guarcicion-para-2--308",
    "name": "PICANHA CON GUARCICION PARA 2 PERSONAS",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 80000,
    "categoryId": "pesce-carne",
    "tags": [
      " Parrilla"
    ],
    "inStock": true,
    "likes": 182,
    "shares": 96,
    "bgGradient": "linear-gradient(160deg, #2c1a1a 0%, #170d0d 50%, #0a0606 100%)"
  },
  {
    "id": "di-salmone-affumicato-767",
    "name": "Di Salmone Affumicato",
    "description": "Salmón ahumado, rúcula, tomates secos, alcaparras, olivas griegas, queso parmesano y alineo de queso crema y eneldo",
    "price": 30000,
    "categoryId": "ensaladas",
    "tags": [
      " Frutos de Mar",
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 437,
    "shares": 19,
    "bgGradient": "linear-gradient(160deg, #1b2c1a 0%, #0d170d 50%, #060a06 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4242_1599757658_664EF06E-AC49-428B-BF8F-E53980DD4531.jpeg"
  },
  {
    "id": "di-tonno-704",
    "name": "Di Tonno",
    "description": "Bocconcini de mozzarella, atun, huevo duro, cherry y olivas negras",
    "price": 26000,
    "categoryId": "ensaladas",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 389,
    "shares": 30,
    "bgGradient": "linear-gradient(160deg, #1b2c1a 0%, #0d170d 50%, #060a06 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4243_1599852859_DF30E58F-6E55-4AA9-A428-1CAC9619C855.jpeg"
  },
  {
    "id": "di-campagna-181",
    "name": "Di Campagna",
    "description": "Tiritas de pollos grilladas, aderezo de la casa. tomates secos, parmesano, rúculas, lechugas y almendras tostadas",
    "price": 27000,
    "categoryId": "ensaladas",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 223,
    "shares": 19,
    "bgGradient": "linear-gradient(160deg, #1b2c1a 0%, #0d170d 50%, #060a06 100%)"
  },
  {
    "id": "capresse-835",
    "name": "Capresse",
    "description": "Tomate, mozzarella y albahaca",
    "price": 26000,
    "categoryId": "ensaladas",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 111,
    "shares": 14,
    "bgGradient": "linear-gradient(160deg, #1b2c1a 0%, #0d170d 50%, #060a06 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4245_1646704082_EA1CB14D-C23A-41D9-BB7F-0676B7C6D472.jpeg"
  },
  {
    "id": "rupepa-173",
    "name": "Rupepa",
    "description": "Rucula, pera y parmesano",
    "price": 23500,
    "categoryId": "ensaladas",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 509,
    "shares": 35,
    "bgGradient": "linear-gradient(160deg, #1b2c1a 0%, #0d170d 50%, #060a06 100%)"
  },
  {
    "id": "rucola-197",
    "name": "Rúcola",
    "description": "Rúcola y Queso Parmesano",
    "price": 21500,
    "categoryId": "ensaladas",
    "tags": [
      " Vegetariano"
    ],
    "inStock": true,
    "likes": 160,
    "shares": 32,
    "bgGradient": "linear-gradient(160deg, #1b2c1a 0%, #0d170d 50%, #060a06 100%)"
  },
  {
    "id": "tiramisu-596",
    "name": "Tiramisú",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 343,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4364_1600199833_28410573-B5BF-4C89-8F81-AB2031BC6A26.jpeg"
  },
  {
    "id": "della-nonna-616",
    "name": "Della Nonna",
    "description": "Crema pastelera de Vainilla y Chocolate",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 384,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4365_1600199536_2770D2D9-D016-4CA3-B34A-3E1AAC26957B.jpeg"
  },
  {
    "id": "crostata-con-helado-532",
    "name": "Crostata con Helado",
    "description": "Tarteleta de Pera, o Manzana, o Naranjaacopañada con helado de Vainilla",
    "price": 19500,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 248,
    "shares": 71,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4366_1646700334_D4B9C0A2-FD00-48CD-AF3F-461FCCAFFAD0.jpeg"
  },
  {
    "id": "peras-al-vino-tinto-943",
    "name": "Peras al Vino Tinto",
    "description": "Con Crema Inglesa y Salsa de Frambuesa",
    "price": 15500,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 158,
    "shares": 18,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "bigne-121",
    "name": "Bigné",
    "description": "Profiteroles con Crema Pastelera",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 436,
    "shares": 56,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4368_1600199752_A8E375DC-58A2-4313-9331-C88F9D31BA89.jpeg"
  },
  {
    "id": "bigne-con-helado-y-chocolate-118",
    "name": "Bigné con Helado y Chocolate",
    "description": "Profiteroles rellenos con helado de Sabayón y bañados con Chocolate caliente",
    "price": 23500,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 143,
    "shares": 51,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "flan-752",
    "name": "Flan",
    "description": "Flan Casero",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 451,
    "shares": 71,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4370_1646707060_1B2DDF99-7A4D-4D3F-94F9-3948216C480E.jpeg"
  },
  {
    "id": "flan-con-dulce-de-leche-y-crem-131",
    "name": "Flan con Dulce de leche y Crema",
    "description": "Casero",
    "price": 15000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 425,
    "shares": 13,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "ensalada-de-frutas-718",
    "name": "Ensalada de Frutas",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 15000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 213,
    "shares": 24,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "ensalada-de-frutas-con-helado-642",
    "name": "Ensalada de Frutas con Helado",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 19500,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 350,
    "shares": 69,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "queso-y-dulce-264",
    "name": "Queso y Dulce",
    "description": "Batata o Membrillo",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 195,
    "shares": 73,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "balcarce-763",
    "name": "BALCARCE",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 21000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 392,
    "shares": 67,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/5217_1706205504_1E709634-6985-4D43-AB8B-B5009BEB6B90.jpeg"
  },
  {
    "id": "almendrado-565",
    "name": "Almendrado",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 15000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 301,
    "shares": 21,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "charlotte-766",
    "name": "Charlotte",
    "description": "Almendrado con Chocolate caliente",
    "price": 19000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 93,
    "shares": 45,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "affogato-in-cafe-768",
    "name": "Affogato in Café",
    "description": "Helado de Vainilla con Café Expresso",
    "price": 12000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 319,
    "shares": 72,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "cafe-110",
    "name": "Café",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 328,
    "shares": 85,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "cafe-doble-962",
    "name": "Café Doble",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 6500,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 92,
    "shares": 32,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "capuchino-292",
    "name": "Capuchino",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 6500,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 380,
    "shares": 84,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "tes-taragui-381",
    "name": "Tés Taragüi",
    "description": "Varios Sabores",
    "price": 4000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 131,
    "shares": 77,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "helados-542",
    "name": "Helados",
    "description": "Dulce de Leche, Vainilla, Chocolate, Limón, Frutilla, Sabayón",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 380,
    "shares": 16,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "helado-de-pistacchio-901",
    "name": "HELADO DE PISTACCHIO",
    "description": "ANTICHE TENTAZIONE",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 248,
    "shares": 29,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "helado-de-dulce-de-leche-983",
    "name": "HELADO DE DULCE DE LECHE",
    "description": "ANTICHE TENTAZIONE",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 314,
    "shares": 62,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "mousse-de-chocolate-310",
    "name": "MOUSSE de CHOCOLATE",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      " Postre Casero"
    ],
    "inStock": true,
    "likes": 117,
    "shares": 81,
    "bgGradient": "linear-gradient(160deg, #2a1a2b 0%, #150d17 50%, #0a060c 100%)"
  },
  {
    "id": "gaseosa-687",
    "name": "Gaseosa",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4200,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 460,
    "shares": 80,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "jugo-de-naranja-exprimido-122",
    "name": "Jugo de Naranja Exprimido",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 5000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 246,
    "shares": 34,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "agua-saborizada-754",
    "name": "Agua Saborizada",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 306,
    "shares": 26,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "agua-mineralizada-750-ml--564",
    "name": "Agua Mineralizada (750 ml)",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 438,
    "shares": 62,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "san-pellegrino-399",
    "name": "SAN PELLEGRINO",
    "description": "Italiana con gas",
    "price": 8000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 113,
    "shares": 37,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "aqua-panna-883",
    "name": "AQUA PANNA",
    "description": "Italiana sin gas",
    "price": 8000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 106,
    "shares": 59,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "imperial-lata-824",
    "name": "Imperial  lata",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 7500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 225,
    "shares": 42,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "heineken-lata-757",
    "name": "Heineken lata",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 7500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 439,
    "shares": 35,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "blue-moon-belgian-white-542",
    "name": "BLUE MOON BELGIAN WHITE",
    "description": "LATA CERVEZA BLANCA BELGA",
    "price": 8500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 99,
    "shares": 36,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "limonada-casera-428",
    "name": "Limonada Casera",
    "description": "Menta y Jengibre",
    "price": 4500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 73,
    "shares": 40,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "el-enemigo-malbec-843",
    "name": "EL ENEMIGO MALBEC",
    "description": "Bodega Catena Zapata",
    "price": 16000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 175,
    "shares": 81,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "pyros-appellation-syrah-529",
    "name": "PYROS APPELLATION SYRAH",
    "description": "Bodega Salentein Valle de Pedernal Pcia de San Juan",
    "price": 7200,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 363,
    "shares": 73,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "marco-zunino-malbec-763",
    "name": "Marco Zunino MALBEC",
    "description": "Bodega Marco Zunino",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 76,
    "shares": 34,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "deslumbrante-reserva-malbec-965",
    "name": "DESLUMBRANTE RESERVA MALBEC",
    "description": "Bodega FINCA PEDERNAL. SAN JUAN",
    "price": 20000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 220,
    "shares": 38,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "mi-terruno-cabernet-franc-160",
    "name": "Mi Terruño CABERNET FRANC",
    "description": "Mi Terruño",
    "price": 10000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 220,
    "shares": 60,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "el-enemigo-malbec-221",
    "name": "EL ENEMIGO MALBEC",
    "description": "BODEGA  ALEANNA  de Laura Catena Zapata y Alejandro Vigil",
    "price": 20000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 136,
    "shares": 66,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "armando-bonarda-869",
    "name": "ARMANDO BONARDA",
    "description": "BODEGA LA POSTA de LAURA CATENA",
    "price": 12500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 64,
    "shares": 28,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "deslumbrante-malbec-777",
    "name": "DESLUMBRANTE MALBEC",
    "description": "BODEGA FINCA PEDERNAL, SAN JUAN",
    "price": 13000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 289,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "nicasia-malbec-245",
    "name": "NICASIA MALBEC",
    "description": "BODEGA CATENA ZAPATA",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 459,
    "shares": 63,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "pyros-appellation-chardonnay-174",
    "name": "PYROS APPELLATION CHARDONNAY",
    "description": "Bodega Salentein",
    "price": 8000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 313,
    "shares": 83,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "colome-torrontes-289",
    "name": "Colomé TORRONTES",
    "description": "Bodega Colomé, Provincia de Salta",
    "price": 11000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 336,
    "shares": 25,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "altosur-sauvignon-blanc-306",
    "name": "ALTOSUR  Sauvignon Blanc",
    "description": "Bodega Finca Sophenia",
    "price": 7200,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 152,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "tomero-s-blanc-687",
    "name": "TOMERO S. BLANC",
    "description": "Bodega Altavista",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 505,
    "shares": 33,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "alamos-s-blanc-124",
    "name": "ALAMOS S. BLANC",
    "description": "Bodega CATENA ZAPATA",
    "price": 9000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 76,
    "shares": 29,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  },
  {
    "id": "latente-reserva-chardonnay-361",
    "name": "LATENTE RESERVA CHARDONNAY",
    "description": "Bodega Cuarto Surco, Valle de Uco Mendoza",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 62,
    "shares": 77,
    "bgGradient": "linear-gradient(160deg, #1a202c 0%, #0d1017 50%, #06080c 100%)"
  }
];

export const COMMENTS_MOCK: Comment[] = [
  {
    id: 'c1',
    dishId: 'mellanzane-della-casa-198',
    author: 'martu_foodie',
    text: '¡Increíble sabor! La masa fresca y los condimentos están a otro nivel ',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 1 h',
    likes: 19,
  },
  {
    id: 'c2',
    dishId: 'matambre-della-casa-636',
    author: 'lucas.pasta',
    text: 'Receta auténtica de la nonna. Venir a Il Matterello es viajar directo a Italia.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 3 h',
    likes: 12,
  },
  {
    id: 'c3',
    dishId: 'vitello-tonnato-143',
    author: 'caro_ba',
    text: 'Porción super abundante, ideal para disfrutar en familia un domingo ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 5 h',
    likes: 8,
  },
  {
    id: 'c4',
    dishId: 'lengua-alla-modena-588',
    author: 'franco.gourmet',
    text: 'El punto de cocción y la salsa fueron perfectos. 10/10.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 1 d',
    likes: 15,
  },
];
