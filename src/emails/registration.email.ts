import axios from "axios";

export const registrationEmail = async (
  email: string,
  firstName: string,
  otherName: string,
  lastName: string,
  otp: string
) => {
  try {
    if (!email) {
      console.error("❌ No email provided to registration email");
      return;
    }
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Samuel Adegbite Anglican College Idimu Lagos",
          email: process.env.EMAIL,
        },
        to: [
          {
            email,
            name: `${firstName} ${otherName} ${lastName}`,
          },
        ],
        subject: "REGISTRATION SUCCESSFUL",
        htmlContent: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
            <h2 style="color: #4CAF50; text-align: center;">🎉 Welcome to Samuel Adegbite Anglican College Idimu Lagos !</h2>
            <p style="font-size: 16px;">Hi ${firstName} ${otherName} ${lastName},</p>
            <p style="font-size: 16px;">
              We're thrilled to have you join the <strong>Samuel Adegbite Anglican College</strong> community!
              Your registration was successful, and you’re now part of a school 
              built to help you grow, connect, and achieve your goals.
            </p>
            <p style="font-size: 18px; font-weight: bold; text-align: center; color: #4CAF50;">
              Your OTP Code: ${otp}
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://your-samueladegbiteanglicancollege-link.com" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                Get Started
              </a>
            </div>
            <p style="font-size: 14px; color: #777;">
              If you have any questions, feel free to reply to this email or visit our 
              <a href="https://your-skillzonet-help.com" style="color: #4CAF50;">Help Center</a>.
            </p>
            <p style="font-size: 14px; color: #555;">
              Cheers,<br>
              The Samuel Adegbite Anglican College Team
            </p>
          </div>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.EMAIL_PASSWORD_BREVO!, // ✅ Brevo API key
          "content-type": "application/json",
        },
      }
    );

    console.log("✅ Registration email sent successfully:", response.data);
  } catch (error: any) {
    console.error(
      "❌ Error sending registration email:",
      error.response?.data || error.message
    );
  }
};
