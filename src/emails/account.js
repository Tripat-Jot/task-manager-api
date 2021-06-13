const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
    to: email ,
    from:'triptjot3@gmail.com' ,
    subject:'Thanks for joiing in !!!' ,
    text: 'Welcome to the App , ${name}. Let me know how you get along !' ,
    html: ''
    })
}

const sendCancelationEmail = (email,name)=> {
    sgMail.send({
        to:email,
        from:'triptjot3@gmail.com' ,
        subject:'Sorry to see you go !' ,
        text : 'Goodbye,${name}.I hope to see you back some time !'
    })
}


module.exports = {
  sendWelcomeEmail 
}

// const msg ={
//     to: 'triptjot3@gmail.com',
//     from: 'triptjot3@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.'
// }

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })