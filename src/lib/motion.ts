// Shared easing curves — one "voice" for every animation on the site.
// EASE is a slow-in/slow-out expo used for reveals and curtains.
// EASE_OUT is a fast-start decel used for hover and micro-interactions.
export const EASE = [0.76, 0, 0.24, 1] as const
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const INTRO_KEY = "ak-intro-seen"
