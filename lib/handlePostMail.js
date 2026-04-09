import { baseUrlPhp } from "./api";

export const handlePostMail = async ({ form }) => {

    if (!form.firstname || !form.lastName || !form.email || !form.message) {
        const emptyFld = !form.firstname ? "First name" : !form.lastName ? "Last name" : !form.email ? "Email" : !form.message ? "Message" : "";
        return { ok: false, msg: 'Please, enter ' + emptyFld + ' before sending!' };
    }

    const html = `
        <div>
            <p>Dear ${form.firstname} ${form.lastName},</p>
            <p>Thank you for reaching out to us. We have received your message and appreciate you taking the time to contact us.</p>
            <p>Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 business hours.</p>
            <p>In the meantime, you can visit our website at <a href="https://gofamintpsogba.org.ng">https://gofamintpsogba.org.ng</a> to learn more about our church and ministries.</p>
            <p>We look forward to assisting you!</p>
            <p>Blessings,</p>
            <p>GOFAMINT Pacesetters Assembly, Ogba</p>
        </div>
    `;
    const senderName = form.firstname;
    const subject = "Message from A Visitor";
    const toEmail = "adesung2005@gmail.com";

    const postBody = {
        act: "EMAILPDF",
        pdfData: "",
        toEmail,
        senderName,
        subject,
        mailBody: `${html}`,
        plainText: "We are preparing to send your statement",

        pdfHtml: "", //For resendApi
        pdfAttachment: false, //For resendApi
        useResend: false,
        fileName: "",
    };

    // Note: To work statically on cPanel, we can't use process.env here or "use server"
    // We are exposing the token specifically for this client-side request to the external PHP backend.
    const authToken = "aCCb90LBslw6hWQZWXTEJjOxMAWdVCgCErEbDiLo73406poqgXXlLi1rmiOJ90012XOL3YJLCAS0SUP0QDcoXZcG3rtwusK8hr2Ncp";

    return fetch(baseUrlPhp + "/sendMailManager.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": authToken
        },
        body: JSON.stringify(postBody)
    })
        .then(res => res.json())
        .catch(error => {
            console.error('Error sending mail:', error);
            return { ok: false, message: "post-email failed", error: error.message };
        });
};
