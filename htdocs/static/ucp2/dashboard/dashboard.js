import can from "can";
import template from "./dashboard.stache!";

export const ViewModel = can.Map.extend({
	myMessage: "Hello World"
});

export default can.Component.extend({
	tag: "ucp2-dashboard",
	template: template,
	viewModel: ViewModel
});
	



