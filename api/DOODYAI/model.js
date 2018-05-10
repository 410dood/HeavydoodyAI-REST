import mongoose, { Schema } from 'mongoose'

const doodyaiSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  created_at date: {
    type: String
  },
  output info: {
    type: String
  },
  : {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

doodyaiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id: this.id,
      name: this.name,
      created_at date: this.created_at date,
      output info: this.output info,
      : this.,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Doodyai', doodyaiSchema)

export const schema = model.schema
export default model
