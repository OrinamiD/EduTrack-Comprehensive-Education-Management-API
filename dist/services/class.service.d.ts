import { type IClass } from "../models/class.model.js";
export declare const classCreation: (data: IClass, userId: string) => Promise<{
    message: string;
    createClass: import("mongoose").Document<unknown, {}, IClass, {}, {}> & IClass & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
}>;
export declare const chooseYourClass: (data: IClass, userId: string) => Promise<{
    message: string;
    student: import("mongoose").Document<unknown, {}, import("../models/student.model.js").IStudent, {}, {}> & import("../models/student.model.js").IStudent & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
}>;
//# sourceMappingURL=class.service.d.ts.map