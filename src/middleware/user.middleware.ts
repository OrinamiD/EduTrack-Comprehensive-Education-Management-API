// const User = require("../model/userModel")


// // checks if user is verified.
// const verifiedUser = async (req, res, next)=>{

//     const { email, status} = req.body
    
//     const errors = []

//     if(!email){
//       errors.push("email is required")
//     }

//     const user = await User.findOne({email})

//     if(!user){
//       errors.push('user not found')
//     }
//       // console.log(user)

//     if(user?.status === 'verified' ){
//       next()
//     }

//     else{
//       return res.status(400).json({message: 'You are not verified. Contact the admin'})
//     }

//     if(errors.length > 0 ){
//       return res.status(200).json({message: errors})
//     }
//   }
// // validate update user role
// const validateUpdateRole = async (req, res, next)=>{
//     const { _id, role } = req.body


//     const errors = []


//      if(!_id){
//         errors.push('please, provide your ID')
//      }

//       if(!role){
//         errors.push('please, provide the role')
//      }

//      if(errors.length > 0 ){
//       return res.status(200).json({message: errors})
//      }
//      next()

//   }
  
// // validate update user status
// const validateUpdateStatus = async (req, res, next)=>{
//     const { _id, status } = req.body


//     const errors = []

//      if(!_id){
//         errors.push('please, provide your ID')
//      }
     
//       if(!status){
//         errors.push('please, provide the status')
//      }

//      if(errors.length > 0 ){
//       return res.status(200).json({message: errors})
//      }
//      next()

//   }

//   const validateGetUser = async (req, res, next)=>{
//     const { _id } = req.params

//     const errors = []

//     if( !_id ){
//         errors.push('User ID is required')
//     }

//     if(!errors.length > 0 ){
//         return res.status(200).json({message: errors})
//     }
//     next()
//   }

//   const validateGetStaffUser = async (req, res, next )=>{
//     const {role, department } = req.body
//     const errors = []

//     if(!role){
//       errors.push('role is reuired')
//     }
//     if(!department){
//       errors.push('department is required')
//     }
    
//     if(errors.length > 0 ){
//       return res.status(200).json({message: errors})
//     }
//     next()
//   }

//   const validateGetStudentsClass = async (req, res, next)=>{
//     const { role, level } = req.body

//     const errors = []

//     if(!role){
//       errors.push('role is required')
//     }
//     if(!level){
//       errors.push('level is required')
//     }
//     if(errors.length > 0){
//      return res.status(200).json({message: errors})
//     }
//     next()
//   }


//   module.exports = {
//     verifiedUser,
//     validateUpdateRole,
//     validateUpdateStatus,
//     validateGetUser,
//     validateGetStaffUser,
//     validateGetStudentsClass
//   }