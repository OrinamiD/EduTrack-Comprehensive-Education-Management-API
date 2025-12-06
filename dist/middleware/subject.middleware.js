// update subject
export const validateCreatingSubject = async (req, res, next) => {
    const { schoolId, userId, classId, code } = req.body;
    const errors = [];
    if (!schoolId) {
        errors.push("school id is required");
    }
    if (!userId) {
        errors.push("user id is required");
    }
    if (!classId) {
        errors.push("class id is required");
    }
    if (!code) {
        errors.push("code is required");
    }
    if (errors.length > 0) {
        return res.status(200).json({
            success: false,
            errors,
        });
    }
    next();
};
// get one subject for each class
//# sourceMappingURL=subject.middleware.js.map