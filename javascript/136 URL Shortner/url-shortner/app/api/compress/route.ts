import clientPromise from "@/lib/mongodb"
import { error } from "console"


export async function POST(req: any) {
  const body = await req.json()
  const client = await clientPromise
  const db = client.db("short-it")
  const collection = db.collection("URLs")
  const bundle = await collection.findOne({short:body.short})
  if (bundle) {
      return Response.json({ success: false, error: true, message: 'Short Version already Exists!!!' })

  }

  const res = await collection.insertOne({
    URL: body.URL,
    short: body.short
  })
  return Response.json({ success: true, error: false, message: 'Compressed Successfully !' })
}