// frappe.ui.form.on('ParentDoctype', {
 
//     child_table_2_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_1 = cur_frm.doc.child_table_1;
//             for (var i = 0; i < child_table_1.length; i++) {
//                 var row = child_table_1[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         // Trigger to add corresponding row in Child Table 1 when a row is added to Child Table 2
//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             frappe.model.add_child(cur_frm.doc, 'ChildTable1', {
//                 field1: child.field1,
//                 field2: child.field2,
//                 field3: child.field3
//             });
//             cur_frm.refresh_field('child_table_1');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         // Trigger to remove corresponding row in Child Table 1 when a row is removed from Child Table 2
//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     },

//     // Trigger to update Child Table 2 when Child Table 1 is modified
//     child_table_1_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_2 = cur_frm.doc.child_table_2;
//             for (var i = 0; i < child_table_2.length; i++) {
//                 var row = child_table_2[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         // Trigger to add corresponding row in Child Table 2 when a row is added to Child Table 1
//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             frappe.model.add_child(cur_frm.doc, 'ChildTable2', {
//                 field1: child.field1,
//                 field2: child.field2,
//                 field3: child.field3
//             });
//             cur_frm.refresh_field('child_table_2');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         // Trigger to remove corresponding row in Child Table 2 when a row is removed from Child Table 1
//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     }

// });
// frappe.ui.form.on('ParentDoctype', {
//     // Triggered when the form is refreshed
//     refresh: function(frm) {
//         // Add a button to open the dialog box
//         frm.add_custom_button(__('Add Field'), function() {
//             // Open a dialog box to add field
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//                 // Add more fields as needed
//             ],
//             function(values){
//                 // Add the entered values to Child Table 1
//                 frappe.model.add_child(cur_frm.doc, 'ChildTable1', {
//                     field1: values.field1,
//                     field2: values.field2,
//                     field3: values.field3
//                     // Add more fields as needed
//                 });
//                 cur_frm.refresh_field('child_table_1');
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     },

//     // Trigger to update Child Table 1 when Child Table 2 is modified
//     child_table_2_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_1 = cur_frm.doc.child_table_1;
//             for (var i = 0; i < child_table_1.length; i++) {
//                 var row = child_table_1[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         // Trigger to add corresponding row in Child Table 1 when a row is added to Child Table 2
//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             frappe.model.add_child(cur_frm.doc, 'ChildTable1', {
//                 field1: child.field1,
//                 field2: child.field2,
//                 field3: child.field3
//             });
//             cur_frm.refresh_field('child_table_1');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         // Trigger to remove corresponding row in Child Table 1 when a row is removed from Child Table 2
//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     },

//     // Trigger to update Child Table 2 when Child Table 1 is modified
//     child_table_1_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_2 = cur_frm.doc.child_table_2;
//             for (var i = 0; i < child_table_2.length; i++) {
//                 var row = child_table_2[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         // Trigger to add corresponding row in Child Table 2 when a row is added to Child Table 1
//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             frappe.model.add_child(cur_frm.doc, 'ChildTable2', {
//                 field1: child.field1,
//                 field2: child.field2,
//                 field3: child.field3
//             });
//             cur_frm.refresh_field('child_table_2');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

     
//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 frappe.model.add_child(cur_frm.doc, 'ChildTable1', {
//                     field1: values.field1,
//                     field2: values.field2,
//                     field3: values.field3
//                 });
//                 cur_frm.refresh_field('child_table_1');
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_2.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_2');
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_1.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_1');
//     }
// });
// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 frappe.model.add_child(cur_frm.doc, 'ChildTable1', {
//                     field1: values.field1,
//                     field2: values.field2,
//                     field3: values.field3
//                 });
//                 cur_frm.refresh_field('child_table_1');
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     },

//     child_table_2_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_1 = cur_frm.doc.child_table_1;
//             for (var i = 0; i < child_table_1.length; i++) {
//                 var row = child_table_1[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             frappe.model.add_child(cur_frm.doc, 'ChildTable1', {
//                 field1: child.field1,
//                 field2: child.field2,
//                 field3: child.field3
//             });
//             cur_frm.refresh_field('child_table_1');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     },

//     child_table_1_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_2 = cur_frm.doc.child_table_2;
//             for (var i = 0; i < child_table_2.length; i++) {
//                 var row = child_table_2[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             frappe.model.add_child(cur_frm.doc, 'ChildTable2', {
//                 field1: child.field1,
//                 field2: child.field2,
//                 field3: child.field3
//             });
//             cur_frm.refresh_field('child_table_2');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_2.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_2');
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_1.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_1');
//     }
// });





// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//                 var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//                 child1.field1 = values.field1;
//                 child1.field2 = values.field2;
//                 child1.field3 = values.field3;

