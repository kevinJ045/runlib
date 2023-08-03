
function executeCode(code, {
	start = () => {},
	stdin = () => {},
	stdout = () => {},
	onComplete = () => {},
}){
	return new Promise((resolve, reject) => {
		const iframe = document.createElement('iframe');
		iframe.style.display = 'none'; 

		document.body.appendChild(iframe);

		try {
			const iframeWindow = iframe.contentWindow || iframe.contentDocument.defaultView;

			let context = iframeWindow.context = {};
			iframeWindow.args = {};
			iframeWindow.wait = false;

			context.console = { log: (f) => stdout(f) };

			let man = iframeWindow.eval(`(async () => {with(context){let e = (function(){${code}}).apply(context, args);return wait ? await e : e;}})();`);

			resolve(man);

		} catch (error) {
			console.error('Error executing code:', error);
			reject(error);
		}
	});
}

export { executeCode };