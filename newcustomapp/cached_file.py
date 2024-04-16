# import frappe
# @frappe.whitelist()
# def get_cached_data():
#     cached_data = frappe.cache().get_value("cached_data")
#     if cached_data:
#         return cached_data
#     else:
#         data = fetch_data_from_database()
#         frappe.cache().set_value("cached_data", data)
#         return data
# def fetch_data_from_database():
#     items = frappe.get_all("Item", fields=["item_code", "item_group"])
#     formatted_data = [{"item_code": item.item_code, "item_group": item.item_group} for item in items]
#     return formatted_data
import frappe # type: ignore

@frappe.whitelist()
def get_cached_data():
    
    cached_data = frappe.cache().get_value("cached_data")
    if cached_data:
        return cached_data
    else:
        data = fetch_data_from_database()
        frappe.cache().set_value("cached_data", data)
        return data
def fetch_data_from_database():
    items = frappe.get_all("Item", fields=["name", "item_code", "item_group", "description", "stock_qty"])
    formatted_data = []
    for item in items:
        formatted_data.append({
            "name": item.name,
            "item_code": item.item_code,
            "item_group": item.item_group,
            "description": item.description,
            "stock_qty": item.stock_qty
        })
    return formatted_data
