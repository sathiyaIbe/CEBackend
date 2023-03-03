export const getExchange = async(req, res)=>{
    const val=req.params.data.split(',')
    const host = 'api.frankfurter.app';
    try{
    fetch(`https://${host}/latest?amount=${val[0]}&from=${val[1]}&to=${val[2]}`)
    .then(resp => resp.json())
    .then((data) => {
       console.log(data)
        res.status(200).json(data)
    })
}catch(err){
    res.status(400).json({message:"Internal Error"})
} 
} 