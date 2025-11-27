import { schoolCreate } from "../services/school.service.js";
export const createSchool = async (req, res) => {
    try {
        const { userId } = req.params;
        const { data } = req.body;
        const { school, user } = await schoolCreate(data, userId);
        return res.status(400).json({
            success: false,
            message: "school created successful",
            schoolDetails: {
                schoolName: school.name,
                schoolId: school.id,
                schoolEmail: school.schoolEmail,
                schoolNumber: school.schoolNumber,
                ownerId: user.id,
                ownerName: `${user.firstName}${user.otherName} ${user.lastName}`,
            },
        });
    }
    catch (error) { }
};
//# sourceMappingURL=school.controller.js.map