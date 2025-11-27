export const validateStaff = async (req, res, next) => {
    const { title, staff, bio, employmentDate } = req.body;
    const errors = [];
    if (!title) {
        errors.push("title is required");
    }
    if (!staff) {
        errors.push("staff is required");
    }
    if (!bio) {
        errors.push("update your about");
    }
    if (!employmentDate) {
        errors.push("update your start date");
    }
    if (errors.length > 0) {
        return res.status(403).json({ success: true, message: errors });
    }
    next();
};
//# sourceMappingURL=staff.middleware.js.map