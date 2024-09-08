
export async function POST(req,context) {
    const {params}=context
    const recieverid=params.id
    console.log(recieverid)
    console.log(params.id)
    return Response.json(`${recieverid}:ok`)
    
}