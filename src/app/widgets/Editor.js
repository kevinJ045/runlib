import { Widget } from "../../gui";
import { findEl, registerElement } from "../../gui/utils/elman";
import { basicSetup, EditorView } from "codemirror"
import { keymap } from "@codemirror/view"
import { EditorState, Compartment } from "@codemirror/state"
import { python } from "@codemirror/lang-python"
import { javascript } from "@codemirror/lang-javascript"
import { defaultEditorTheme, hightLights } from "../modules/theme";
import { syntaxHighlighting, syntaxTree } from "@codemirror/language"
import { indentWithTab } from "@codemirror/commands"
import { linter, Diagnostic } from "@codemirror/lint"
import {Text as CMText } from "@codemirror/state"
import { async } from "../../gui/modules/f7";
import { executeCode } from "../../modules/exec/exec";

let language = new Compartment, tabSize = new Compartment;

function getDefVars(){
	let s = new Set();
	['console', 'process', 'window'].forEach(f => s.add(f));
	return s;
}

class Editor extends Widget{

	editorState = EditorState.create({
		extensions: [
			...basicSetup,
			language.of(javascript({jsx: true})),
			tabSize.of(EditorState.tabSize.of(2)),
			keymap.of([indentWithTab]),
			EditorView.theme(defaultEditorTheme, {dark: true}),
			syntaxHighlighting(hightLights),
			linter(view => {
				let diagnostics = [];
				syntaxTree(view.state).cursor().iterate((node) => {
					if(!view.state.declared) view.state.declared = getDefVars();
					if(node.name == "VariableDefinition") view.state.declared.add(view.state.doc.sliceString(node.from, node.to));
					if (node.name == "VariableName" && !view.state.declared.has(view.state.doc.sliceString(node.from, node.to))) diagnostics.push({
						from: node.from,
						to: node.to,
						severity: "warning",
						message: "Undefined Variable",
						actions: [{
							name: "Remove",
							apply(view, from, to) { view.dispatch({changes: {from, to}}) }
						}]
					})
				})
				return diagnostics
			})
		]
	});

	constructor(options){
		if(!options) options = {};
		super({class: "editor", size: {height: '100vh', width: '100%'}, ...options});

		console.log(this.editorState);

		this.editorState.doc = CMText.of(options.value || `
let man = [];

for(var i in man){
	document.log(i);
}

function findSequence(goal) {
	function find(start, history) {
		if (start == goal)
			return history;
		else if (start > goal)
			return null;
		else
			return find(start + 5, "(" + history + " + 5)") ||
							find(start * 3, "(" + history + " * 3)");
	}
	return find(1, "1");
}`.split('\n'));

		let editor = new EditorView({
			parent: findEl(this.id)[0],
			state: this.editorState
    });

		this.editor = this.id+'-editor';

		registerElement(editor, this.editor);

		this.on('input', async () => {
			if(this.running) return;
			this.running = true;
			try{
				await executeCode(editor.state.doc.toString(), {
					stdout: (out) => {
						alert(out);
					}
				});
			} catch(e) {};
			this.running = false;
		})
	}

	getValue() {
    return findEl(this.editor).state.doc.toString();
  }

  setValue(value) {
    findEl(this.editor).setValue(value);
  }

}

export default Editor;