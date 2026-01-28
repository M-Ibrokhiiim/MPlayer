import Express  from "express"

export const postMusic = (req:Express.Request,res:Express.Response)=>{
    res.json({success:true,msg:"Music successfully uploaded!"})
}

