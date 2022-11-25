function common_init() {
	/*
	setting
	+---lang:language
		0:en-gb English - Great Britain
		1:zh-cn Chinese - China
	+---color:color mode
		0:normal polychromatic
		1:monochromatic
	*/
	var setting = {};
	setting.lang = 0;
	setting.color = 0;
	common_init_ReadCookie(setting);
}
function common_init_ReadCookie(setting) {
	var CookieStr = document.cookie;
	var index0, index1;
	var substr;

	// setting
	// lang
	index0 = CookieStr.search(/(^|;)\s*lang\s*=.*(;|$)/);
	if (index0 != -1) {
		// extract value field
		index0 = CookieStr.indexOf("=", index0) + 1;
		index1 = CookieStr.indexOf(";", index0);
		if (index1 == -1) substr = CookieStr.slice(index0);
		else substr = CookieStr.slice(index0, index1);
		// convert to number
		setting.lang = parseInt(substr);
	}
	// color
	index0 = CookieStr.search(/(^|;)\s*color\s*=.*(;|$)/);
	if (index0 != -1) {
		// extract value field
		index0 = CookieStr.indexOf("=", index0) + 1;
		index1 = CookieStr.indexOf(";", index0);
		if (index1 == -1) substr = CookieStr.slice(index0);
		else substr = CookieStr.slice(index0, index1);
		// convert to number
		setting.color = parseInt(substr);
	}
}
function common_init_LanguageSelector() {

}

common_init();