# Copyright (c) 2024, priyanshu and contributors
# For license information, please see license.txt


# import frappe

# def execute(filters=None):
#     columns = [
#         {"label": "Sales Order", "fieldname": "sales_order", "fieldtype": "Link", "options": "Sales Order", "width": 120},
#         {"label": "Item Code", "fieldname": "item_code", "fieldtype": "Link", "options": "Item", "width": 120},
#         {"label": "Item Name", "fieldname": "item_name", "fieldtype": "Data", "width": 150},
#         {"label": "Quantity Ordered", "fieldname": "qty_ordered", "fieldtype": "Float", "width": 100},
#         {"label": "Rate", "fieldname": "rate", "fieldtype": "Currency", "width": 100},
#         {"label": "Sales Invoice", "fieldname": "sales_invoice", "fieldtype": "Link", "options": "Sales Invoice", "width": 120},
#         {"label": "Invoice Date", "fieldname": "invoice_date", "fieldtype": "Date", "width": 100}
#     ]
#     data = []
#     sales_orders = frappe.get_all("Sales Order", filters=filters, fields=["name", "customer"])
#     for so in sales_orders:
#         items = frappe.get_all("Sales Order Item", filters={"parent": so.name}, fields=["item_code", "item_name", "qty", "rate"])
#         for item in items:
#             sales_invoice = frappe.get_value("Sales Invoice Item", {"so_detail": item.name}, "parent")
#             invoice_date = None
#             if sales_invoice:
#                 invoice_date = frappe.get_value("Sales Invoice", sales_invoice, "posting_date")
#             data.append({
#                 "sales_order": so.name,
#                 "item_code": item.item_code,
#                 "item_name": item.item_name,
#                 "qty_ordered": item.qty,
#                 "rate": item.rate,
#                 "sales_invoice": sales_invoice,
#                 "invoice_date": invoice_date
#             })
#     return columns, data

import frappe

def execute(filters=None):
    columns = [
        {"label": "Sales Order", "fieldname": "sales_order", "fieldtype": "Link", "options": "Sales Order"},
        {"label": "Item Code", "fieldname": "item_code", "fieldtype": "Link", "options": "Item"},
        {"label": "Item Name", "fieldname": "item_name", "fieldtype": "Data"},
        {"label": "Quantity Ordered", "fieldname": "qty_ordered", "fieldtype": "Float"},
        {"label": "Rate", "fieldname": "rate", "fieldtype": "Currency"},
        {"label": "Total Amount", "fieldname": "total_amount", "fieldtype": "Currency"},
        {"label": "Sales Invoice", "fieldname": "sales_invoice", "fieldtype": "Link", "options": "Sales Invoice"}
    ]

    data = []
    
    sql_query = """
        SELECT 
            so.name AS sales_order, 
            sod.item_code, 
            sod.item_name, 
            sod.qty, 
            sod.rate, 
            sod.amount AS total_amount, 
            si.name AS sales_invoice
        FROM 
            `tabSales Order` so 
        INNER JOIN 
            `tabSales Order Item` sod ON so.name = sod.parent
        LEFT JOIN 
            `tabSales Invoice Item` sii ON sod.item_code = sii.item_code
        LEFT JOIN 
            `tabSales Invoice` si ON sii.parent = si.name
        WHERE 
            so.docstatus = 1
            {conditions}
        ORDER BY 
            so.name
    """

    conditions = ""
    if filters.get("from_date"):
        conditions += " AND so.transaction_date >= '{}'".format(filters.get("from_date"))
    if filters.get("to_date"):
        conditions += " AND so.transaction_date <= '{}'".format(filters.get("to_date"))

    sql_query = sql_query.format(conditions=conditions)
    sales_order_items = frappe.db.sql(sql_query, as_dict=True)
    for row in sales_order_items:
        data.append(row)
    return columns, data
