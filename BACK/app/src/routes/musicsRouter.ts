import { Router } from "express"
import multer from "multer"
import url from "url"
import path from "path"

import {postMusic} from "../controllers/musics.js"

const router = Router()

const _fileName:string = url.fileURLToPath(import.meta.url)
const _dirName:string = path.dirname(_fileName)

const fileLoader = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(_dirName,'../uploads'))
    },

    filename:(req,file,cb)=>{
        cb(null,`${file.originalname}-` + Date.now())
    }

})


const uploader = multer({storage:fileLoader})


router.post('/upload',uploader.single('music'),postMusic)


export default router;