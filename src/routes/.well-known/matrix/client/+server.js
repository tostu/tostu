export const prerender = true;

export function GET() {
	const data = {
		'm.homeserver': { base_url: 'https://matrix.tostu.me' },
		'org.matrix.msc4143.rtc_foci': [
			{
				type: 'livekit',
				livekit_service_url: 'https://livekit-jwt.call.matrix.org'
			}
		]
	};

	return new Response(data, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	});
}
