# # Copyright (c) 2024, priyanshu and contributors
# # For license information, please see license.txt
# import frappe

# def execute(filters=None):
#     columns = [
#         {"label": "Warehouse", "fieldname": "warehouse", "fieldtype": "Link", "options": "Warehouse"},
#         {"label": "Item Code", "fieldname": "item_code", "fieldtype": "Link", "options": "Item"},
#         {"label": "Projected Qty", "fieldname": "projected_qty", "fieldtype": "Float"},
#         {"label": "Reserved Qty", "fieldname": "reserved_qty", "fieldtype": "Float"},
#         {"label": "Reserved Qty for Production", "fieldname": "reserved_qty_for_production", "fieldtype": "Float"},
#         {"label": "Reserved Qty for Sub Contract", "fieldname": "reserved_qty_for_sub_contract", "fieldtype": "Float"},
#         {"label": "Actual Qty", "fieldname": "actual_qty", "fieldtype": "Float"},
#         {"label": "Valuation Rate", "fieldname": "valuation_rate", "fieldtype": "Currency"}
#     ]
#     sql_query = """
#         SELECT
#             bin.warehouse,
#             bin.item_code,
#             bin.projected_qty,
#             bin.reserved_qty,
#             bin.reserved_qty_for_production,
#             bin.reserved_qty_for_sub_contract,
#             bin.actual_qty,
#             bin.valuation_rate
#         FROM
#             `tabBin` bin
#         WHERE
#             bin.projected_qty != 0 OR
#             bin.reserved_qty != 0 OR
#             bin.reserved_qty_for_production != 0 OR
#             bin.reserved_qty_for_sub_contract != 0 OR
#             bin.actual_qty != 0
#         ORDER BY
#             bin.warehouse,
#             bin.item_code
#     """

#     stock_entries = frappe.db.sql(sql_query, as_dict=True)
#     return columns, stock_entries
#----------------------------------------------------------------------------------------------------------------------------------------------
# import frappe
# index_keywords = ["warehouse", "item_code", "projected_qty", "reserved_qty", 
#                   "reserved_qty_for_production", "reserved_qty_for_sub_contract", 
#                   "actual_qty"]
# index_prefix = "idx"
# for keyword in index_keywords:
#     index_name = f"{index_prefix}_{keyword}"
#     index_query = f"CREATE INDEX {index_name} ON `tabBin` ({keyword})"
#     frappe.db.sql(index_query)
# def execute(filters=None):
#     columns = [
#         {"label": "Warehouse", "fieldname": "warehouse", "fieldtype": "Link", "options": "Warehouse"},
#         {"label": "Item Code", "fieldname": "item_code", "fieldtype": "Link", "options": "Item"},
#         {"label": "Projected Qty", "fieldname": "projected_qty", "fieldtype": "Float"},
#         {"label": "Reserved Qty", "fieldname": "reserved_qty", "fieldtype": "Float"},
#         {"label": "Reserved Qty for Production", "fieldname": "reserved_qty_for_production", "fieldtype": "Float"},
#         {"label": "Reserved Qty for Sub Contract", "fieldname": "reserved_qty_for_sub_contract", "fieldtype": "Float"},
#         {"label": "Actual Qty", "fieldname": "actual_qty", "fieldtype": "Float"},
#         {"label": "Valuation Rate", "fieldname": "valuation_rate", "fieldtype": "Currency"}
#     ]
#     sql_query = """
#         SELECT
#             bin.warehouse,
#             bin.item_code,
#             bin.projected_qty,
#             bin.reserved_qty,
#             bin.reserved_qty_for_production,
#             bin.reserved_qty_for_sub_contract,
#             bin.actual_qty,
#             bin.valuation_rate
#         FROM
#             `tabBin` bin
#         WHERE
#             (bin.projected_qty != 0 OR
#             bin.reserved_qty != 0 OR
#             bin.reserved_qty_for_production != 0 OR
#             bin.reserved_qty_for_sub_contract != 0 OR
#             bin.actual_qty != 0)
#         ORDER BY
#             bin.warehouse,
#             bin.item_code
#     """
#     stock_entries = frappe.db.sql(sql_query, as_dict=True)
#     data = [row for row in stock_entries]
#     return columns, data

#--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import frappe
index_keywords = ["warehouse", "item_code"]
index_prefix = "idx"
for keyword in index_keywords:
    index_name = f"{index_prefix}_{keyword}"
    index_query = f"CREATE INDEX {index_name} ON `tabBin` ({keyword})"
    frappe.db.sql(index_query)
def execute(filters=None):
    columns = [
        {"label": "Warehouse", "fieldname": "warehouse", "fieldtype": "Link", "options": "Warehouse"},
        {"label": "Item Code", "fieldname": "item_code", "fieldtype": "Link", "options": "Item"},
        {"label": "Projected Qty", "fieldname": "projected_qty", "fieldtype": "Float"},
        {"label": "Reserved Qty", "fieldname": "reserved_qty", "fieldtype": "Float"}
    ]
    sql_query = """
        SELECT
            bin.warehouse,
            bin.item_code,
            bin.projected_qty,
            bin.reserved_qty
        FROM
            `tabBin` bin
        WHERE
            (bin.projected_qty != 0 OR
            bin.reserved_qty != 0)
        ORDER BY
            bin.warehouse,
            bin.item_code
    """
    stock_entries = frappe.db.sql(sql_query, as_dict=True)
    data = [row for row in stock_entries]
    return columns, data
