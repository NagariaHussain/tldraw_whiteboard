frappe.pages["whiteboard"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Whiteboard"),
		single_column: true,
	});
};

frappe.pages["whiteboard"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper);
	$parent.empty();

	frappe.require(["whiteboard.bundle.css", "whiteboard.bundle.jsx"]).then(() => {
		frappe.whiteboard = new frappe.ui.Whiteboard({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}