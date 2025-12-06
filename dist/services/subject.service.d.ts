import { type ISubject } from "../models/subject.model.js";
import type { GetSubject, UpdateSubject } from "../types/subject.types.js";
export declare const subjectCreation: (data: ISubject) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../models/auth.model.js").IUser, {}, {}> & import("../models/auth.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
    newSubject: import("mongoose").Document<unknown, {}, ISubject, {}, {}> & ISubject & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
}>;
export declare const subjectUpdate: (data: UpdateSubject) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../models/auth.model.js").IUser, {}, {}> & import("../models/auth.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
    update: (import("mongoose").Document<unknown, {}, ISubject, {}, {}> & ISubject & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null;
}>;
export declare const getSubject: (data: GetSubject) => Promise<{
    subject: import("mongoose").Document<unknown, {}, ISubject, {}, {}> & ISubject & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
    message: string;
}>;
export declare const allSubject: (userId: string) => Promise<{
    subjects: (import("mongoose").Document<unknown, {}, ISubject, {}, {}> & ISubject & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[];
    message: string;
}>;
export declare const subjectDeletion: (subjectId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, ISubject, {}, {}> & ISubject & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=subject.service.d.ts.map