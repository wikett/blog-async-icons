import * as solid from '@heroicons/vue/24/solid'
import * as custom from '../components/Icons/Custom'

export type CustomIconName = keyof typeof custom
export type HeroIconName = keyof typeof solid 
export type IconName = CustomIconName | HeroIconName
export type IconType = 'solid' | 'outline' | 'custom'

