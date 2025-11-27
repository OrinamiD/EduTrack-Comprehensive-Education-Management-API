export const validateSchool = async (req, res, next) => {
    const { name, logo, image, address } = req.body;
    const errors = [];
    if (!name) {
        errors.push("The school name is required");
    }
    //   if (!logo) {
    //     errors.push("The school logo is required");
    //   }
    //   if (!image) {
    //     errors.push("image is required");
    //   }
    if (!address.street) {
        errors.push("Enter the correct house number");
    }
    if (!address.area) {
        throw new Error("Enter the correct area");
    }
    if (!address.city) {
        throw new Error("Enter the correct city");
    }
    if (!address.state) {
        errors.push("Enter the correct state");
    }
    if (!address.country) {
        errors.push("Enter the correct country");
    }
    if (errors.length > 0) {
        return res.status(200).json({ sucess: false, message: errors });
    }
    next();
};
//# sourceMappingURL=school.middleware.js.map