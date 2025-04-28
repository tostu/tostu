export const prerender = true;

export function GET() {
	const data = {
		'org.matrix.msc4143.rtc_foci': [
			{
				type: 'livekit',
				livekit_service_url: 'https://livekit-jwt.call.matrix.org'
			}
		]
	};

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
