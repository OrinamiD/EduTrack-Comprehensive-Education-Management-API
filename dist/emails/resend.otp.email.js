import axios from "axios";
export const resendOtpEmail = async (email, otp) => {
    try {
        if (!email) {
            console.error("❌ No email provided to resendOtpEmail");
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
                },
            ],
            subject: "RESEND OTP - Account Verification",
            htmlContent: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
            <h2 style="color: #4CAF50; text-align: center;">🔑 Your SAAC Account OTP verification </h2>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Hello,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              You requested a new OTP code to verify your SAAC account. Use the code below to complete your verification:
            </p>
            
            <p style="font-size: 20px; font-weight: bold; text-align: center; color: #4CAF50; margin: 20px 0;">
              ${otp}
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; text-align: center; color: #e53935;">
              ⚠️ This code will expire in <strong>5 minutes</strong>.
            </p>
            
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://samueladegbiteanglicancollege.com/otpverify" 
                style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                Verify Now
              </a>
            </div>
            
            <p style="font-size: 14px; color: #777;">
              If you didn’t request this OTP, you can ignore this message. 
              For help, visit our <a href="https://your-skillzonet-help.com" style="color: #4CAF50;">Help Center</a>.
            </p>
            
            <p style="font-size: 14px; color: #555;">
              Cheers,<br>
              The SAAC Team
            </p>
          </div>
        `,
        }, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "api-key": process.env.EMAIL_PASSWORD_BREVO,
            },
        });
        console.log("✅ Resend OTP email sent successfully:", response.data);
    }
    catch (error) {
        console.error("❌ Error sending resend OTP email:", error.response?.data || error.message);
    }
};
//# sourceMappingURL=resend.otp.email.js.map