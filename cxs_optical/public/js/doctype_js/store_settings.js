frappe.ui.form.on('Item', {
    validate: function (frm) {
        if (frm.doc.custom_opt_store_setting_booking_starttime >= frm.doc.custom_opt_store_setting_booking_end_time) {
            frappe.msgprint(__('Booking Start Time must be less than Booking End Time'));
            frappe.validated = false;
            return;
        }
        if (frm.doc.custom_opt_store_setting_calender_time_slot < 0) {
            frappe.msgprint(__('Time Slot must be less than 0 minutes'));
            frappe.validated = false;
            return;
        }
        if (!frm.doc.custom_opt_store_setting_monday && !frm.doc.custom_opt_store_setting_tuesday
            && !frm.doc.custom_opt_store_setting_wednesday && !frm.doc.custom_opt_store_setting_thursday
            && !frm.doc.custom_opt_store_setting_friday && !frm.doc.custom_opt_store_setting_saturday
            && !frm.doc.custom_opt_store_setting_sunday) {
            frappe.msgprint(__('Please select atleast one working day'));
            frappe.validated = false;
            return;
        }
    }

});