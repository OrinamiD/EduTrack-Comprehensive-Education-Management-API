import { departmentCreation } from "../services/department.service.js";
export const craeteDepartment = async (req, res) => {
    try {
        const { userId } = req.params;
        const { data } = req.body;
        const createdDepartment = await departmentCreation(data, userId);
        if (!createdDepartment) {
            return res
                .status(400)
                .json({ success: false, message: "department was not created" });
        }
        return res.status(200).json({
            success: true,
            messsage: "department created successfully",
            createdDepartment,
        });
    }
    catch (error) { }
};
//# sourceMappingURL=department.controller.js.map