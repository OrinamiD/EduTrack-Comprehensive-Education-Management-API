

// const validateCreateCourse = async (req, res, next)=>{
//     const {courseTitle, courseCode, assignedTeacher} = req.body

//     const errors = []

//     if(!courseTitle){
//         errors.push('The course title is required')
//     }

//     if(!courseCode){
//     errors.push('The course code is required')
//     }

//     if(!assignedTeacher){
//         errors.push('Please assign a tutor to the course')
//     }

//     if(errors.length > 0 ){
//         return res.status(200).json({message: errors})
//     }

//     next()
// }

// const validateUpdateCourse = async (req, res, next )=>{

//     const { _id, courseCode, assignedTeacher } = req.body
    
//     const errors = []

//     if(!_id){
//         errors.push('Enter the course id')
//     }
//     if(!courseCode){
//         errors.push('Enter the course code')
//     }
//         if(!assignedTeacher){
//         errors.push('Enter the assigned tutor')
//     }
// }

// const validateEnrolStudentToCourse = async (req, res, next)=>{
//     const {_id, courseCode} = req.body

//     const errors = []

//     if(!_id){
//         errors.push('ID is required')
//     }

//        if(!courseCode){
//         errors.push('Course code is required')
//     }
//        if(!courseTitle){
//         errors.push('Course title is required')
//     }

//     if(errors.length > 0 ){
//         return res.status(200).json({message: errors})
//     }
//     next()
// }


// module.exports = {
//     validateCreateCourse,
//     validateUpdateCourse,
//     validateEnrolStudentToCourse
// }