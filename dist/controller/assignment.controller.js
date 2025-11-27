// export const handlePostAssignment = async (req, res) => {
//   const { title, courseID, teacherID, instructions, attachment } = req.body;
export {};
//   try {
//     const existingAssignment = await Assignment.findOne({ courseID });
//     if (existingAssignment) {
//       return res.status(400).json({ message: "Assignment already exist" });
//     }
//     const instructor = await Assignment.findOne({ teacherID });
//     if (!instructor) {
//       return res.status(404).json({ message: "Instructor not registered" });
//     }
//     const newAssignment = new Assignment({
//       title,
//       courseID,
//       teacherID,
//       instructions,
//       attachment,
//     }).save();
//     return res
//       .status(201)
//       .json({ message: "Assignment posted successfullly", newAssignment });
//   } catch (error) {
//     return res.status(201).json({ message: error });
//   }
// };
// export const updateInstructor = async (req, res) => {
//   const { id } = req.body;
//   const { teacherID } = req.body;
//   try {
//     const existingInstructor = await Assignment.findOne({ teacherId: id });
//     if (!existingInstructor) {
//       return res.status(200).json({ message: "user Id not recognize" });
//     }
//     const updateInstructor = await Assignment.findByIdAndUpdate(
//       id,
//       { teacherID },
//       { new: true }
//     );
//     await updateInstructor.save();
//     return res
//       .status(200)
//       .json({ message: "updated successfully", updateInstructor });
//   } catch (error) {
//     return res.status(200).json({ message: error });
//   }
// };
//# sourceMappingURL=assignment.controller.js.map