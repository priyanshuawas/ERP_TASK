

import frappe # type: ignore
from frappe.model.document import Document # type: ignore


class ErrorLog_Doctype(Document):
	pass
import frappe # type: ignore

def create_error_log(data, gender, phone_no):
    try:
        # Check if any field is empty
        if not data or not gender or not phone_no:
            raise ValueError("One or more fields are empty")
        
        # Create a new ErrorLog_Doctype document
        error_log = frappe.get_doc({
            "doctype": "ErrorLog_Doctype",
            "data": data,
            "gender": gender,
            "phone_no": phone_no
        })
        
        # Save the document
        error_log.insert()
        
        print("Error logged successfully!")
        
    except Exception as e:
        # Log the error if any field is empty
        error_message = f"Error occurred: {str(e)}"
        print(error_message)
        frappe.log_error(error_message)

# Example usage:
data = "Example data"
gender = "Male"
phone_no = "1234567890"

# Call the function with sample data
create_error_log(data, gender, phone_no)
