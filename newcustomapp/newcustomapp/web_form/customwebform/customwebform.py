import frappe # type: ignore

def get_context(context):
	# do your magic here
	pass

# def send_email_on_webform_creation(doc, method=None):
   
#     if doc.doctype == "Web Form" and method == "on_submit":
 
#         email_template = frappe.get_doc("Email Template", "Your Email Template Name")

#         first_name = doc.get("first_name")
#         last_name = doc.get("last_name")
#         phone_no = doc.get("phone_no")
#         email = doc.get("email")
    
#         email_content = email_template.content.format(
#             first_name=first_name,
#             last_name=last_name,
#             phone_no=phone_no,
#             email=email
#         )
#         frappe.sendmail(
#             recipients=["recipient@example.com"],
#             subject="New Web Form Submission",
#             message=email_content
#         )
# def attach_email_trigger():
#     frappe.db.after_insert("Web Form", send_email_on_webform_creation)

# def send_email_on_webform_creation(doc, method=None):
#     if doc.doctype == "Web Form" and method == "on_submit":
#         email_template = frappe.get_doc("Email Template", "Your Email Template Name")

#         first_name = doc.get("first_name")
#         last_name = doc.get("last_name")
#         phone_no = doc.get("phone_no")
#         email = doc.get("email")
    
#         email_content = email_template.content.format(
#             first_name=first_name,
#             last_name=last_name,
#             phone_no=phone_no,
#             email=email
#         )
#         frappe.sendmail(
#             recipients=["recipient@example.com"],
#             subject="New Web Form Submission",
#             message=email_content
#         )
#         frappe.msgprint("Details submitted successfully!")  # This will display a message upon successful submission
# def attach_email_trigger():
#     frappe.db.after_insert("Web Form", send_email_on_webform_creation)
def send_email_on_creation(doc, method=None):
    if method == "on_create":
        email_content = "A new WebFormDoc has been created with the following details:\n\n"
        email_content += "First Name: {}\n".format(doc.first_name)
        email_content += "Last Name: {}\n".format(doc.last_name)
        email_content += "Phone No: {}\n".format(doc.phone_no)
        email_content += "Email: {}\n".format(doc.email)
        frappe.sendmail(
            recipients=["priyanshu.awas011@gmail.com"], 
            subject="New WebFormDoc Created",
            message=email_content
        )

