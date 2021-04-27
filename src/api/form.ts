import axios from 'axios';

export default function submitContactForm(recaptchaToken: string, form: {
    subject: string,
    message: string
}) {
    console.log(`[INFO] Submitting form to '/api/submit' with values ${JSON.stringify({ ...form, recaptchaToken})}`);
    return axios.post('/api/submit',{ ...form, recaptchaToken});
}