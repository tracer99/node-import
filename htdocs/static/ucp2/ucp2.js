import 	"mootools";
import can from "can";
import template from "ucp2/ucp2.stache!";

export const ViewModel = Map.extxend({
	myMessage: "Hello World"
});

export default Component.extend({
	tag: "ucp-base",
	template: template,
	viewModel: ViewModel
});
	



