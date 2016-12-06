import "mootools";
import Stache from "can/view/stache/";
import "ucp2/dashboard/";

let template = Stache('<ucp2-dashboard/>');
$("ucp").inject(template());
