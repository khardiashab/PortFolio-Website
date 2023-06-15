import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description.'],
      trim: true,
    },
    briefExplanation: {
      type: String,
    },
    category: {
      type: String,
      enum: ['front-end', 'back-end', 'full-stack', 'other'],
      default: 'other',
    },
    images: {
      type: [String],
      default: [],
    },
    technologies: {
      type: [mongoose.Types.ObjectId],
      ref: 'Skill',
    },
    githubRepo: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https?:\/\/(www\.)?github.com\/.+/.test(v);
        },
        message: (props) => `${props.value} is not a valid GitHub repository URL.`,
      },
    },
    websiteUrl: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https?:\/\/(www\.)?.+\..+/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL.`,
      },
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