//                 child2.field1 = values.field1;
//                 child2.field2 = values.field2;
//                 child2.field3 = values.field3;

//                 cur_frm.refresh_fields();
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     },

//     child_table_2_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_1 = cur_frm.doc.child_table_1;
//             for (var i = 0; i < child_table_1.length; i++) {
//                 var row = child_table_1[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//             var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child1.field1 = child.field1;
//             child1.field2 = child.field2;
//             child1.field3 = child.field3;

//             child2.field1 = child.field1;
//             child2.field2 = child.field2;
//             child2.field3 = child.field3;

//             cur_frm.refresh_fields();
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     },

//     child_table_1_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.get_field('field1').$input.on('change', function() {
//             var child = locals[cdt][cdn];
//             var child_table_2 = cur_frm.doc.child_table_2;
//             for (var i = 0; i < child_table_2.length; i++) {
//                 var row = child_table_2[i];
//                 if (row.name === child.name) {
//                     row.field1 = child.field1;
//                     row.field2 = child.field2;
//                     row.field3 = child.field3;
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     break;
//                 }
//             }
//         });

//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//             var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child1.field1 = child.field1;
//             child1.field2 = child.field2;
//             child1.field3 = child.field3;

//             child2.field1 = child.field1;
//             child2.field2 = child.field2;
//             child2.field3 = child.field3;

//             cur_frm.refresh_fields();
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_2.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_2');
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_1.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_1');
//     }
// });
// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//                 var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//                 child1.field1 = values.field1;
//                 child1.field2 = values.field2;
//                 child1.field3 = values.field3;

//                 child2.field1 = values.field1;
//                 child2.field2 = values.field2;
//                 child2.field3 = values.field3;

//                 cur_frm.refresh_fields();
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     },

//     child_table_2_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//             var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child1.field1 = child.field1;
//             child1.field2 = child.field2;
//             child1.field3 = child.field3;

//             child2.field1 = child.field1;
//             child2.field2 = child.field2;
//             child2.field3 = child.field3;

//             cur_frm.refresh_fields();
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     },

//     child_table_1_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//             var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child1.field1 = child.field1;
//             child1.field2 = child.field2;
//             child1.field3 = child.field3;

//             child2.field1 = child.field1;
//             child2.field2 = child.field2;
//             child2.field3 = child.field3;

//             cur_frm.refresh_fields();
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_2.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_2');
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_1.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_field('child_table_1');
//     }
// });
// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//                 var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//                 child1.field1 = values.field1;
//                 child1.field2 = values.field2;
//                 child1.field3 = values.field3;

//                 child2.field1 = values.field1;
//                 child2.field2 = values.field2;
//                 child2.field3 = values.field3;

//                 cur_frm.refresh_fields('child_table_1');
//                 cur_frm.refresh_fields('child_table_2');
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     },

//     child_table_1_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child2.field1 = child.field1;
//             child2.field2 = child.field2;
//             child2.field3 = child.field3;

//             cur_frm.refresh_fields('child_table_2');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     },

//     child_table_2_on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                
//             child1.field1 = child.field1;
//             child1.field2 = child.field2;
//             child1.field3 = child.field3;

//             cur_frm.refresh_fields('child_table_1');
//             cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//         };

