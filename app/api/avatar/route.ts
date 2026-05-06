import { NextRequest, NextResponse } from 'next/server';
import { getAvatar, AvatarVariant } from '@/lib/avatar-store';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const key = searchParams.get('key') ?? 'jungkook_profile';
  const variant = (searchParams.get('variant') ?? 'default') as AvatarVariant;

  const url = getAvatar(key, variant);
  return NextResponse.json({ url });
}
