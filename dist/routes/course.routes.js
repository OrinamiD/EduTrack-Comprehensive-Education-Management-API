const express = require('express');
const { handleCreateCourse, handleUpdateCourse, handleDeleteCourse, handleGetAllCourses, handleGetCourse, handleEnrollStudentToCourse, handleRemoveStudentFromCourse } = require('../controller/courseController');
const { auth, isAdmin, isClassTeacher } = require('../middleware/authMiddleware');
const { validateCreateCourse, validateUpdateCourse, validateEnrolStudentToCourse } = require('../middleware/courseMiddleware');
const { validateGetUser } = require('../middleware/userMiddleware');
const router = express.Router();
router.post("/create-course", validateCreateCourse, auth, isAdmin, handleCreateCourse);
router.patch("/update-course", validateUpdateCourse, auth, isAdmin, handleUpdateCourse);
router.delete("/delete-course", validateGetUser, auth, isAdmin, handleDeleteCourse);
router.get("/get-all-courses", auth, handleGetAllCourses);
router.get("/get-course", validateGetUser, auth, handleGetCourse);
router.post("/enrol-course-student", validateEnrolStudentToCourse, auth, isClassTeacher, handleEnrollStudentToCourse);
router.delete("/remove-student-from-course", validateGetUser, auth, isClassTeacher, handleRemoveStudentFromCourse);
module.exports = router;
export {};
//# sourceMappingURL=course.routes.js.map