import replace from "gulp-replace"; // Find and replace some code
import plumber from "gulp-plumber"; // Error processing
import notify from "gulp-notify"; // Notify about error
import browsersync from "browser-sync"; // Live local server
import newer from "gulp-newer"; // Check updates in code
import ifPlugin from "gulp-if"; // Conditional branch

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	ifPlugin: ifPlugin
}
