import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAudit extends Document {
  schoolId: Types.ObjectId;
  user?: Types.ObjectId;
  action: string;
  entity: string;
  entityId?: Types.ObjectId | string;
  metadata?: Record<string, any>;
  createdAt: Date;
}

const auditSchema: Schema<IAudit> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
      // index: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    action: {
      type: String,
      required: true,
    },
    entity: {
      type: String,
      required: true,
    },
    entityId: {
      type: mongoose.Schema.Types.Mixed,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

// auditSchema.index({ tenant: 1, entity: 1 });

export const Audit = mongoose.model<IAudit>("Audit", auditSchema);
