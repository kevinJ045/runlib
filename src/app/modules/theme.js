import {tags} from "@lezer/highlight"
import {HighlightStyle} from "@codemirror/language"

console.log(tags);

const hightLights = HighlightStyle.define([
  {
		"tag": tags.comment,
		"color": "#b3bcdf",
		"fontStyle": "italic"
	},
	{
		"tag": tags.number,
		"color": "#fab38a"
	},
	{
		"tag": tags.atom,
		"color": "#b4befe"
	},
	{
		"tag": tags.unit,
		"color": "#b4befe"
	},
	{
		"tag": tags.keyword,
		"color": "#f38ba8"
	},
	{
		"tag": tags.variableName,
		"color": "#c6d0f5"
	},
	{
		"tag": tags.className,
		"color": "#f9e2af"
	},
	{
		"tag": tags.operator,
		"color": "#89dce2"
	},
	{
		"tag": tags.emphasis,
		"color": "#c6d0f5"
	},
	{
		"tag": tags.definitionKeyword,
		"color": "#87b0f9"
	},
	{
		"tag": tags.propertyName,
		"color": "#c6d0f5"
	},
	{
		"tag": tags.string,
		"color": "#a6e3a1"
	},
	{
		"tag": tags.quote,
		"color": "#89dee0"
	},
	{
		"tag": tags.bool,
		"color": "#87b0f9"
	},
	{
		"tag": tags.attributeName,
		"color": "#89dee0"
	},
	{
		"tag": tags.regexp,
		"color": "#fab38a"
	},
	{
		"tag": tags.tagName,
		"color": "#fab38a"
	}	
]);


let defaultEditorTheme = {
	"&": {
    color: "#a1a8c9",
    backgroundColor: "#1e1e2e"
  },
  ".cm-content": {
    caretColor: "#1e1e2e"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#1e1e2e"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#c6d0f5"
  },
  ".cm-gutters": {
    backgroundColor: "#1e1e2e",
    color: "#a1a8c9",
    border: "none"
  }
};

export { defaultEditorTheme, hightLights };