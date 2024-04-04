
// frappe.ui.form.on('Web Form', {
//     onload: function(frm) {
//         // Your onload code here
//     },

//     refresh: function(frm) {
//         // Your refresh code here
//     },

//     after_save: function(frm) {
//         if (frm.doc.__islocal) {
//             // Trigger email function
//             sendEmail(frm.doc.name);
//         }
//     }
// });

// function sendEmail(webFormName) {
//     // Construct email parameters
//     var emailParams = {
//         recipients: ['priyanshu.awas011@gmail.com'],
//         subject: 'New Web Form Submission: ' + webFormName,
//         message: 'A new web form has been submitted. Web Form Name: ' + webFormName
//     };

//     frappe.send_email(emailParams).then(function(response) {
//         if (response.message === 'queued') {
//             frappe.msgprint('Email sent successfully!');
//         } else {
//             frappe.msgprint('Failed to send email. Please try again later.');
//         }
//     }).catch(function(error) {
//         console.error('Error sending email:', error);
//         frappe.msgprint('An error occurred while sending email. Please try again later.');
//     });
// }
