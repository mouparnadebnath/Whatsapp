import jwt from 'jsonwebtoken'
export async function POST(req){
    try {
        const {token}=await req.header()
        return Response.json("ok")
    } catch (error) {
        return Response.error()
    }
}