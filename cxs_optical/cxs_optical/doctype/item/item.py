import frappe
from frappe import _
from frappe.utils import cint, flt, get_link_to_form


def validate(self, method):
	validate_POF_frame(self)
	  
 
def validate_POF_frame(self):
	true_count = sum(1 for row in self.Item if row.custom_is_POF_frame == 1)
    	if true_count > 1:
        	frappe.throw(_("Only one record POF frame can be created."))

def on_trash(self, method):
	pass
	# validate_gift_card(self, "on_trash")