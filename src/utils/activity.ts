import type { Activity } from '../data/types';

const YOUTUBE_ID_PATTERN =
	/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/;

export function getYoutubeVideoId(url: string): string | null {
	return url.match(YOUTUBE_ID_PATTERN)?.[1] ?? null;
}

export function resolveActivityCover(activity: Activity): string {
	if (activity.cover) return activity.cover;

	const youtubeId = activity.url ? getYoutubeVideoId(activity.url) : null;
	if (youtubeId) return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

	return '/activities/default.svg';
}

export function resolveActivityUrlLabel(activity: Activity): string {
	if (activity.urlLabel) return activity.urlLabel;
	if (!activity.url) return '';

	const { url } = activity;
	if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube';
	if (url.includes('t.me')) return 'Telegram';

	try {
		return new URL(url).hostname.replace(/^www\./, '');
	} catch {
		return 'Ссылка';
	}
}
