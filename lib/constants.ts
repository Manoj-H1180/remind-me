export enum CollectionColors {
  sunset = "bg-gradient-to-r from-red-500 to-orange-500",
  poppy = "bg-gradient-to-r from-rose-500 to-red-500",
  rosebud = "bg-gradient-to-t from-violet-500 to-purple-500",
  snowflake = "bg-gradient-to-r from-indigo-500 to-cyan-500",
  candy = "bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500",
  firtree = "bg-gradient-to-r from-emerald-500 to-emerald-900",
  metal = "bg-gradient-to-r from-slate-500 to-slate-800",
  power = "bg-gradient-to-r from-violet-200 to-pink-200",
}

export type CollectionColor = keyof typeof CollectionColors;
