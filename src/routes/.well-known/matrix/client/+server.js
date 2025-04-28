export const prerender = true;

export function GET() {
	const data = {
		'org.matrix.msc4143.rtc_foci': [
			{
				type: 'livekit',
				livekit_service_url: 'https://livekit-jwt.call.matrix.org'
			}
		],
		'm.homeserver': { base_url: 'https://matrix.tostu.me:443' }
	};

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
