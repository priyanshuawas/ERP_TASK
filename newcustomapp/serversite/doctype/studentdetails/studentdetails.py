# Copyright (c) 2024, priyanshu and contributors
# For license information, please see license.txt

import frappe # type: ignore
from frappe.model.document import Document # type: ignore

class StudentDetails(Document):
	pass

class StudentDetails(Document):
    def validate(self):
        if self.checked and self.first_name and self.last_name:
            self.full_name = f"{self.first_name} {self.last_name}" 