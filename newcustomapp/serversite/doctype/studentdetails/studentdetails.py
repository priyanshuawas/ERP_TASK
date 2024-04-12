# Copyright (c) 2024, priyanshu and contributors
# For license information, please see license.txt

import frappe # type: ignore
from frappe.model.document import Document # type: ignore
class StudentDetails(Document):
	pass
def update_full_name(doc, method):
    if doc.first_name and doc.last_name:
        full_name = doc.first_name + " " + doc.last_name
        doc.full_name = full_name
def register_student_details_hooks():
    frappe.db.append("DocType", {
        "doctype": "DocEvent",
        "ref_doctype": "Student Details",
        "event": "before_save",
        "method": "newcustomapp.student_details.update_full_name"
    })
register_student_details_hooks()