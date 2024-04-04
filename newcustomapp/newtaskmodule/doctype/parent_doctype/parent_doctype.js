// Copyright (c) 2024, priyanshu and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Parent DocType", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('ParentDocType', {
    refresh: function(frm) {

        var len_child_table_1 = frm.doc.child_table_1.length;
        
        frm.set_value('length_of_child_table_1', len_child_table_1);
        
        var len_child_table_2 = frm.doc.child_table_2.length;
        
        frm.set_value('length_of_child_table_2', len_child_table_2);
    }
});
