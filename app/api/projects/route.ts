const data = {
  projects: [],
};

export async function GET() {
  return Response.json({ data });
}
