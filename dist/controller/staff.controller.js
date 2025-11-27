import { staffReg } from "../services/staff.service.js";
export const staffRegistration = async (req, res) => {
    try {
        const { userId, staffId, name, schoolId, title, staff, bio, employmentDate, } = req.body;
        const savedStaff = await staffReg(req.body, name);
        if (!savedStaff) {
            return res
                .status(400)
                .json({ success: false, message: "can not craete staff" });
        }
        return res
            .status(200)
            .json({ success: false, message: "successful", savedStaff });
    }
    catch (error) { }
};
//# sourceMappingURL=staff.controller.js.map