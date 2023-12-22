import nodemailer, { Transporter } from "nodemailer";

    class SendMailService {
        private client: Transporter

            constructor() {
                nodemailer.createTestAccount().then(account => {
                    let transporter = nodemailer.createTransport({
                        host: account.smtp.host,
                        port: account.smtp.port,
                        secure: account.smtp.secure,
                            auth: {
                                user: account.user,
                                pass: account.pass
                            }
                    });

                        this.client = transporter;
                });
            };

                async execute(to: string, subject: string, body: string) {
                    const message = await this.client.sendMail({
                        from: "NetPromoterScore <noreply@nps.com.br>",
                        to,
                        subject,
                        html: body
                    });

                        console.log("Message sent: %s", message.messageId);
                        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
                };
    };

        export default new SendMailService();