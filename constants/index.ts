import {
  BookOpen,
  Grid,
  Heart,
  Home,
  PieChart,
  Plus,
  Settings,
  Utensils,
} from 'lucide-react'

export const recipesData = [
  {
    id: 'rec1',
    title: 'Spaghetti Bolognese',
    description:
      'Un délicieux plat de pâtes avec une sauce bolognaise riche et savoureuse.',
    ingredients: [
      '500g de spaghetti',
      '250g de viande hachée',
      '1 oignon',
      "2 gousses d'ail",
      '400g de tomates concassées',
      "Sel, poivre, huile d'olive",
    ],
    steps: [
      "Faire cuire les spaghetti dans une casserole d'eau bouillante salée.",
      "Dans une poêle, faire revenir l'oignon et l'ail hachés dans de l'huile d'olive.",
      "Ajouter la viande hachée et cuire jusqu'à ce qu'elle soit dorée.",
      'Ajouter les tomates concassées, le sel et le poivre, puis laisser mijoter pendant 20 minutes.',
      'Servir la sauce bolognaise sur les spaghetti et déguster.',
    ],
    image: 'https://images.unsplash.com/photo-1604908177227-f862cd2b9f97',
    userId: 'user1',
    createdAt: '2024-10-19T12:34:56Z',
    updatedAt: '2024-10-19T12:34:56Z',
    likes: 120,
    ratings: [
      { userId: 'user1', rating: 4 },
      { userId: 'user2', rating: 5 },
      { userId: 'user3', rating: 4 },
    ],
    comments: [
      { userId: 'user2', text: "Un plat délicieux, j'adore !" },
      { userId: 'user3', text: 'Facile à préparer et très bon.' },
    ],
    favorite: false,
  },
  {
    id: 'rec2',
    title: 'Tarte aux pommes',
    description:
      'Une tarte délicieuse aux pommes caramélisées, parfaite pour le dessert.',
    ingredients: [
      '4 pommes',
      '1 pâte brisée',
      '50g de beurre',
      '100g de sucre',
      'Cannelle (facultatif)',
    ],
    steps: [
      'Préchauffer le four à 180°C.',
      'Éplucher et couper les pommes en fines tranches.',
      'Faire fondre le beurre dans une poêle et ajouter le sucre pour caraméliser légèrement.',
      'Disposer les pommes sur la pâte brisée dans un moule à tarte.',
      'Verser le mélange beurre et sucre sur les pommes et saupoudrer de cannelle.',
      "Enfourner pendant 30 minutes jusqu'à ce que la tarte soit dorée.",
    ],
    image: 'https://images.unsplash.com/photo-1563805042-7684bf1074d4',
    userId: 'user2',
    createdAt: '2024-10-18T14:23:45Z',
    updatedAt: '2024-10-18T14:23:45Z',
    likes: 85,
    ratings: [
      { userId: 'user1', rating: 4 },
      { userId: 'user3', rating: 5 },
    ],
    comments: [
      { userId: 'user1', text: 'Délicieuse, je la referai !' },
      { userId: 'user3', text: 'Les pommes étaient bien caramélisées.' },
    ],
    favorite: true,
  },
  {
    id: 'rec3',
    title: 'Salade César',
    description:
      'Une salade fraîche et croquante avec du poulet grillé, du parmesan et une sauce crémeuse.',
    ingredients: [
      '1 laitue romaine',
      '150g de poulet grillé',
      '50g de parmesan',
      'Croûtons',
      'Sauce César (mayonnaise, parmesan, ail, citron, anchois)',
    ],
    steps: [
      'Laver et couper la laitue romaine.',
      'Griller le poulet et le couper en morceaux.',
      "Préparer la sauce César en mélangeant la mayonnaise, le parmesan râpé, l'ail, le jus de citron et les anchois.",
      'Dans un grand bol, mélanger la laitue, le poulet, les croûtons et la sauce.',
      'Parsemer de parmesan râpé avant de servir.',
    ],
    image: 'https://images.unsplash.com/photo-1578926287929-1ca6c7ed62f6',
    userId: 'user3',
    createdAt: '2024-10-17T10:12:30Z',
    updatedAt: '2024-10-17T10:12:30Z',
    likes: 65,
    ratings: [
      { userId: 'user1', rating: 2 },
      { userId: 'user2', rating: 4 },
    ],
    comments: [
      { userId: 'user1', text: 'Parfaite pour un repas léger.' },
      { userId: 'user2', text: 'Le poulet grillé était succulent.' },
    ],
    favorite: false,
  },
]

export type RatingRecipeType = {
  userId: string
  rating: number
}

export type CommentRecipeType = {
  userId: string
  text: string
}

export type RecipeType = {
  id: string
  title: string
  slug: string
  description: string
  image: string
  ratings: RatingRecipeType[]
  favorite: boolean
  likes: number
  comments: CommentRecipeType[]
}

export const navbarItems = [
  {
    label: 'Recipes',
    href: '/recipes',
    Icon: BookOpen,
  },
  {
    label: 'Categories',
    href: '/categories',
    Icon: Utensils,
  },
  {
    label: 'Add recipe',
    href: '/add-recipe',
    Icon: Plus,
  },
  {
    label: 'Favorite',
    href: '/favorites',
    Icon: Heart,
  },
]

export const sidebarItems = [
  {
    label: 'Home',
    href: '/',
    Icon: Home,
  },
  {
    label: 'Recipes',
    href: '/recipes',
    Icon: BookOpen,
  },
  {
    label: 'Categories',
    href: '/categories',
    Icon: Utensils,
  },
  {
    label: 'Add recipe',
    href: '/add-recipe',
    Icon: Plus,
  },
  {
    label: 'Favorite',
    href: '/favorites',
    Icon: Heart,
  },
]

export const userButtonItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    Icon: Grid,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    Icon: Settings,
  },
]

export const dashboardItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    Icon: Grid,
  },
  {
    label: 'My recipes',
    href: '/dashboard/my-recipes',
    Icon: BookOpen,
  },
  {
    label: 'My favorites',
    href: '/dashboard/my-favorites',
    Icon: Heart,
  },
  {
    label: 'Add Recette',
    href: '/dashboard/add-recipe',
    Icon: Plus,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    Icon: Settings,
  },
  {
    label: 'My Statistics',
    href: '/dashboard/my-statistics',
    Icon: PieChart,
  },
]

export const createSlug = (text: string) => {
  if (!text) return null

  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]+/g, '')
    .replace(/[\s_.]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/[--]+/g, '-')
    .replace(/[__]+/g, '-')
    .replace(/[..]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim()
}
