import axios from "axios";
export const forgotPasswordEmail = async (email, firstName, lastName, otp) => {
    try {
        if (!email) {
            console.error("❌ No email provided to forgottenPasswordEmail");
            return;
        }
        const response = await axios.post("https://api.brevo.com/v3/smtp/email", {
            sender: {
                name: "Samuel Adegbite Anglican College Idimu Lagos",
                email: process.env.EMAIL,
            },
            to: [
                {
                    email,
                    name: `${firstName} ${lastName}`,
                },
            ],
            subject: "FORGOTTEN PASSWORD MAIL",
            htmlContent: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
            <h2 style="color: #4CAF50; text-align: center;">🎉FORGOTTEN PASSWORD !</h2>
            <p style="font-size: 16px;">Hi ${firstName} ${lastName},</p>
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              You requested a new OTP code to verify your SAAC account. Use the code below to complete your verification:
            </p>
            <p style="font-size: 18px; font-weight: bold; text-align: center; color: #4CAF50;">
              Your OTP Code: ${otp}
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://samueladegbiteanglicancollege.com/otpverify" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                Get Started
              </a>
            </div>
            <p style="font-size: 14px; color: #777;">
              If you have any questions, feel free to reply to this email or visit our 
              <a href="https://samueladegbiteanglicancollege.com" style="color: #4CAF50;">Help Center</a>.
            </p>
            <p style="font-size: 14px; color: #555;">
              Cheers,<br>
              The SAAC Team
            </p>
          </div>
        `,
        }, {
            headers: {
                accept: "application/json",
                "api-key": process.env.EMAIL_PASSWORD_BREVO,
                "content-type": "application/json",
            },
        });
        console.log("✅ forgotten Password email sent successfully:", response.data);
    }
    catch (error) {
        console.error("❌ Error sending forgotten password email:", error.response?.data || error.message);
    }
};
//# sourceMappingURL=forgotten.password.email.js.map