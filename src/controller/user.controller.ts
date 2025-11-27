// // update the role of users
// const handleUpdateRole = async (req, res) => {
//   const { _id } = req.body;

//   const { role } = req.body;

//   try {
//     const userRoleToUpdate = await User.findOne({ _id });

//     if (!userRoleToUpdate) {
//       return res.status(404).json({ message: "user not recognized" });
//     }

//     const updatedRole = await User.findByIdAndUpdate(
//       _id,
//       { role },
//       { new: true }
//     );
//     await updatedRole.save();

//     updatedRole.password = undefined;
//     updatedRole.class = undefined;

//     return res.status(200).json({ message: "Successful", updatedRole });
//   } catch (error) {
//     return res.status(200).json({ message: error.message });
//   }
// };

// // view non verified users
// const handleViewNonVerified = async (req, res) => {
//   try {
//     const users = await User.find();

//     if (!users) {
//       return res.status(200).json({ message: "No user" });
//     }

//     const filteredStatus = users.filter((each) => each.status === "unverified");

//     filteredStatus.password = undefined;

//     return res
//       .status(200)
//       .json({ message: "successful", unverifiedUser: filteredStatus });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // update user status
// const handleUpdateStatus = async (req, res) => {
//   const { _id } = req.body;

//   const { status } = req.body;

//   try {
//     const userStatusToUpdate = await User.find({ _id });

//     if (!userStatusToUpdate) {
//       return res.status(404).json({ message: "user not recognized" });
//     }

//     const updatedStatus = await User.findByIdAndUpdate(
//       _id,
//       { status },
//       { new: true }
//     );
//     await updatedStatus.save();

//     updatedStatus.password = undefined;
//     updatedStatus.class = undefined;

//     return res.status(200).json({ message: "Successful", updatedStatus });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // view all staff
// const handleGetAllStaffByDepartment = async (req, res) => {
//   const { role, department } = req.body;
//   try {
//     const users = await User.find();

//     if (!users) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const validDepartmentAndRoles = await User.find({ role, department });

//     if (!validDepartmentAndRoles || validDepartmentAndRoles.length === 0) {
//       return res
//         .status(400)
//         .json({ message: "Not a valid department nor valid role" });
//     }

//     const filteredStaff = users.filter(
//       (each) => each.role === "teacher" && each.department === department
//     );

//     const result = `${department} Tutors`;

//     return res.status(200).json({
//       message: "successful",
//       Department: result,
//       TotalTutors: filteredStaff.length,
//       StaffDetails: filteredStaff,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // view all Students
// const handleGetStudentsClass = async (req, res) => {
//   const { role, level } = req.body;
//   try {
//     const users = await User.find();

//     if (!users) {
//       return res.status(404).json({ message: "students not found" });
//     }

//     const students = await User.find({ role, level }); // checks if level array contains the given level

//     if (!students || students.length === 0) {
//       return res.status(400).json({ message: "No matching students found" });
//     }

//     const result = `${level} Students`;

//     return res.status(200).json({
//       message: "successful",
//       Class: result,
//       TotalStudents: students.length,
//       StudentsDetails: students,
//     });
//   } catch (error) {
//     return res.status(200).json({ message: error.message });
//   }
// };

// // Get all users
// const handleGetAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();

//     if (!users) {
//       res.status(404).json({ message: "user not found" });
//     }

//     return res.status(200).json({
//       message: "successful",
//       TotalUsers: users.length,
//       AllUsers: users,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// // get a user by ID
// const handleGetUser = async (req, res) => {
//   const { _id } = req.body;

//   try {
//     const user = await User.findById(_id);

//     if (!user) {
//       res.status(404).json({ message: "user ID does not exist" });
//     }

//     return res.status(200).json({ message: "successful", user });
//   } catch (error) {
//     return res.status(200).json({ message: error.message });
//   }
// };

// const handleRemoveUser = async (req, res) => {
//   const { _id } = req.body;
//   try {
//     const removeUser = await User.findByIdAndDelete(_id);

//     return res.status(200).json({ message: "user deleted successfully" });
//   } catch (error) {
//     return res.status(200).json({ message: error.message });
//   }
// };
