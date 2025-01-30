frappe.pages['optometrist-schedule'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Optometrist Schedule',
		single_column: true
	});

	debugger;
	$(frappe.render_template("optometrist_schedule", {})).appendTo(page.main);
}