export async function POST(req) {
  const data = await req.json();
  return Response.json({ status: "received", data });
}