//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_2.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_1[cur_frm.doc.child_table_1.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_fields('child_table_2');
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     validate: function(frm) {
//         cur_frm.doc.child_table_1.forEach(function(row) {
//             if (row.name === cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].name) {
//                 row.field1 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field1;
//                 row.field2 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field2;
//                 row.field3 = cur_frm.doc.child_table_2[cur_frm.doc.child_table_2.length - 1].field3;
//             }
//         });
//         cur_frm.refresh_fields('child_table_1');
//     }
// });
// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//                 var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//                 child1.field1 = values.field1;
//                 child1.field2 = values.field2;
//                 child1.field3 = values.field3;

//                 child2.field1 = values.field1;
//                 child2.field2 = values.field2;
//                 child2.field3 = values.field3;

//                 cur_frm.refresh_fields(['child_table_1', 'child_table_2']);
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     field1: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
//         var child2_row = cur_frm.doc.child_table_2.find(row => row.name === child.name);
//         if (child2_row) {
//             child2_row.field1 = child.field1;
//             child2_row.field2 = child.field2;
//             child2_row.field3 = child.field3;
//             cur_frm.refresh_field('child_table_2');
//         }
//     },

//     on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child2.field1 = child.field1;
//             child2.field2 = child.field2;
//             child2.field3 = child.field3;

//             cur_frm.refresh_field('child_table_2');
//         };

//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     field1: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
//         var child1_row = cur_frm.doc.child_table_1.find(row => row.name === child.name);
//         if (child1_row) {
//             child1_row.field1 = child.field1;
//             child1_row.field2 = child.field2;
//             child1_row.field3 = child.field3;
//             cur_frm.refresh_field('child_table_1');
//         }
//     },

//     on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                
//             child1.field1 = child.field1;
//             child1.field2 = child.field2;
//             child1.field3 = child.field3;

//             cur_frm.refresh_field('child_table_1');
//         };

//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     return false;
//                 }
//             });
//         };
//     }
// });
// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//                 var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//                 child1.field1 = values.field1;
//                 child1.field2 = values.field2;
//                 child1.field3 = values.field3;

//                 child2.field1 = values.field1;
//                 child2.field2 = values.field2;
//                 child2.field3 = values.field3;

//                 cur_frm.refresh_fields(['child_table_1', 'child_table_2']);
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child2_row = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child2_row.field1 = child.field1;
//             child2_row.field2 = child.field2;
//             child2_row.field3 = child.field3;

//             cur_frm.refresh_field('child_table_2');
//         };

//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     on_form_rendered: function(frm, cdt, cdn) {
//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1_row = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                
//             child1_row.field1 = child.field1;
//             child1_row.field2 = child.field2;
//             child1_row.field3 = child.field3;

//             cur_frm.refresh_field('child_table_1');
//         };

//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     return false;
//                 }
//             });
//         };
//     }
// });


// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//                 var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//                 child1.field1 = values.field1;
//                 child1.field2 = values.field2;
//                 child1.field3 = values.field3;

//                 child2.field1 = values.field1;
//                 child2.field2 = values.field2;
//                 child2.field3 = values.field3;

//                 cur_frm.refresh_fields(['child_table_1', 'child_table_2']);
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     onload: function(frm) {
//         frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child2_row = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//             child2_row.field1 = child.field1;
//             child2_row.field2 = child.field2;
//             child2_row.field3 = child.field3;

//             cur_frm.refresh_field('child_table_2');
//         };

//         frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_2.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_2.splice(index, 1);
//                     cur_frm.refresh_field('child_table_2');
//                     return false;
//                 }
//             });
//         };
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     onload: function(frm) {
//         frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
//             var child = locals[cdt][cdn];
//             var child1_row = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                
//             child1_row.field1 = child.field1;
//             child1_row.field2 = child.field2;
//             child1_row.field3 = child.field3;

//             cur_frm.refresh_field('child_table_1');
//         };

//         frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
//             var removed_row = locals[cdt][cdn];
//             cur_frm.doc.child_table_1.forEach(function(row, index) {
//                 if (row.name === removed_row.name) {
//                     cur_frm.doc.child_table_1.splice(index, 1);
//                     cur_frm.refresh_field('child_table_1');
//                     return false;
//                 }
//             });
//         };
//     }
// });



frappe.ui.form.on('ParentDoctype', {
    refresh: function(frm) {
        frm.add_custom_button(__('Add Field'), function() {
            frappe.prompt([
                {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
                {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
                {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
            ],
            function(values){
                var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
                child1.field1 = values.field1;
                child1.field2 = values.field2;
                child1.field3 = values.field3;

                child2.field1 = values.field1;
                child2.field2 = values.field2;
                child2.field3 = values.field3;

                cur_frm.refresh_fields(['child_table_1', 'child_table_2']);
                cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
            }, __('Add Field'));
        });

        frm.add_custom_button(__('Delete Field'), function() {
            frappe.confirm(
                __('Are you sure you want to delete the last row?'),
                function(){
                    // Remove last row from child table 1
                    cur_frm.doc.child_table_1.pop();
                    cur_frm.refresh_field('child_table_1');

                    // Remove last row from child table 2
                    cur_frm.doc.child_table_2.pop();
                    cur_frm.refresh_field('child_table_2');

                    // Update length_of_child_tables field
                    cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
                }
            );
        });
    }
});

frappe.ui.form.on('ChildTable1', {
    onload: function(frm) {
        frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
            var child = locals[cdt][cdn];
            var child2_row = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
            child2_row.field1 = child.field1;
            child2_row.field2 = child.field2;
            child2_row.field3 = child.field3;

            cur_frm.refresh_field('child_table_2');
        };
    }
});

frappe.ui.form.on('ChildTable2', {
    onload: function(frm) {
        frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
            var child = locals[cdt][cdn];
            var child1_row = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                
            child1_row.field1 = child.field1;
            child1_row.field2 = child.field2;
            child1_row.field3 = child.field3;

            cur_frm.refresh_field('child_table_1');
        };
    }
});


frappe.ui.form.on('ParentDoctype', {
    refresh: function(frm) {
        frm.add_custom_button(__('Add Field'), function() {
            frappe.prompt([
                {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
                {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
                {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
            ],
            function(values){
                var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
                child1.field1 = values.field1;
                child1.field2 = values.field2;
                child1.field3 = values.field3;

                child2.field1 = values.field1;
                child2.field2 = values.field2;
                child2.field3 = values.field3;

                cur_frm.refresh_fields(['child_table_1', 'child_table_2']);
                cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
            }, __('Add Field'));
        });
    }
});

frappe.ui.form.on('ChildTable1', {
    onload: function(frm) {
        frm.fields_dict['child_table_1'].grid.on_grid_row_added = function(doc, cdt, cdn) {
            var child = locals[cdt][cdn];
            var child2_row = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
            child2_row.field1 = child.field1;
            child2_row.field2 = child.field2;
            child2_row.field3 = child.field3;

            cur_frm.refresh_field('child_table_2');
        };

        frm.fields_dict['child_table_1'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
            var removed_row = locals[cdt][cdn];
            cur_frm.doc.child_table_2.forEach(function(row, index) {
                if (row.name === removed_row.name) {
                    cur_frm.doc.child_table_2.splice(index, 1);
                    cur_frm.refresh_field('child_table_2');
                    return false;
                }
            });
        };
    }
});

frappe.ui.form.on('ChildTable2', {
    onload: function(frm) {
        frm.fields_dict['child_table_2'].grid.on_grid_row_added = function(doc, cdt, cdn) {
            var child = locals[cdt][cdn];
            var child1_row = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
                
            child1_row.field1 = child.field1;
            child1_row.field2 = child.field2;
            child1_row.field3 = child.field3;

            cur_frm.refresh_field('child_table_1');
        };

        frm.fields_dict['child_table_2'].grid.on_grid_row_removed = function(doc, cdt, cdn) {
            var removed_row = locals[cdt][cdn];
            cur_frm.doc.child_table_1.forEach(function(row, index) {
                if (row.name === removed_row.name) {
                    cur_frm.doc.child_table_1.splice(index, 1);
                    cur_frm.refresh_field('child_table_1');
                    return false;
                }
            });
        };
    }
});


// frappe.ui.form.on('ParentDoctype', {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Add Field'), function() {
//             frappe.prompt([
//                 {'fieldname': 'field1', 'fieldtype': 'Data', 'label': 'Field 1'},
//                 {'fieldname': 'field2', 'fieldtype': 'Data', 'label': 'Field 2'},
//                 {'fieldname': 'field3', 'fieldtype': 'Data', 'label': 'Field 3'}
//             ],
//             function(values){
//                 var child1 = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
//                 var child2 = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
                
//                 child1.field1 = values.field1;
//                 child1.field2 = values.field2;
//                 child1.field3 = values.field3;

//                 child2.field1 = values.field1;
//                 child2.field2 = values.field2;
//                 child2.field3 = values.field3;

//                 cur_frm.refresh_fields(['child_table_1', 'child_table_2']);
//                 cur_frm.set_value('length_of_child_tables', cur_frm.doc.child_table_1.length + cur_frm.doc.child_table_2.length);
//             }, __('Add Field'));
//         });
//     }
// });

// frappe.ui.form.on('ChildTable1', {
//     on_grid_row_added: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
//         var child2_row = frappe.model.add_child(cur_frm.doc, 'ChildTable2', 'child_table_2');
            
//         child2_row.field1 = child.field1;
//         child2_row.field2 = child.field2;
//         child2_row.field3 = child.field3;

//         cur_frm.refresh_field('child_table_2');
//     },

//     on_grid_row_removed: function(frm, cdt, cdn) {
//         var removed_row = locals[cdt][cdn];
//         cur_frm.doc.child_table_2.forEach(function(row, index) {
//             if (row.name === removed_row.name) {
//                 cur_frm.doc.child_table_2.splice(index, 1);
//                 cur_frm.refresh_field('child_table_2');
//                 return false;
//             }
//         });
//     }
// });

// frappe.ui.form.on('ChildTable2', {
//     on_grid_row_added: function(frm, cdt, cdn) {
//         var child = locals[cdt][cdn];
//         var child1_row = frappe.model.add_child(cur_frm.doc, 'ChildTable1', 'child_table_1');
            
//         child1_row.field1 = child.field1;
//         child1_row.field2 = child.field2;
//         child1_row.field3 = child.field3;

//         cur_frm.refresh_field('child_table_1');
//     },

//     on_grid_row_removed: function(frm, cdt, cdn) {
//         var removed_row = locals[cdt][cdn];
//         cur_frm.doc.child_table_1.forEach(function(row, index) {
//             if (row.name === removed_row.name) {
//                 cur_frm.doc.child_table_1.splice(index, 1);
//                 cur_frm.refresh_field('child_table_1');
//                 return false;
//             }
//         });
//     }
// });
