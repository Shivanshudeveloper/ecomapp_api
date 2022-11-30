var nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'infoworkcare@gmail.com',
      pass: 'dfifgjkjofbtirxj'
    }
})


const sendEmailUserInvite = (toEmail, userRole, organizationName) => {
    var from = 'no-reply@workcare.com'
    var subject = `📩 ${organizationName} Invitation - Workcare`
    var html = `
        <h2>Hi there 👋,</h2>
        <p>
            You are invited as a ${userRole} in ${organizationName}, please check your <a target="_blank" href="https://workcaredev.netlify.app/">Workcare Dashboard</a> accept the invitation.
        </p>
    `
    var mailOptions = {
        from: from,
        to: toEmail,
        subject: subject,
        html: html
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent: " + info.response)
        }
        response.redirect("/")
    })
}


module.exports = {
    sendEmailUserInvite
}
