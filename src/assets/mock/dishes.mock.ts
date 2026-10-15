import { Category } from '../../app/core/models/category.model';
import { Comment } from '../../app/core/models/comment.model';
import { Dish } from '../../app/core/models/dish.model';

export const CATEGORIES_MOCK: Category[] = [
  {
    "id": "antipasto",
    "label": "🥗 Antipasti"
  },
  {
    "id": "pastas",
    "label": "🍝 Pastas Caseras"
  },
  {
    "id": "risotto",
    "label": "🍚 Risotto"
  },
  {
    "id": "pesce-carne",
    "label": "🥩 Carnes y Pesce"
  },
  {
    "id": "ensaladas",
    "label": "🥬 Insalate"
  },
  {
    "id": "postres",
    "label": "🍮 Dolci / Postres"
  },
  {
    "id": "bebidas",
    "label": "🍷 Vinos y Bebidas"
  }
];

export const DISHES_MOCK: Dish[] = [
  {
    "id": "mellanzane-della-casa-444",
    "name": "Mellanzane della  Casa",
    "description": "Berenjenas en aceite con receta de la nonna",
    "price": 15500,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 427,
    "shares": 86,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4178_1708735229_e264c587-e05c-4454-ab79-d5978cd9e5dd.jpeg"
  },
  {
    "id": "matambre-della-casa-876",
    "name": "Matambre della Casa",
    "description": "Clásico matambre relleno",
    "price": 18500,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 277,
    "shares": 22,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4179_1599852640_3D872885-A119-4BEF-879E-37D6D6A7E861.jpeg"
  },
  {
    "id": "vitello-tonnato-315",
    "name": "Vitello Tonnato",
    "description": "Viteltoné",
    "price": 18500,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 136,
    "shares": 69,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "lengua-alla-modena-205",
    "name": "Lengua alla Módena",
    "description": "Lengua en mayonesa especial suave",
    "price": 18500,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 141,
    "shares": 21,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "carpaccio-di-manzo-976",
    "name": "Carpaccio di Manzo",
    "description": "Carpaccio de Lomo",
    "price": 22000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 135,
    "shares": 13,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4182_1646693185_7AA17D98-2456-4E3E-81C3-716AB60245CC.jpeg"
  },
  {
    "id": "caponatina-di-verdure-681",
    "name": "Caponatina di Verdure",
    "description": "Berenjenas, morrón y tomates con aceitunas",
    "price": 18000,
    "categoryId": "antipasto",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 406,
    "shares": 43,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "mellanzane-alla-parmigiana-346",
    "name": "Mellanzane alla Parmigiana",
    "description": "Beremjenas a la parmesana",
    "price": 19000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 234,
    "shares": 74,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4184_1653180721_2003B4BF-6954-4773-AC2D-9581A2ADAF4A.jpeg"
  },
  {
    "id": "verdure-gratinate-a-la-parmegi-104",
    "name": "Verdure Gratinate a la Parmegiana",
    "description": "Zucchinis, hinojo y tomates gratinados con parmesano",
    "price": 20000,
    "categoryId": "antipasto",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 467,
    "shares": 85,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "croquetas-de-verdura-735",
    "name": "Croquetas de verdura",
    "description": "Croquetas de espinaca rebozadas",
    "price": 17500,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 133,
    "shares": 13,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "bruschetta-di-pomodoro-y-basil-872",
    "name": "Bruschetta di Pomodoro y Basilico",
    "description": "Pan tostado con tomate y albahaca",
    "price": 17000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 126,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4187_1646693277_18E6C417-6473-459A-8070-849D5672FD7E.jpeg"
  },
  {
    "id": "olivas-alla-ascolana-131",
    "name": "Olivas alla Ascolana",
    "description": "Olivas rellenas rebozadas",
    "price": 18000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 288,
    "shares": 12,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "burrata-tricolor-441",
    "name": "Burrata Tricolor",
    "description": "Burrata, prosciutto italiano y rúcula",
    "price": 49000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 316,
    "shares": 70,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4189_1703641609_CA392162-C318-4D8F-8379-B3EBED495106.jpeg"
  },
  {
    "id": "burrata-con-rucula-948",
    "name": "Burrata con Rucula",
    "description": "Burrta con rucula",
    "price": 32000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 138,
    "shares": 13,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "mozzarella-capresse-886",
    "name": "Mozzarella Capresse",
    "description": "Mozzarella, tomates secos y albahaca",
    "price": 21000,
    "categoryId": "antipasto",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 457,
    "shares": 89,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "prosciutto-di-parma-862",
    "name": "Prosciutto di Parma",
    "description": "Jamon crudo italiano",
    "price": 43000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 430,
    "shares": 50,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "antipasto-completo-278",
    "name": "Antipasto Completo",
    "description": "FREDDO: Sobresatta, parmesano, mozzarella, mortadela, tomates secos, berenjenas, olivas griegas, lengua, aji en aceite, jardineraCALDO: Caponatina,  tomates gratinados, zucchinis, berenjena parmesana, hinojos, croquetas de verdura.",
    "price": 31000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 89,
    "shares": 58,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4193_1706205251_IMG_4783.jpeg"
  },
  {
    "id": "langostinos-crocantes-con-pank-734",
    "name": "LANGOSTINOS CROCANTES con Panko",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 268,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "porotos-picantes-y-gigantes-406",
    "name": "Porotos PIcantes y Gigantes",
    "description": "Pallares",
    "price": 13000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 227,
    "shares": 16,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "mortadela-con-pistacchio-715",
    "name": "MORTADELA con PISTACCHIO",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 17000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 229,
    "shares": 31,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "sobreasatta-959",
    "name": "Sobreasatta",
    "description": "como la sopresata, pero de puro cerdo",
    "price": 17000,
    "categoryId": "antipasto",
    "tags": [
      "🇮🇹 Antipasto Tradicional"
    ],
    "inStock": true,
    "likes": 209,
    "shares": 36,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "gnocchi-131",
    "name": "Gnocchi",
    "description": "(sólo los días 29)",
    "price": 29200,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 156,
    "shares": 32,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4194_1653180584_C4A9E7FB-7FEA-4BCD-B902-50F39BD00F1D.jpeg"
  },
  {
    "id": "tagliatelle-blanco-putanesca-182",
    "name": "Tagliatelle Blanco Putanesca",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25300,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 92,
    "shares": 38,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4195_1599853933_DD523C64-D79A-4E4E-A3BE-457E86DA942B.jpeg"
  },
  {
    "id": "tagliolini-fruti-di-mare-205",
    "name": "Tagliolini Fruti di Mare",
    "description": "Con langostinos, calamarettis y mejillones",
    "price": 32000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "🐟 Frutos de Mar"
    ],
    "inStock": true,
    "likes": 491,
    "shares": 93,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4196_1643334446_42886932-0BFF-45A6-A9CE-93C16AF748F4.jpeg"
  },
  {
    "id": "tagliatelle-alla-rucola-937",
    "name": "Tagliatelle alla Rucola",
    "description": "Tomates secos, rucula fresca",
    "price": 28500,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 308,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4197_1599852992_C64461E5-FFFA-4F1F-9876-ACE797A5B9EB.jpeg"
  },
  {
    "id": "tagliatelle-bianchi-e-gamberi--787",
    "name": "Tagliatelle Bianchi e Gamberi, Zuccini e Pomodorini",
    "description": "Con langostinos, zapallitos y tomate cherry",
    "price": 32000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "⭐ Especialidad de la casa",
      "🐟 Frutos de Mar"
    ],
    "inStock": true,
    "likes": 63,
    "shares": 88,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4198_1599757604_88E38702-C21C-44AD-87AF-77077A42ED29.jpeg"
  },
  {
    "id": "pappardelle-ragu-165",
    "name": "Pappardelle Ragú",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 30000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 177,
    "shares": 93,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4199_1599853726_2DC8A59A-1EA1-47D3-8018-E1471FCFBC1D.jpeg"
  },
  {
    "id": "ravioli-genovesi-al-tuco-722",
    "name": "Ravioli Genovesi, al tuco",
    "description": "De carne de vaca, cerdo, pollo y verdura con tuco",
    "price": 30000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 240,
    "shares": 43,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4200_1599855048_FCC5B87F-E639-498D-B867-F3334CCA2449.jpeg"
  },
  {
    "id": "ravioli-de-verdura-e-ricota-al-717",
    "name": "Ravioli de Verdura e Ricota, al Fileto",
    "description": "De verdura, ricota y queso con fileto",
    "price": 28000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 457,
    "shares": 83,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4201_1599853350_243F5D06-A0B9-4E9A-8711-F2F526C22C1C.jpeg"
  },
  {
    "id": "ravioli-verdi-di-zucca-al-burr-310",
    "name": "Ravioli Verdi di Zucca, al Burro e Salvia",
    "description": "De calabaza, a la manteca y salvia",
    "price": 28000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 72,
    "shares": 49,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4202_1599756065_4B27FA0A-70A7-4B50-8869-8C146B04BA87.jpeg"
  },
  {
    "id": "ravioli-di-funghi-e-espinaci-a-586",
    "name": "Ravioli di Funghi e Espinaci alla Panna",
    "description": "De espinaca y hongos a la crema",
    "price": 31000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 267,
    "shares": 16,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4203_1600199664_1ADB610F-B6CE-4E53-9824-DBF9B933BE74.jpeg"
  },
  {
    "id": "fazzoletti-di-salmone-alla-pan-609",
    "name": "Fazzoletti di Salmone alla Panna e Zucchini",
    "description": "De Salmon fresco a la crema con zucchini",
    "price": 33000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "🐟 Frutos de Mar"
    ],
    "inStock": true,
    "likes": 241,
    "shares": 82,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4204_1703985173_943FF83E-DF7C-4CDD-AD28-60F94F37BF34.jpeg"
  },
  {
    "id": "fazzoletti-alla-carbonara-347",
    "name": "Fazzoletti alla Carbonara",
    "description": "De mozzarella, jamon y queso y salsa carbonara",
    "price": 29000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 245,
    "shares": 35,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4205_1599756257_C3D72A89-C62B-4B81-98E5-EA8DF7BB1277.jpeg"
  },
  {
    "id": "tortelli-bianchi-burro-fuso-al-827",
    "name": "Tortelli Bianchi, Burro fuso all Aglio",
    "description": "De verdura y queso a la manteca quemada y ajo",
    "price": 32000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 289,
    "shares": 96,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4206_1599853231_6EB22CAC-C528-4A9D-98E8-862BBC525C6F.jpeg"
  },
  {
    "id": "tortelli-verdi-alla-panna-grat-451",
    "name": "Tortelli Verdi, alla Panna Gratinati",
    "description": "De queso gruyere, a la crema gratinados",
    "price": 32500,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 219,
    "shares": 32,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4207_1646700008_48E4B2F6-4B90-4110-B9FB-9D1FDB3E3D43.jpeg"
  },
  {
    "id": "lasagna-bolognese-359",
    "name": "Lasagna Bolognese",
    "description": "Rellena de Ragú, salsa blanca y queso",
    "price": 31000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 181,
    "shares": 50,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4208_1599756880_AE37B68E-88D6-4288-B501-AE57BCCC3F94.jpeg"
  },
  {
    "id": "lasagna-di-vegetale-862",
    "name": "Lasagna di Vegetale",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 29000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera",
      "⭐ Especialidad de la casa"
    ],
    "inStock": true,
    "likes": 105,
    "shares": 76,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4209_1599853513_953A0303-2D1F-4933-B80D-69B98DD70790.jpeg"
  },
  {
    "id": "canneloni-con-salsa-blanca-y-f-324",
    "name": "Canneloni con salsa blanca y fileto",
    "description": "De verdura y carne",
    "price": 29000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 398,
    "shares": 38,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4210_1653182330_C583BD61-B8DE-4D44-8A8E-0D268AC2E972.jpeg"
  },
  {
    "id": "tortellini-brodo-841",
    "name": "Tortellini Brodo",
    "description": "De carne en caldo natural",
    "price": 30000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 327,
    "shares": 60,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4211_1599851597_88E59B96-259C-447A-8AA4-74A505262751.jpeg"
  },
  {
    "id": "pasta-italiana-710",
    "name": "Pasta Italiana",
    "description": "Spaghetti, Fusilli, Penne Rigate.Con salsa a Elección Para CELÍACOS",
    "price": 26000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 400,
    "shares": 29,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4212_1599757445_8846BC5A-8059-4EFC-933F-2A30C7901A89.jpeg"
  },
  {
    "id": "tagliolini-174",
    "name": "Tagliolini",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 29200,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 422,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4481_1653180009_91EB7BFC-09A8-415B-8A4B-BBE6FF7FB9CC.jpeg"
  },
  {
    "id": "pappardelle-799",
    "name": "Pappardelle",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 29200,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 76,
    "shares": 54,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4482_1599854099_52FFF925-C472-4BCF-935E-3B71018EFB6C.jpeg"
  },
  {
    "id": "ragu-224",
    "name": "Ragú",
    "description": "Carne de Vaca y Cerdo a cuchillo y un toque de tomate",
    "price": 21000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 159,
    "shares": 34,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "estofado-de-carne-869",
    "name": "Estofado de Carne",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 431,
    "shares": 13,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "estofado-de-salsiccia-949",
    "name": "Estofado de Salsiccia",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 25000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 169,
    "shares": 85,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "ragu-116",
    "name": "Ragú",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 14000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 384,
    "shares": 20,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281729?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "estofado-425",
    "name": "Estofado",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 14000,
    "categoryId": "pastas",
    "tags": [
      "🍝 Pasta Casera"
    ],
    "inStock": true,
    "likes": 216,
    "shares": 42,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "fruti-di-mare-178",
    "name": "Fruti di Mare",
    "description": "Risotto con langostinos, calamaretis y mejillones",
    "price": 39000,
    "categoryId": "risotto",
    "tags": [
      "🐟 Frutos de Mar",
      "🍚 Risotto al Dente"
    ],
    "inStock": true,
    "likes": 393,
    "shares": 44,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "nero-e-gamberi-257",
    "name": "Nero e Gamberi",
    "description": "Risotto en tinta de calamar y langostinos",
    "price": 39000,
    "categoryId": "risotto",
    "tags": [
      "🐟 Frutos de Mar",
      "🍚 Risotto al Dente"
    ],
    "inStock": true,
    "likes": 483,
    "shares": 57,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4231_1599849303_F01C0A46-645F-4D71-A116-5F0E82D612F2.jpeg"
  },
  {
    "id": "al-funghi-583",
    "name": "Al Funghi",
    "description": "Risotto con hongos",
    "price": 35000,
    "categoryId": "risotto",
    "tags": [
      "🍚 Risotto al Dente"
    ],
    "inStock": true,
    "likes": 421,
    "shares": 90,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "alla-milanese-576",
    "name": "Alla Milanese",
    "description": "Risotto con azafran",
    "price": 35000,
    "categoryId": "risotto",
    "tags": [
      "🍚 Risotto al Dente"
    ],
    "inStock": true,
    "likes": 153,
    "shares": 79,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4233_1643330582_70268CB9-CD47-44F1-B710-B1B470A47E2B.jpeg"
  },
  {
    "id": "azul-378",
    "name": "AZUL",
    "description": "Queso Patagonzola (Queseia Ventimiglia)",
    "price": 36500,
    "categoryId": "risotto",
    "tags": [
      "🍚 Risotto al Dente"
    ],
    "inStock": true,
    "likes": 172,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "salmone-alla-griglia-587",
    "name": "SALMONE ALLA GRIGLIA",
    "description": "Con manteca de lima acompañado de caponatina de verduras",
    "price": 39500,
    "categoryId": "pesce-carne",
    "tags": [
      "🐟 Frutos de Mar"
    ],
    "inStock": true,
    "likes": 188,
    "shares": 82,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "trotta-all-burro-con-anneto-e--923",
    "name": "Trotta all Burro con Anneto e Capperi",
    "description": "Trucha a la manteca de eneldo con alcaparras y papas al natural",
    "price": 36000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 113,
    "shares": 40,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4235_1708735384_17085663-73ad-434f-9a0a-8114c8e1b136.jpeg"
  },
  {
    "id": "abadejo-della-giornatta-771",
    "name": "ABADEJO DELLA GIORNATTA",
    "description": "COCINADO EN SUS JUGOS CON PAPAS NATURAL, O VERDURAS",
    "price": 36500,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 468,
    "shares": 89,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "ojo-de-bife-alla-grilla-649",
    "name": "OJO DE BIFE ALLA GRILLA",
    "description": "Con chimi de ajo y perejil y papas baston",
    "price": 45000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 253,
    "shares": 35,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "filetto-di-manzo-al-rosmarino-440",
    "name": "Filetto di Manzo al Rosmarino",
    "description": "Lomo al romero con papas",
    "price": 39000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 71,
    "shares": 35,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4237_1610828045_28B1D97D-46ED-46B8-8178-C5599BB43865.jpeg"
  },
  {
    "id": "tagliata-de-bife-de-chorizo-221",
    "name": "TAGLIATA DE BIFE DE CHORIZO",
    "description": "Entrecot Grillado con guarnición de caponatina y rúcula",
    "price": 44000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 204,
    "shares": 67,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4238_1750618655_7e90a1c6-97da-41e7-afbf-d9741ba358c4.jpeg"
  },
  {
    "id": "milanesa-a-la-napolitana-de-oj-289",
    "name": "MILANESA A LA NAPOLITANA DE OJO DE BIFE",
    "description": "Con jamón, muzzarella y pomodoro c/guarnición",
    "price": 39000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 331,
    "shares": 83,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4239_1610828130_7BC79297-8B31-45E8-94E0-25961D3141D8.jpeg"
  },
  {
    "id": "solomillo-de-cerdo-con-ciruela-760",
    "name": "Solomillo de Cerdo con Ciruelas y Manzana",
    "description": "Lomo de cerdo a la ciruela con manzanas",
    "price": 35000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 245,
    "shares": 34,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4240_1599854491_95FB67BA-20A7-4E4E-89F9-2B1B0ED7E28D.jpeg"
  },
  {
    "id": "tagliatta-de-pollo-con-rucola-299",
    "name": "Tagliatta de Pollo con Rucola",
    "description": "Láminas de pollo en reducción de aceto, cubiertas de rúcula",
    "price": 31000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 139,
    "shares": 25,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "milanesa-de-ojo-de-bife-381",
    "name": "MILANESA DE OJO DE BIFE",
    "description": "Acompañada con pasta, Tagliolini al burro",
    "price": 35000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 150,
    "shares": 32,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "milanesa-de-ojo-de-bife-porten-886",
    "name": "MILANESA DE OJO DE BIFE PORTEÑA",
    "description": "CON PAPAS FRITAS Y HUEVO FRITO",
    "price": 35000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 318,
    "shares": 28,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "picanha-con-guarcicion-para-2--495",
    "name": "PICANHA CON GUARCICION PARA 2 PERSONAS",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 80000,
    "categoryId": "pesce-carne",
    "tags": [
      "🥩 Parrilla"
    ],
    "inStock": true,
    "likes": 218,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "di-salmone-affumicato-753",
    "name": "Di Salmone Affumicato",
    "description": "Salmón ahumado, rúcula, tomates secos, alcaparras, olivas griegas, queso parmesano y alineo de queso crema y eneldo",
    "price": 30000,
    "categoryId": "ensaladas",
    "tags": [
      "🐟 Frutos de Mar",
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 310,
    "shares": 58,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4242_1599757658_664EF06E-AC49-428B-BF8F-E53980DD4531.jpeg"
  },
  {
    "id": "di-tonno-976",
    "name": "Di Tonno",
    "description": "Bocconcini de mozzarella, atun, huevo duro, cherry y olivas negras",
    "price": 26000,
    "categoryId": "ensaladas",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 101,
    "shares": 85,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4243_1599852859_DF30E58F-6E55-4AA9-A428-1CAC9619C855.jpeg"
  },
  {
    "id": "di-campagna-139",
    "name": "Di Campagna",
    "description": "Tiritas de pollos grilladas, aderezo de la casa. tomates secos, parmesano, rúculas, lechugas y almendras tostadas",
    "price": 27000,
    "categoryId": "ensaladas",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 328,
    "shares": 33,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "capresse-409",
    "name": "Capresse",
    "description": "Tomate, mozzarella y albahaca",
    "price": 26000,
    "categoryId": "ensaladas",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 136,
    "shares": 37,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4245_1646704082_EA1CB14D-C23A-41D9-BB7F-0676B7C6D472.jpeg"
  },
  {
    "id": "rupepa-816",
    "name": "Rupepa",
    "description": "Rucula, pera y parmesano",
    "price": 23500,
    "categoryId": "ensaladas",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 193,
    "shares": 66,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "rucola-504",
    "name": "Rúcola",
    "description": "Rúcola y Queso Parmesano",
    "price": 21500,
    "categoryId": "ensaladas",
    "tags": [
      "🌿 Vegetariano"
    ],
    "inStock": true,
    "likes": 81,
    "shares": 43,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "tiramisu-787",
    "name": "Tiramisú",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 83,
    "shares": 71,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4364_1600199833_28410573-B5BF-4C89-8F81-AB2031BC6A26.jpeg"
  },
  {
    "id": "della-nonna-947",
    "name": "Della Nonna",
    "description": "Crema pastelera de Vainilla y Chocolate",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 159,
    "shares": 20,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4365_1600199536_2770D2D9-D016-4CA3-B34A-3E1AAC26957B.jpeg"
  },
  {
    "id": "crostata-con-helado-962",
    "name": "Crostata con Helado",
    "description": "Tarteleta de Pera, o Manzana, o Naranjaacopañada con helado de Vainilla",
    "price": 19500,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 196,
    "shares": 90,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4366_1646700334_D4B9C0A2-FD00-48CD-AF3F-461FCCAFFAD0.jpeg"
  },
  {
    "id": "peras-al-vino-tinto-572",
    "name": "Peras al Vino Tinto",
    "description": "Con Crema Inglesa y Salsa de Frambuesa",
    "price": 15500,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 489,
    "shares": 18,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "bigne-653",
    "name": "Bigné",
    "description": "Profiteroles con Crema Pastelera",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 172,
    "shares": 14,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4368_1600199752_A8E375DC-58A2-4313-9331-C88F9D31BA89.jpeg"
  },
  {
    "id": "bigne-con-helado-y-chocolate-158",
    "name": "Bigné con Helado y Chocolate",
    "description": "Profiteroles rellenos con helado de Sabayón y bañados con Chocolate caliente",
    "price": 23500,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 108,
    "shares": 44,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "flan-414",
    "name": "Flan",
    "description": "Flan Casero",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 479,
    "shares": 51,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/4370_1646707060_1B2DDF99-7A4D-4D3F-94F9-3948216C480E.jpeg"
  },
  {
    "id": "flan-con-dulce-de-leche-y-crem-916",
    "name": "Flan con Dulce de leche y Crema",
    "description": "Casero",
    "price": 15000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 235,
    "shares": 26,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "ensalada-de-frutas-659",
    "name": "Ensalada de Frutas",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 15000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 170,
    "shares": 36,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "ensalada-de-frutas-con-helado-714",
    "name": "Ensalada de Frutas con Helado",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 19500,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 408,
    "shares": 25,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "queso-y-dulce-527",
    "name": "Queso y Dulce",
    "description": "Batata o Membrillo",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 62,
    "shares": 86,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "balcarce-897",
    "name": "BALCARCE",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 21000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 393,
    "shares": 35,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://www.todoqr.com/uploads/fotos/5217_1706205504_1E709634-6985-4D43-AB8B-B5009BEB6B90.jpeg"
  },
  {
    "id": "almendrado-474",
    "name": "Almendrado",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 15000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 103,
    "shares": 74,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "charlotte-651",
    "name": "Charlotte",
    "description": "Almendrado con Chocolate caliente",
    "price": 19000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 125,
    "shares": 19,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "affogato-in-cafe-652",
    "name": "Affogato in Café",
    "description": "Helado de Vainilla con Café Expresso",
    "price": 12000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 193,
    "shares": 74,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "cafe-444",
    "name": "Café",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 487,
    "shares": 21,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "cafe-doble-135",
    "name": "Café Doble",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 6500,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 431,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "capuchino-631",
    "name": "Capuchino",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 6500,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 233,
    "shares": 96,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "tes-taragui-327",
    "name": "Tés Taragüi",
    "description": "Varios Sabores",
    "price": 4000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 372,
    "shares": 44,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "helados-554",
    "name": "Helados",
    "description": "Dulce de Leche, Vainilla, Chocolate, Limón, Frutilla, Sabayón",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 474,
    "shares": 79,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "helado-de-pistacchio-836",
    "name": "HELADO DE PISTACCHIO",
    "description": "ANTICHE TENTAZIONE",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 256,
    "shares": 78,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "helado-de-dulce-de-leche-898",
    "name": "HELADO DE DULCE DE LECHE",
    "description": "ANTICHE TENTAZIONE",
    "price": 14000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 427,
    "shares": 18,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "mousse-de-chocolate-110",
    "name": "MOUSSE de CHOCOLATE",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 17000,
    "categoryId": "postres",
    "tags": [
      "🍮 Postre Casero"
    ],
    "inStock": true,
    "likes": 164,
    "shares": 61,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "gaseosa-180",
    "name": "Gaseosa",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4200,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 98,
    "shares": 82,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "jugo-de-naranja-exprimido-809",
    "name": "Jugo de Naranja Exprimido",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 5000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 289,
    "shares": 26,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "agua-saborizada-658",
    "name": "Agua Saborizada",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 95,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "agua-mineralizada-750-ml--535",
    "name": "Agua Mineralizada (750 ml)",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 4000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 163,
    "shares": 47,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "san-pellegrino-922",
    "name": "SAN PELLEGRINO",
    "description": "Italiana con gas",
    "price": 8000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 347,
    "shares": 64,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "aqua-panna-458",
    "name": "AQUA PANNA",
    "description": "Italiana sin gas",
    "price": 8000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 462,
    "shares": 14,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "imperial-lata-588",
    "name": "Imperial  lata",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 7500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 223,
    "shares": 62,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "heineken-lata-412",
    "name": "Heineken lata",
    "description": "Elaborado artesanalmente con recetas tradicionales italianas.",
    "price": 7500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 258,
    "shares": 55,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "blue-moon-belgian-white-427",
    "name": "BLUE MOON BELGIAN WHITE",
    "description": "LATA CERVEZA BLANCA BELGA",
    "price": 8500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 393,
    "shares": 91,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "limonada-casera-551",
    "name": "Limonada Casera",
    "description": "Menta y Jengibre",
    "price": 4500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 139,
    "shares": 74,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "el-enemigo-malbec-649",
    "name": "EL ENEMIGO MALBEC",
    "description": "Bodega Catena Zapata",
    "price": 16000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 309,
    "shares": 82,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "pyros-appellation-syrah-704",
    "name": "PYROS APPELLATION SYRAH",
    "description": "Bodega Salentein Valle de Pedernal Pcia de San Juan",
    "price": 7200,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 487,
    "shares": 48,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "marco-zunino-malbec-182",
    "name": "Marco Zunino MALBEC",
    "description": "Bodega Marco Zunino",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 256,
    "shares": 59,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "deslumbrante-reserva-malbec-830",
    "name": "DESLUMBRANTE RESERVA MALBEC",
    "description": "Bodega FINCA PEDERNAL. SAN JUAN",
    "price": 20000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 294,
    "shares": 69,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "mi-terruno-cabernet-franc-830",
    "name": "Mi Terruño CABERNET FRANC",
    "description": "Mi Terruño",
    "price": 10000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 257,
    "shares": 50,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "el-enemigo-malbec-262",
    "name": "EL ENEMIGO MALBEC",
    "description": "BODEGA  ALEANNA  de Laura Catena Zapata y Alejandro Vigil",
    "price": 20000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 88,
    "shares": 92,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "armando-bonarda-608",
    "name": "ARMANDO BONARDA",
    "description": "BODEGA LA POSTA de LAURA CATENA",
    "price": 12500,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 430,
    "shares": 39,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "deslumbrante-malbec-646",
    "name": "DESLUMBRANTE MALBEC",
    "description": "BODEGA FINCA PEDERNAL, SAN JUAN",
    "price": 13000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 475,
    "shares": 51,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "nicasia-malbec-724",
    "name": "NICASIA MALBEC",
    "description": "BODEGA CATENA ZAPATA",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 95,
    "shares": 77,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "pyros-appellation-chardonnay-371",
    "name": "PYROS APPELLATION CHARDONNAY",
    "description": "Bodega Salentein",
    "price": 8000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 451,
    "shares": 57,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "colome-torrontes-111",
    "name": "Colomé TORRONTES",
    "description": "Bodega Colomé, Provincia de Salta",
    "price": 11000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 319,
    "shares": 65,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "altosur-sauvignon-blanc-707",
    "name": "ALTOSUR  Sauvignon Blanc",
    "description": "Bodega Finca Sophenia",
    "price": 7200,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 320,
    "shares": 85,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "tomero-s-blanc-337",
    "name": "TOMERO S. BLANC",
    "description": "Bodega Altavista",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 357,
    "shares": 17,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "alamos-s-blanc-329",
    "name": "ALAMOS S. BLANC",
    "description": "Bodega CATENA ZAPATA",
    "price": 9000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 205,
    "shares": 83,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1080&auto=format&fit=crop&q=85"
  },
  {
    "id": "latente-reserva-chardonnay-610",
    "name": "LATENTE RESERVA CHARDONNAY",
    "description": "Bodega Cuarto Surco, Valle de Uco Mendoza",
    "price": 12000,
    "categoryId": "bebidas",
    "tags": [],
    "inStock": true,
    "likes": 62,
    "shares": 80,
    "bgGradient": "linear-gradient(160deg,#2a1f1a,#140e0a 70%)",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1080&auto=format&fit=crop&q=85"
  }
];

export const COMMENTS_MOCK: Comment[] = [
  {
    id: 'c1',
    dishId: 'mellanzane-della-casa-444',
    author: 'martu_foodie',
    text: '¡Increíble sabor! La masa fresca y los condimentos están a otro nivel 🤤👏',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 1 h',
    likes: 19,
  },
  {
    id: 'c2',
    dishId: 'matambre-della-casa-876',
    author: 'lucas.pasta',
    text: 'Receta auténtica de la nonna. Venir a Il Matterello es viajar directo a Italia.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 3 h',
    likes: 12,
  },
  {
    id: 'c3',
    dishId: 'vitello-tonnato-315',
    author: 'caro_ba',
    text: 'Porción super abundante, ideal para disfrutar en familia un domingo 🍕🍝',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 5 h',
    likes: 8,
  },
  {
    id: 'c4',
    dishId: 'lengua-alla-modena-205',
    author: 'franco.gourmet',
    text: 'El punto de cocción y la salsa fueron perfectos. 10/10.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    timeAgo: 'hace 1 d',
    likes: 15,
  },
];
