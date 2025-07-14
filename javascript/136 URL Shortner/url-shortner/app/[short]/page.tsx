import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"


export default async function Page({
    params,
}: {
    params: Promise<{ short: string }>
}) {
    const { short } = await params
    const client = await clientPromise
    const db = client.db("short-it")
    const collection = db.collection("URLs")
    const bundle = await collection.findOne({ short:short })
    if (bundle) {
        redirect(`${bundle.URL}`)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My URL: {short}</div>
}