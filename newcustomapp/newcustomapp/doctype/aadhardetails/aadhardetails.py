# Copyright (c) 2024, priyanshu and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class AadharDetails(Document):
	pass


# class AadharDetails(Document):
#     def validate(self):
      
#         if self.aadhar_card and not self.aadhar_card.startswith("$AES$:"):
#             self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)
# def setup():
#     AadharDetails.validate = validate_aadhar
# def validate_aadhar(self):
#     if self.aadhar_card and not self.aadhar_card.startswith("$AES$:"):
#         self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)

# setup()

# from frappe.model.document import Document

# class AadharDetails(Document):
#     def validate(self):
#         if self.aadhar_card:
    
#             self.validate_aadhar()

#     def validate_aadhar(self):

#         if len(self.aadhar_card) > 140:
#             frappe.throw("Aadhar Card length exceeds the maximum allowed characters (140)")

#         if not self.aadhar_card.startswith("$AES$:"):
#             self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)



# from frappe.model.document import Document

# class AadharDetails(Document):
#     def validate(self):
#         if self.aadhar_card:
#             if len(self.aadhar_card) > 140:
#                 frappe.throw("Aadhar Card length exceeds the maximum allowed characters (140)")
#             if not self.aadhar_card.startswith("$AES$:"):
#                 self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)

# class AadharDetails(Document):
#     def validate(self):
#         if self.aadhar_card:
#             self.validate_aadhar_length()
#             self.encrypt_aadhar()
#     def validate_aadhar_length(self):
#         if len(self.aadhar_card) > 140:
#             frappe.throw("Aadhar Card length exceeds the maximum allowed characters (140)")
#     def encrypt_aadhar(self):
#         if not self.aadhar_card.startswith("$AES$:"):
#             self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)

# from frappe.model.document import Document

# class AadharDetails(Document):
#     def validate(self):
#         if self.aadhar_card:
#             # Validate Aadhar card length and encrypt if necessary
#             self.validate_aadhar()

#     def validate_aadhar(self):
#         if not self.aadhar_card.startswith("$AES$:"):
#             # Check if Aadhar card exceeds maximum character limit
#             if len(self.aadhar_card) > 140:
#                 frappe.throw("Aadhar Card length exceeds the maximum allowed characters (140)")
#             # Encrypt Aadhar card if not already encrypted
#             self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)

# import frappe
# from frappe.model.document import Document
# import re

# class AadharDetails(Document):
#     def validate(self):
      
#         if self.aadhar_card and not self.aadhar_card.startswith("$AES$:"):
#             self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)
        
       
#         if self.aadhar_number and not self.is_valid_aadhar(self.aadhar_number):
#             frappe.throw("Invalid Aadhar number")

#     def is_valid_aadhar(self, aadhar_number):
      
#         aadhar_regex = r"^\d{12}$"
#         return re.match(aadhar_regex, aadhar_number) is not None


# def setup():
    
#     AadharDetails.validate = validate_aadhar

# def validate_aadhar(self):
#     if self.aadhar_card and not self.aadhar_card.startswith("$AES$:"):
#         self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)
    
#     if self.aadhar_number and not self.is_valid_aadhar(self.aadhar_number):
#         frappe.throw("Invalid Aadhar number")


# setup()

# from frappe.model.document import Document

# class AadharDetails(Document):
#     def validate(self):
#         if self.aadhar_card:
    
#             if self.aadhar_card.startswith("$AES$:"):
#                 frappe.msgprint("Aadhar Card is already encrypted.")
#                 return
            
#             # if len(self.aadhar_card) > 140:
#             #     frappe.throw("Aadhar Card length exceeds the maximum allowed characters (140)")
        
#             self.encrypt_aadhar()
#     def encrypt_aadhar(self):
#         self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)

from frappe.model.document import Document

class AadharDetails(Document):
    def validate(self):
        if self.aadhar_card and len(self.aadhar_card) > 140:
            self.aadhar_card = self.aadhar_card[:140]

    def on_update(self):
        if self.aadhar_card and not self.aadhar_card.startswith("$AES$:"):
            self.encrypt_aadhar()

    def encrypt_aadhar(self):
        self.aadhar_card = frappe.utils.password.encrypt(self.aadhar_card)
        self.aadhar_encrypted = True
