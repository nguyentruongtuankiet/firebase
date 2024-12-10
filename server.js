require('dotenv').config();
const express = require('express');
const otpService = require('./utils/otpService');

const app = express();
app.use(express.json());

app.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  // Kiểm tra xem email có tồn tại hay không
  if (!email) {
    return res.status(400).json({ message: 'Email là bắt buộc.' });
  }

  try {
    // Gửi OTP đến email
    const otp = await otpService.sendOtp(email);
    res.status(200).json({ message: 'OTP đã được gửi thành công.', otp }); // Hiển thị OTP để debug
  } catch (error) {
    res.status(500).json({ message: 'Gửi OTP thất bại.', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
