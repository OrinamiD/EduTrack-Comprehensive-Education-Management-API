import { chooseYourClass, classCreation } from "../services/class.service.js";
export const createClass = async (req, res) => {
    try {
        const { userId } = req.params;
        const { data } = req.body;
        const { createClass } = await classCreation(data, userId);
        if (!createClass) {
            return res
                .status(400)
                .json({ success: false, message: "class was not created" });
        }
        return res.status(200).json({
            success: true,
            messsage: "class created successfully",
            classDetails: {
                className: createClass.className,
                description: createClass.description,
                code: createClass.code,
            },
        });
    }
    catch (error) {
        if (error.message === "Account not found") {
            return res.status(404).json({
                success: false,
                messsage: error.message,
            });
        }
        if (error.message === "Class does not exist") {
            return res.status(404).json({
                success: false,
                messsage: error.message,
            });
        }
        if (error.message === "Invalid Code") {
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
export const selectYourClass = async (req, res) => {
    try {
        const { data, userId } = req.body;
        const { student } = await chooseYourClass(data, userId);
        if (!student) {
            return res
                .status(400)
                .json({ success: false, message: "did not generate class" });
        }
        return res
            .status(200)
            .json({ success: true, message: "class choosed successful", student });
    }
    catch (error) { }
};
//# sourceMappingURL=class.controller.js.map