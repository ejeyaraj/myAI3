export type AvatarVariant = 'default' | 'golden' | 'gcf';

type AvatarEntry = {
  default: string;
  golden: string;
  gcf: string;
};

// Add your actual image files to public/avatars/ and update the paths below.
const avatarStore: Record<string, AvatarEntry> = {
  jungkook_profile: {
    default: '/avatars/jungkook-default.jpg',
    golden: '/avatars/jungkook-golden.jpg',
    gcf: '/avatars/jungkook-gcf.jpg',
  },
};

const FALLBACK = '/logo.png';

export function getAvatar(key: string, variant: AvatarVariant = 'default'): string {
  const entry = avatarStore[key];
  if (!entry) return FALLBACK;
  return entry[variant] ?? entry.default ?? FALLBACK;
}
