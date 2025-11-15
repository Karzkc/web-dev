
export async function HEAD(request: Request) {
    return new Response(null, { status: 204 });
}


// app/api/login/route.ts
export async function GET(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  return Response.json({ msg: `Welcome, ${username}` });
}


export async function PUT(request: Request) {
    return new Response(JSON.stringify({ message: "PUT request received" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function DELETE(request: Request) {
    return new Response(JSON.stringify({ message: "DELETE request received" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function PATCH(request: Request) {
    return new Response(JSON.stringify({ message: "PATCH request received" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
