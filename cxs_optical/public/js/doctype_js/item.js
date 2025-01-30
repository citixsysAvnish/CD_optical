frappe.ui.form.on('Item', {
    ///Lense validations////
    custom_opt_lens_sphere_min: function (frm) {
        var result = validateValueRange__20_to_20(frm, 'custom_opt_lens_sphere_min');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_lens_sphere_min');
        if (!result) return;
        if (frm.doc.custom_opt_lens_sphere_min >= frm.doc.custom_opt_lens_sphere_max) {
            frappe.msgprint(__('Min Sphere must be less than Max Sphere value'));
            frappe.validated = false;
        }
    },
    custom_opt_lens_sphere_max: function (frm) {
        var result = validateValueRange__20_to_20(frm, 'custom_opt_lens_sphere_max');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_lens_sphere_max');
        if (!result) return;
        if (frm.doc.custom_opt_lens_sphere_min >= frm.doc.custom_opt_lens_sphere_max) {
            frappe.msgprint(__('Min Sphere must be less than Max Sphere value'));
            frappe.validated = false;
        }
    },
    custom_opt_lens_cylinder_min: function (frm) {
        var result = validateValueRange__800_to_025(frm, 'custom_opt_lens_cylinder_min');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_lens_cylinder_min');
        if (!result) return;
    },
    custom_opt_lens_cylinder_max: function (frm) {
        var result = validateValueRange__800_to_025(frm, 'custom_opt_lens_cylinder_max');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_lens_cylinder_max');
        if (!result) return;

    },
    custom_opt_lens_addition: function (frm) {
        var result = validateValueRange_050_to_8(frm, 'custom_opt_lens_addition');
        if (!result) return;
        validateValueDiviedby25(frm, 'custom_opt_lens_addition');
        if (!result) return;
    },
    custom_opt_lens_basecurve: function (frm) {
        var result = validateValueRange_050_to_8(frm, 'custom_opt_lens_basecurve');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_lens_basecurve');
        if (!result) return;
    },
    custom_opt_lens_diameter: function (frm) {
        var result = ValuGreaterThenZero(frm, 'custom_opt_lens_diameter');
        if (!result) return;
    },
    ///Frame validations////
    ///POF Frame Validations///
    ///////
    /*Contact Lens Validations*/
    custom_opt_cl_sphere: function (frm) {
        var result = validateValueRange__20_to_20(frm, 'custom_opt_cl_sphere');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_cl_sphere');
        if (!result) return;
    },
    custom_opt_cl_base_curve: function (frm) {
        var result = validateValueRange_0_to_20(frm, 'custom_opt_cl_base_curve');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_cl_base_curve');
        if (!result) return;
    },
    custom_opt_cl_cylinder: function (frm) {
        var result = validateValueRange__800_to_025(frm, 'custom_opt_cl_cylinder');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_cl_cylinder');
        if (!result) return;
    },
    custom_opt_cl_axis: function (frm) {
        var result = validateValueRange_0_to_180(frm, 'custom_opt_cl_axis');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_cl_axis');
    },
    custom_opt_cl_addition: function (frm) {
        var result = validateValueRange_050_to_8(frm, 'custom_opt_cl_addition');
        if (!result) return;
        result = validateValueDiviedby25(frm, 'custom_opt_cl_addition');
        if (!result) return;
    },
    custome_opt_cl_diameter: function (frm) {
        var result = ValuGreaterThenZero(frm, 'custome_opt_cl_diameter');
        if (!result) return;
    },
    ///Lead Days////
    custom_opt_lead_time_min_delivery_day: function (frm) {
        var result = ValuGreaterThenZero(frm, 'custom_opt_lead_time_min_delivery_day');
        if (!result) return;
    },
});
/**
 * Validates that the value of a specified control in the form is within the range of -20.00 to +20.00.
 * If the value is outside this range, an error message is displayed, the field is cleared, and form validation is set to false.
 *
 * @param {Object} frm - The form object containing the control to validate.
 * @param {string} controlName - The name of the control whose value is to be validated.
 * @returns {boolean} - Returns true if the value is within the valid range, otherwise false.
 */
