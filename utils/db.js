import mongoose from "mongoose"

async function connect (){
   await mongoose.connect ('mongodb://localhost:27017/shopping')
    console.log('coonected')
}
function convertToObj(doc){
 doc._id=doc._id.toString()
 return doc
}
const db ={connect ,convertToObj}
export default db

