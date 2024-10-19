import { Icon } from '@radix-ui/react-select'
import {
  BookOpen,
  Grid,
  Heart,
  Home,
  PieChart,
  Plus,
  Settings,
  User,
  Utensils,
} from 'lucide-react'
import { FaComment } from 'react-icons/fa'
import { HiChatAlt, HiHome } from 'react-icons/hi'
import {
  MdFoodBank,
  MdOutlineComment,
  MdOutlineCommentBank,
  MdOutlineDashboard,
  MdOutlineFoodBank,
} from 'react-icons/md'

type navbarItemsType = [
  {
    label: string
    href: string
    Icon: object
  }
]

export const navbarItems: navbarItemsType = [
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

export const userButtonItems: navbarItemsType = [
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

export const dashboardItems: navbarItemsType = [
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
