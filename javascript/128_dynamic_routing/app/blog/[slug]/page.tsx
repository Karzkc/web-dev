export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const names = ["kartik","temp"]
    if (names.includes(slug)) {
        return <div>My Post: {slug}</div>
    }else{
        return <div>Page not found</div>
    }
    
    
}