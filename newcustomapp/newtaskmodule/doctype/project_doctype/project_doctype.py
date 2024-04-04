# Copyright (c) 2024, priyanshu and contributors
# For license information, please see license.txt
# from __future__ import unicode_literals

from frappe.model.document import Document

class Project_Doctype(Document):
	pass
# class Project(Document):
#     def before_save(self):
#         self.update_child_table_lengths()

#     def update_child_table_lengths(self):
#         self.tasklist_doctype_length = len(self.tasklist_doctype)
#         self.expensetracker_doctype_length = len(self.expensetracker_doctype)
# def get_tasklist_doctype_fields():
#     return [
#         {
#             "fieldname": "task_name",
#             "label": "Task Name",
#             "fieldtype": "Data",
#             "reqd": 1
#         },
#         {
#             "fieldname": "due_date",
#             "label": "Due Date",
#             "fieldtype": "Date",
#             "reqd": 1
#         }
#     ]
# def get_expensetracker_doctype_fields():
#     return [
#         {
#             "fieldname": "expense_description",
#             "label": "Expense Description",
#             "fieldtype": "Data",
#             "reqd": 1
#         },
#         {
#             "fieldname": "expense_date",
#             "label": "Expense Date",
#             "fieldtype": "Date",
#             "reqd": 1
#         }
#     ]
