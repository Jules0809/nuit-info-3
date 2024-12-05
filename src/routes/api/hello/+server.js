export function GET() {
    return new Response(
        JSON.stringify({ message: 'Hello from SvelteKit API!' }),
        { headers: { 'Content-Type': 'application/json' } }
    );
}
