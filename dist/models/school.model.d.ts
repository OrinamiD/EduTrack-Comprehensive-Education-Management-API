import mongoose, { Document, Types } from "mongoose";
export interface ISchool extends Document {
    name: string;
    ownerId: Types.ObjectId;
    schoolEmail: string;
    schoolNumber: string;
    logo: string;
    image: string;
    address: {
        street: string;
        area: string;
        city: string;
        state: string;
        country: string;
    };
    meta?: Record<string, any>;
}
declare const School: mongoose.Model<ISchool, {}, {}, {}, mongoose.Document<unknown, {}, ISchool, {}, {}> & ISchool & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default School;
//# sourceMappingURL=school.model.d.ts.map