from frappe import _

def get_data():
    return [
        {
            "module_name": "Cxs Optical",
            "color": "blue",
            "icon": "octicon octicon-file-directory",
            "type": "module",
            "label": _("Optical"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Shape Type",
                    "label": _("Shape Type"),
                    "description": _("Manage customer feedback records")
                },
                {
                    "type": "doctype",
                    "name": "Lens Color",
                    "label": _("Lens Color"),
                    "description": _("View custom dashboards")
                }
            ]
        }
    ]