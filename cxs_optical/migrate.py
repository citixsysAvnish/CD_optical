# Copyright (c) 2023, iVendNext and contributors
# For license information, please see license.txt

import json
import os

import frappe
from frappe import _

def after_migrate():
	#remove_custom_fields()	
	create_custom_fields()

def create_custom_fields():
	CUSTOM_FIELDS = {}
	print("Creating/Updating CXS Optical Custom Fields...")
	path = os.path.join(os.path.dirname(__file__), "cxs_optical/custom_fields")
	for file in os.listdir(path):
		with open(os.path.join(path, file)) as f:
			CUSTOM_FIELDS.update(json.load(f))
	from frappe.custom.doctype.custom_field.custom_field import create_custom_fields

	create_custom_fields(CUSTOM_FIELDS)

"""
	Removes custom fields for CXS Optical.

	This function reads JSON files from the 'cxs_optical/custom_fields' directory,
	converts the JSON data to Python objects, and iterates through the JSON array
	to remove custom fields from the "Item" entity.

	Steps:
	1. Prints a message indicating the start of the removal process.
	2. Constructs the path to the 'cxs_optical/custom_fields' directory.
	3. Iterates through each file in the directory.
	4. Opens and reads the JSON data from each file.
	5. Iterates through the JSON array and removes custom fields based on the "fieldname".

	Note:
	- Ensure that the 'cxs_optical/custom_fields' directory exists and contains valid JSON files.
	- The 'remove_fields' function should be defined elsewhere in the codebase.

	Raises:
	- FileNotFoundError: If the 'cxs_optical/custom_fields' directory or any file within it does not exist.
	- json.JSONDecodeError: If any file contains invalid JSON.

	"""
def remove_custom_fields():	
	# Convert JSON data to a Python object
	print("remove CXS Optical Custom Fields...")
	path = os.path.join(os.path.dirname(__file__), "cxs_optical/custom_fields")
	for file in os.listdir(path):
		with open(os.path.join(path, file)) as f:
			data = json.loads(f)
			# Iterate through the JSON array
			for item in data:
				remove_fields("Item", item["fieldname"])


def remove_fields(doc_type, fieldnames):
	print(doc_type+ "----"+ fieldnames)
	cfs = frappe.db.get_values(
		"Custom Field", filters={"fieldname": ["in", fieldnames], "dt": doc_type}
	)
	for cf in cfs:
		print(cf)
		frappe.delete_doc("Custom Field", cf[0])