function validateValueRange__20_to_20(frm, controlName) {
    const value = frm.doc[controlName];
    if (value && (value < -20.00 || value > 20.00)) {
        frappe.msgprint(__('The value for {0} must be in the range of -20.00 to +20.00', [frm.fields_dict[controlName].df.label]));
        frm.set_value(controlName, null); // Clear the field if invalid
        frappe.validated = false;
        return false;
    }
    return true;
}

/**
 * Validates if the value of the specified control in the form is a multiple of 0.25.
 * If the value is not a multiple of 0.25, it displays an error message, clears the field, and prevents form submission.
 *
 * @param {Object} frm - The form object containing the control to validate.
 * @param {string} controlName - The name of the control to validate.
 * @returns {boolean} - Returns true if the value is valid, otherwise false.
 */
function validateValueDiviedby25(frm, controlName) {
    const value = frm.doc[controlName];
    if (value && (value % 0.25 !== 0)) {
        frappe.msgprint(__('The value for {0} must be a multiple of 0.25.', [frm.fields_dict[controlName].df.label]));
        frm.set_value(controlName, null); // Clear the field if invalid
        frappe.validated = false;
        return false;
    }
    return true;
}
/**
 * Validates that the value of the specified control is within the range of -8.00 to -0.25.
 * If the value is outside this range, an error message is displayed, the field is cleared, 
 * and the form validation is marked as false.
 *
 * @param {Object} frm - The form object containing the control.
 * @param {string} controlName - The name of the control to validate.
 * @returns {boolean} - Returns true if the value is within the range, otherwise false.
 */
function validateValueRange__800_to__025(frm, controlName) {
    const value = frm.doc[controlName];
    if (value && (value < -8.00 || value > -0.25)) {
        frappe.msgprint(__('The value for {0} must be in the range of -8.00 to -0.25', [frm.fields_dict[controlName].df.label]));
        frm.set_value(controlName, null); // Clear the field if invalid
        frappe.validated = false;
        return false;
    }
    return true;
}
function validateValueRange_050_to_8(frm, controlName) {
    const value = frm.doc[controlName];
    if (value && (value < 0.50 || value > 8.00)) {
        frappe.msgprint(__('The value for {0} must be in the range of 0.50 to 8.00', [frm.fields_dict[controlName].df.label]));
        frm.set_value(controlName, null); // Clear the field if invalid
        frappe.validated = false;
        return false;
    }
    return true;
}
function validateValueRange_0_to_20(frm, controlName) {
    const value = frm.doc[controlName];
    if (value && (value < 0.00 || value > 20.00)) {
        frappe.msgprint(__('The value for {0} must be in the range of 0 to 20.00', [frm.fields_dict[controlName].df.label]));
        frm.set_value(controlName, null); // Clear the field if invalid
        frappe.validated = false;
        return false;
    }
    return true;
}
function ValuGreaterThenZero(frm, controlName) {
    const value = frm.doc[controlName];
    if (value && (value <= 0.00)) {
        frappe.msgprint(__('The value for {0} must be greter then 0', [frm.fields_dict[controlName].df.label]));
        frm.set_value(controlName, null); // Clear the field if invalid
        frappe.validated = false;
        return false;
    }
    return true;
}
function validateValueRange_0_to_180(frm, controlName) {
    const value = frm.doc[controlName];
    if (value && (value < 0.00 || value > 180.00)) {
        frappe.msgprint(__('The value for {0} must be in the range of 0 to 180.00', [frm.fields_dict[controlName].df.label]));
        frm.set_value(controlName, null); // Clear the field if invalid
        frappe.validated = false;
        return false;
    }
    return true;
}