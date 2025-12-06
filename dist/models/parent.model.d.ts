import mongoose, { Document, Types } from "mongoose";
export interface IParent extends Document {
    schoolId: Types.ObjectId;
    userId: Types.ObjectId;
    phone: string;
    address: {
        street: string;
        area: string;
        city: string;
        state: string;
        country: string;
    };
    image: string;
}
declare const Parent: mongoose.Model<IParent, {}, {}, {}, mongoose.Document<unknown, {}, IParent, {}, {}> & IParent & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Parent;
//# sourceMappingURL=parent.model.d.ts.map