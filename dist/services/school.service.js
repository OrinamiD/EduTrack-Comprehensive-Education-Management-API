import { error } from "console";
import User from "../models/auth.model.js";
import School from "../models/school.model.js";
import { schoolCodeId } from "../utils/school.utils.js";
export const schoolCreate = async (data) => {
    const { name, ownerId } = data;
    const user = await User.findById(ownerId);
    if (!user) {
        throw new Error("User does not exist");
    }
    if (user.role != "superadmin") {
        throw new Error("Only the owner can perform this");
    }
    const school = await School.findOne({ name });
    if (school) {
        throw new Error("School already exist");
    }
    const code = await schoolCodeId();
    const newSchool = await School.create({
        ...data,
        ownerId: user?.id,
        schoolCode: code,
    });
    await newSchool.save();
    if (newSchool.id) {
        user.hasSchoolId = true;
        await user.save();
    }
    return { school: newSchool, user };
};
//# sourceMappingURL=school.service.js.map