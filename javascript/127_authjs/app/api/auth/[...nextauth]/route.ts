import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handlerAuth =  NextAuth({
    providers: [
        // OAuth authentication providers...
        GithubProvider({ 
            clientId: process.env.GITHUB_ID || "", 
            clientSecret: process.env.GITHUB_SECRET || "", 
        })
    ]
})

export {handlerAuth as GET , handlerAuth as POST}