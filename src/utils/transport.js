const nodemailer=require("nodemailer");
let user=process.env.EMAIL_ADD
let pass=process.env.EMAIL_PASS


let transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:user,
        pass:pass
    }
})

const sendMail= async(target, subject, body)=>{
    let info=await transport.sendMail({
        from:user,
        to:target,
        subject:subject,
        text:body


    })
    console.log(info)

}

const sendPDF=async(target, subject, body, pdfPath)=>{
    let info=await transport.sendMail({
        from:user,
        to:target,
        subject:subject,
        text:body,
        attachments:[
            {
                path:pdfPath
            }
        ]
    })
    console.log(info)

}

module.exports={sendMail, sendPDF}