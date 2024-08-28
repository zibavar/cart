 import fs from 'fs'
 import path from 'path'
 
 function handler (req,res) {

    const pId = req.query.productId

    const filepath = path.join(process.cwd(),'data','products')
    const filedata = fs.readFileSync(filepath)
    const data = JSON.parse(filedata)
    const product = data.find((item) => item.id ===pId )

    res.json({product})
     

}export default handler