export const validateClassRegistration = async (req, res, next) => {
    const { schoolId, departmentId, userId, className, description } = req.body;
    const errors = [];
    if (!schoolId) {
        errors.push("school id is required");
    }
    if (!departmentId) {
        errors.push("department id is required");
    }
    if (!userId) {
        errors.push("user id is required");
    }
    if (!className) {
        errors.push("class Name is required");
    }
    if (!description) {
        errors.push("description is required");
    }
    if (errors.length > 0) {
        return res.status(200).json({ message: errors });
    }
    next();
};
//# sourceMappingURL=class.middleware.js.map