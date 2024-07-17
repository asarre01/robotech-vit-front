import axios from "axios";

export const sendMail = async (formData) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `/mailer/send`,
      formData
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
