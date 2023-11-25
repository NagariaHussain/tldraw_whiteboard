frappe.ui.keys.add_shortcut({
  description: "Open Whiteboard",
  shortcut: "shift+ctrl+o",
  action: () => {
    frappe.set_route("whiteboard");
  },
});
