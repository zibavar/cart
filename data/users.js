import bcyrpt from 'bcryptjs'
const users=[
    {
        name : "ziba",
        email : "ziba@gmail.com",
        password : bcyrpt.hashSync('12345'),
        isAdmin : true
    
    },
    {
        name : "hamed",
        email : "hamed@gmail.com",
        password : bcyrpt.hashSync('12345'),
        isAdmin : false
    
    }

]
export default users