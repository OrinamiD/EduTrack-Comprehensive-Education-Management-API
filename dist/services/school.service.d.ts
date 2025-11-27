import type { ISchool } from "../models/school.model.js";
export declare const schoolCreate: (data: ISchool, userId: string) => Promise<{
    school: import("mongoose").Document<unknown, {}, ISchool, {}, {}> & ISchool & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
    user: import("mongoose").Document<unknown, {}, import("../models/auth.model.js").IUser, {}, {}> & import("../models/auth.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
}>;
//# sourceMappingURL=school.service.d.ts.map