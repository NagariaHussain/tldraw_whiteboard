import frappe


@frappe.whitelist()
def save_user_whiteboard_state(state: str):
    """Save the logged in user's whiteboard state to the database."""
    exists = frappe.db.exists("User Whiteboard State", frappe.session.user)

    if not exists:
        doc = frappe.new_doc("User Whiteboard State")
        doc.user = frappe.session.user
        doc.state = state
        doc.insert(ignore_permissions=True)
    else:
        frappe.db.set_value(
            "User Whiteboard State", frappe.session.user, "state", state
        )
