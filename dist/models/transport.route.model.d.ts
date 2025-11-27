import mongoose, { Document, Types } from "mongoose";
export interface IRoute extends Document {
    schoolId: Types.ObjectId;
    name: string;
    busId: Types.ObjectId;
    stops: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const BusRoute: mongoose.Model<IRoute, {}, {}, {}, mongoose.Document<unknown, {}, IRoute, {}, {}> & IRoute & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=transport.route.model.d.ts.map