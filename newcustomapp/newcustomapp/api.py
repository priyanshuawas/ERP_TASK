from __future__ import unicode_literals
import frappe # type: ignore

@frappe.whitelist(allow_guest=True)
def get_errorlog_data():
    # Fetch data from errorlog_doctype
    data = frappe.get_all("errorlog_doctype", fields=["name", "gender", "phoneno"])
    return data


#-----------------------------------------------------------------------------------------------------------------------------------------------------