export const prerender = true;

export function GET() {
	const data = {
		'm.server': 'matrix.tostu.me'
	};

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
