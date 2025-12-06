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
    catch (error) {
        if (error.message === "You are not a member of this school") {
            return res.status(400).json({
                success: false,
                messsage: error.message,
            });
        }
        if (error.message === "User not found") {
            return res.status(404).json({
                success: false,
                messsage: error.message,
            });
        }
        if (error.message === "keep off") {
            return res.status(400).json({
                success: false,
                messsage: error.message,
            });
        }
        if (error.message === "No such department") {
            return res.status(404).json({
                success: false,
                messsage: error.message,
            });
        }
        if (error.message === "Your a staff. Login") {
            return res.status(400).json({
                success: false,
                messsage: error.message,
            });
        }
        if (error.message === "Invalid department name") {
            return res.status(400).json({
                success: false,
                messsage: error.message,
            });
        }
        else {
            return res.status(500).json({
                success: false,
                messsage: error.message,
            });
        }
    }
};
//# sourceMappingURL=staff.controller.js.map