import voca from "../modules/voca.js";
import { findEl } from "../utils/elman.js";
import { isHTMLElement, isWidget } from "../utils/type.js";



function parseFCSS(props){
	return trimRules(props);
}

const allowedCssProperties = 'width|height|margin|margin-top|margin-right|margin-bottom|margin-left|padding|padding-top|padding-right|padding-bottom|padding-left|border|border-top|border-right|border-bottom|border-left|border-width|border-top-width|border-right-width|border-bottom-width|border-left-width|border-style|border-top-style|border-right-style|border-bottom-style|border-left-style|border-color|border-top-color|border-right-color|border-bottom-color|border-left-color|border-radius|border-top-left-radius|border-top-right-radius|border-bottom-left-radius|border-bottom-right-radius|box-shadow|overflow|overflow-x|overflow-y|visibility|display|position|top|right|bottom|left|float|clear|flex|flex-direction|flex-wrap|justify-content|align-items|align-content|flex-grow|flex-shrink|flex-basis|order|font-family|font-size|font-weight|font-style|text-align|text-transform|text-decoration|line-height|letter-spacing|white-space|background|background-color|background-image|background-repeat|background-position|background-size|color|cursor|z-index|opacity|content|transition|animation|transform|user-select'.split('|');
const allowedCssVariables = {
	'themeColor': '--f7-theme-color'
};
for(var i in allowedCssVariables){
	allowedCssProperties.push(voca.snakeCase(i));
}
function trimRules (rules) {
	for(var i in rules){
		if(allowedCssProperties.indexOf(voca.snakeCase(i)) < 0) delete rules[i];
		else if(allowedCssProperties.indexOf(i) < 0) delete rules[i];
	}
	return rules;
}
	
// let l = "";
// allowedCssProperties.forEach(item => {
// 	let name = voca.camelCase(item);
// 	l += (`
// 		set ${name}(value){
// 			setCss(this.name, {
// 				${name in allowedCssVariables ? `"${allowedCssVariables[name]}"` : name}: value
// 			});
// 		}
// 		get ${name}(){
// 			return getCss(this.name, '${name}');
// 		}
// 		${voca.camelCase('set-'+name)}(value){
// 			this.${name} = value;
// 			return this;
// 		}
// 	`);
// });
// console.log(l);

const css = {};

function setCss(name, map){
	if(!css[name]) css[name] = {};
	for(var i in map){
		css[name][i] = map[i];
	}
}

function getCss(name, prop){
	if(!css[name]) css[name] = {};
	if(!prop) return css[name];
	return css[name][prop];
}

class Style {

	name = "";

	constructor(name, map){
		if(!name) name = 'style-'+Object.keys(css).length;
		this.name = name;
	}

	addProperty(prop, value){
		let p = trimRules({[prop]: value});
		if(p[prop]) this.css[prop] = value;
	}

	get all(){
		return getCss(this.name);
	}
	set all(all){
		for(var i in all){
			this[i] = all[i];
		}
	}
	set(all){
		all = trimRules(all);
		this.all = all;
	}

	
	set width(value){
		setCss(this.name, {
			width: value
		});
	}
	get width(){
		return getCss(this.name, 'width');
	}
	setWidth(value){
		this.width = value;
		return this;
	}

	set height(value){
		setCss(this.name, {
			height: value
		});
	}
	get height(){
		return getCss(this.name, 'height');
	}
	setHeight(value){
		this.height = value;
		return this;
	}

	set margin(value){
		setCss(this.name, {
			margin: value
		});
	}
	get margin(){
		return getCss(this.name, 'margin');
	}
	setMargin(value){
		this.margin = value;
		return this;
	}

	set marginTop(value){
		setCss(this.name, {
			marginTop: value
		});
	}
	get marginTop(){
		return getCss(this.name, 'marginTop');
	}
	setMarginTop(value){
		this.marginTop = value;
		return this;
	}

	set marginRight(value){
		setCss(this.name, {
			marginRight: value
		});
	}
	get marginRight(){
		return getCss(this.name, 'marginRight');
	}
	setMarginRight(value){
		this.marginRight = value;
		return this;
	}

	set marginBottom(value){
		setCss(this.name, {
			marginBottom: value
		});
	}
	get marginBottom(){
		return getCss(this.name, 'marginBottom');
	}
	setMarginBottom(value){
		this.marginBottom = value;
		return this;
	}

	set marginLeft(value){
		setCss(this.name, {
			marginLeft: value
		});
	}
	get marginLeft(){
		return getCss(this.name, 'marginLeft');
	}
	setMarginLeft(value){
		this.marginLeft = value;
		return this;
	}

	set padding(value){
		setCss(this.name, {
			padding: value
		});
	}
	get padding(){
		return getCss(this.name, 'padding');
	}
	setPadding(value){
		this.padding = value;
		return this;
	}

	set paddingTop(value){
		setCss(this.name, {
			paddingTop: value
		});
	}
	get paddingTop(){
		return getCss(this.name, 'paddingTop');
	}
	setPaddingTop(value){
		this.paddingTop = value;
		return this;
	}

	set paddingRight(value){
		setCss(this.name, {
			paddingRight: value
		});
	}
	get paddingRight(){
		return getCss(this.name, 'paddingRight');
	}
	setPaddingRight(value){
		this.paddingRight = value;
		return this;
	}

	set paddingBottom(value){
		setCss(this.name, {
			paddingBottom: value
		});
	}
	get paddingBottom(){
		return getCss(this.name, 'paddingBottom');
	}
	setPaddingBottom(value){
		this.paddingBottom = value;
		return this;
	}

	set paddingLeft(value){
		setCss(this.name, {
			paddingLeft: value
		});
	}
	get paddingLeft(){
		return getCss(this.name, 'paddingLeft');
	}
	setPaddingLeft(value){
		this.paddingLeft = value;
		return this;
	}

	set border(value){
		setCss(this.name, {
			border: value
		});
	}
	get border(){
		return getCss(this.name, 'border');
	}
	setBorder(value){
		this.border = value;
		return this;
	}

	set borderTop(value){
		setCss(this.name, {
			borderTop: value
		});
	}
	get borderTop(){
		return getCss(this.name, 'borderTop');
	}
	setBorderTop(value){
		this.borderTop = value;
		return this;
	}

	set borderRight(value){
		setCss(this.name, {
			borderRight: value
		});
	}
	get borderRight(){
		return getCss(this.name, 'borderRight');
	}
	setBorderRight(value){
		this.borderRight = value;
		return this;
	}

	set borderBottom(value){
		setCss(this.name, {
			borderBottom: value
		});
	}
	get borderBottom(){
		return getCss(this.name, 'borderBottom');
	}
	setBorderBottom(value){
		this.borderBottom = value;
		return this;
	}

	set borderLeft(value){
		setCss(this.name, {
			borderLeft: value
		});
	}
	get borderLeft(){
		return getCss(this.name, 'borderLeft');
	}
	setBorderLeft(value){
		this.borderLeft = value;
		return this;
	}

	set borderWidth(value){
		setCss(this.name, {
			borderWidth: value
		});
	}
	get borderWidth(){
		return getCss(this.name, 'borderWidth');
	}
	setBorderWidth(value){
		this.borderWidth = value;
		return this;
	}

	set borderTopWidth(value){
		setCss(this.name, {
			borderTopWidth: value
		});
	}
	get borderTopWidth(){
		return getCss(this.name, 'borderTopWidth');
	}
	setBorderTopWidth(value){
		this.borderTopWidth = value;
		return this;
	}

	set borderRightWidth(value){
		setCss(this.name, {
			borderRightWidth: value
		});
	}
	get borderRightWidth(){
		return getCss(this.name, 'borderRightWidth');
	}
	setBorderRightWidth(value){
		this.borderRightWidth = value;
		return this;
	}

	set borderBottomWidth(value){
		setCss(this.name, {
			borderBottomWidth: value
		});
	}
	get borderBottomWidth(){
		return getCss(this.name, 'borderBottomWidth');
	}
	setBorderBottomWidth(value){
		this.borderBottomWidth = value;
		return this;
	}

	set borderLeftWidth(value){
		setCss(this.name, {
			borderLeftWidth: value
		});
	}
	get borderLeftWidth(){
		return getCss(this.name, 'borderLeftWidth');
	}
	setBorderLeftWidth(value){
		this.borderLeftWidth = value;
		return this;
	}

	set borderStyle(value){
		setCss(this.name, {
			borderStyle: value
		});
	}
	get borderStyle(){
		return getCss(this.name, 'borderStyle');
	}
	setBorderStyle(value){
		this.borderStyle = value;
		return this;
	}

	set borderTopStyle(value){
		setCss(this.name, {
			borderTopStyle: value
		});
	}
	get borderTopStyle(){
		return getCss(this.name, 'borderTopStyle');
	}
	setBorderTopStyle(value){
		this.borderTopStyle = value;
		return this;
	}

	set borderRightStyle(value){
		setCss(this.name, {
			borderRightStyle: value
		});
	}
	get borderRightStyle(){
		return getCss(this.name, 'borderRightStyle');
	}
	setBorderRightStyle(value){
		this.borderRightStyle = value;
		return this;
	}

	set borderBottomStyle(value){
		setCss(this.name, {
			borderBottomStyle: value
		});
	}
	get borderBottomStyle(){
		return getCss(this.name, 'borderBottomStyle');
	}
	setBorderBottomStyle(value){
		this.borderBottomStyle = value;
		return this;
	}

	set borderLeftStyle(value){
		setCss(this.name, {
			borderLeftStyle: value
		});
	}
	get borderLeftStyle(){
		return getCss(this.name, 'borderLeftStyle');
	}
	setBorderLeftStyle(value){
		this.borderLeftStyle = value;
		return this;
	}

	set borderColor(value){
		setCss(this.name, {
			borderColor: value
		});
	}
	get borderColor(){
		return getCss(this.name, 'borderColor');
	}
	setBorderColor(value){
		this.borderColor = value;
		return this;
	}

	set borderTopColor(value){
		setCss(this.name, {
			borderTopColor: value
		});
	}
	get borderTopColor(){
		return getCss(this.name, 'borderTopColor');
	}
	setBorderTopColor(value){
		this.borderTopColor = value;
		return this;
	}

	set borderRightColor(value){
		setCss(this.name, {
			borderRightColor: value
		});
	}
	get borderRightColor(){
		return getCss(this.name, 'borderRightColor');
	}
	setBorderRightColor(value){
		this.borderRightColor = value;
		return this;
	}

	set borderBottomColor(value){
		setCss(this.name, {
			borderBottomColor: value
		});
	}
	get borderBottomColor(){
		return getCss(this.name, 'borderBottomColor');
	}
	setBorderBottomColor(value){
		this.borderBottomColor = value;
		return this;
	}

	set borderLeftColor(value){
		setCss(this.name, {
			borderLeftColor: value
		});
	}
	get borderLeftColor(){
		return getCss(this.name, 'borderLeftColor');
	}
	setBorderLeftColor(value){
		this.borderLeftColor = value;
		return this;
	}

	set borderRadius(value){
		setCss(this.name, {
			borderRadius: value
		});
	}
	get borderRadius(){
		return getCss(this.name, 'borderRadius');
	}
	setBorderRadius(value){
		this.borderRadius = value;
		return this;
	}

	set borderTopLeftRadius(value){
		setCss(this.name, {
			borderTopLeftRadius: value
		});
	}
	get borderTopLeftRadius(){
		return getCss(this.name, 'borderTopLeftRadius');
	}
	setBorderTopLeftRadius(value){
		this.borderTopLeftRadius = value;
		return this;
	}

	set borderTopRightRadius(value){
		setCss(this.name, {
			borderTopRightRadius: value
		});
	}
	get borderTopRightRadius(){
		return getCss(this.name, 'borderTopRightRadius');
	}
	setBorderTopRightRadius(value){
		this.borderTopRightRadius = value;
		return this;
	}

	set borderBottomLeftRadius(value){
		setCss(this.name, {
			borderBottomLeftRadius: value
		});
	}
	get borderBottomLeftRadius(){
		return getCss(this.name, 'borderBottomLeftRadius');
	}
	setBorderBottomLeftRadius(value){
		this.borderBottomLeftRadius = value;
		return this;
	}

	set borderBottomRightRadius(value){
		setCss(this.name, {
			borderBottomRightRadius: value
		});
	}
	get borderBottomRightRadius(){
		return getCss(this.name, 'borderBottomRightRadius');
	}
	setBorderBottomRightRadius(value){
		this.borderBottomRightRadius = value;
		return this;
	}

	set boxShadow(value){
		setCss(this.name, {
			boxShadow: value
		});
	}
	get boxShadow(){
		return getCss(this.name, 'boxShadow');
	}
	setBoxShadow(value){
		this.boxShadow = value;
		return this;
	}

	set overflow(value){
		setCss(this.name, {
			overflow: value
		});
	}
	get overflow(){
		return getCss(this.name, 'overflow');
	}
	setOverflow(value){
		this.overflow = value;
		return this;
	}

	set overflowX(value){
		setCss(this.name, {
			overflowX: value
		});
	}
	get overflowX(){
		return getCss(this.name, 'overflowX');
	}
	setOverflowX(value){
		this.overflowX = value;
		return this;
	}

	set overflowY(value){
		setCss(this.name, {
			overflowY: value
		});
	}
	get overflowY(){
		return getCss(this.name, 'overflowY');
	}
	setOverflowY(value){
		this.overflowY = value;
		return this;
	}

	set visibility(value){
		setCss(this.name, {
			visibility: value
		});
	}
	get visibility(){
		return getCss(this.name, 'visibility');
	}
	setVisibility(value){
		this.visibility = value;
		return this;
	}

	set display(value){
		setCss(this.name, {
			display: value
		});
	}
	get display(){
		return getCss(this.name, 'display');
	}
	setDisplay(value){
		this.display = value;
		return this;
	}

	set position(value){
		setCss(this.name, {
			position: value
		});
	}
	get position(){
		return getCss(this.name, 'position');
	}
	setPosition(value){
		this.position = value;
		return this;
	}

	set top(value){
		setCss(this.name, {
			top: value
		});
	}
	get top(){
		return getCss(this.name, 'top');
	}
	setTop(value){
		this.top = value;
		return this;
	}

	set right(value){
		setCss(this.name, {
			right: value
		});
	}
	get right(){
		return getCss(this.name, 'right');
	}
	setRight(value){
		this.right = value;
		return this;
	}

	set bottom(value){
		setCss(this.name, {
			bottom: value
		});
	}
	get bottom(){
		return getCss(this.name, 'bottom');
	}
	setBottom(value){
		this.bottom = value;
		return this;
	}

	set left(value){
		setCss(this.name, {
			left: value
		});
	}
	get left(){
		return getCss(this.name, 'left');
	}
	setLeft(value){
		this.left = value;
		return this;
	}

	set float(value){
		setCss(this.name, {
			float: value
		});
	}
	get float(){
		return getCss(this.name, 'float');
	}
	setFloat(value){
		this.float = value;
		return this;
	}

	set clear(value){
		setCss(this.name, {
			clear: value
		});
	}
	get clear(){
		return getCss(this.name, 'clear');
	}
	setClear(value){
		this.clear = value;
		return this;
	}

	set flex(value){
		setCss(this.name, {
			flex: value
		});
	}
	get flex(){
		return getCss(this.name, 'flex');
	}
	setFlex(value){
		this.flex = value;
		return this;
	}

	set flexDirection(value){
		setCss(this.name, {
			flexDirection: value
		});
	}
	get flexDirection(){
		return getCss(this.name, 'flexDirection');
	}
	setFlexDirection(value){
		this.flexDirection = value;
		return this;
	}

	set flexWrap(value){
		setCss(this.name, {
			flexWrap: value
		});
	}
	get flexWrap(){
		return getCss(this.name, 'flexWrap');
	}
	setFlexWrap(value){
		this.flexWrap = value;
		return this;
	}

	set justifyContent(value){
		setCss(this.name, {
			justifyContent: value
		});
	}
	get justifyContent(){
		return getCss(this.name, 'justifyContent');
	}
	setJustifyContent(value){
		this.justifyContent = value;
		return this;
	}

	set alignItems(value){
		setCss(this.name, {
			alignItems: value
		});
	}
	get alignItems(){
		return getCss(this.name, 'alignItems');
	}
	setAlignItems(value){
		this.alignItems = value;
		return this;
	}

	set alignContent(value){
		setCss(this.name, {
			alignContent: value
		});
	}
	get alignContent(){
		return getCss(this.name, 'alignContent');
	}
	setAlignContent(value){
		this.alignContent = value;
		return this;
	}

	set flexGrow(value){
		setCss(this.name, {
			flexGrow: value
		});
	}
	get flexGrow(){
		return getCss(this.name, 'flexGrow');
	}
	setFlexGrow(value){
		this.flexGrow = value;
		return this;
	}

	set flexShrink(value){
		setCss(this.name, {
			flexShrink: value
		});
	}
	get flexShrink(){
		return getCss(this.name, 'flexShrink');
	}
	setFlexShrink(value){
		this.flexShrink = value;
		return this;
	}

	set flexBasis(value){
		setCss(this.name, {
			flexBasis: value
		});
	}
	get flexBasis(){
		return getCss(this.name, 'flexBasis');
	}
	setFlexBasis(value){
		this.flexBasis = value;
		return this;
	}

	set order(value){
		setCss(this.name, {
			order: value
		});
	}
	get order(){
		return getCss(this.name, 'order');
	}
	setOrder(value){
		this.order = value;
		return this;
	}

	set fontFamily(value){
		setCss(this.name, {
			fontFamily: value
		});
	}
	get fontFamily(){
		return getCss(this.name, 'fontFamily');
	}
	setFontFamily(value){
		this.fontFamily = value;
		return this;
	}

	set fontSize(value){
		setCss(this.name, {
			fontSize: value
		});
	}
	get fontSize(){
		return getCss(this.name, 'fontSize');
	}
	setFontSize(value){
		this.fontSize = value;
		return this;
	}

	set fontWeight(value){
		setCss(this.name, {
			fontWeight: value
		});
	}
	get fontWeight(){
		return getCss(this.name, 'fontWeight');
	}
	setFontWeight(value){
		this.fontWeight = value;
		return this;
	}

	set fontStyle(value){
		setCss(this.name, {
			fontStyle: value
		});
	}
	get fontStyle(){
		return getCss(this.name, 'fontStyle');
	}
	setFontStyle(value){
		this.fontStyle = value;
		return this;
	}

	set textAlign(value){
		setCss(this.name, {
			textAlign: value
		});
	}
	get textAlign(){
		return getCss(this.name, 'textAlign');
	}
	setTextAlign(value){
		this.textAlign = value;
		return this;
	}

	set textTransform(value){
		setCss(this.name, {
			textTransform: value
		});
	}
	get textTransform(){
		return getCss(this.name, 'textTransform');
	}
	setTextTransform(value){
		this.textTransform = value;
		return this;
	}

	set textDecoration(value){
		setCss(this.name, {
			textDecoration: value
		});
	}
	get textDecoration(){
		return getCss(this.name, 'textDecoration');
	}
	setTextDecoration(value){
		this.textDecoration = value;
		return this;
	}

	set lineHeight(value){
		setCss(this.name, {
			lineHeight: value
		});
	}
	get lineHeight(){
		return getCss(this.name, 'lineHeight');
	}
	setLineHeight(value){
		this.lineHeight = value;
		return this;
	}

	set letterSpacing(value){
		setCss(this.name, {
			letterSpacing: value
		});
	}
	get letterSpacing(){
		return getCss(this.name, 'letterSpacing');
	}
	setLetterSpacing(value){
		this.letterSpacing = value;
		return this;
	}

	set whiteSpace(value){
		setCss(this.name, {
			whiteSpace: value
		});
	}
	get whiteSpace(){
		return getCss(this.name, 'whiteSpace');
	}
	setWhiteSpace(value){
		this.whiteSpace = value;
		return this;
	}

	set background(value){
		setCss(this.name, {
			background: value
		});
	}
	get background(){
		return getCss(this.name, 'background');
	}
	setBackground(value){
		this.background = value;
		return this;
	}

	set backgroundColor(value){
		setCss(this.name, {
			backgroundColor: value
		});
	}
	get backgroundColor(){
		return getCss(this.name, 'backgroundColor');
	}
	setBackgroundColor(value){
		this.backgroundColor = value;
		return this;
	}

	set backgroundImage(value){
		setCss(this.name, {
			backgroundImage: value
		});
	}
	get backgroundImage(){
		return getCss(this.name, 'backgroundImage');
	}
	setBackgroundImage(value){
		this.backgroundImage = value;
		return this;
	}

	set backgroundRepeat(value){
		setCss(this.name, {
			backgroundRepeat: value
		});
	}
	get backgroundRepeat(){
		return getCss(this.name, 'backgroundRepeat');
	}
	setBackgroundRepeat(value){
		this.backgroundRepeat = value;
		return this;
	}

	set backgroundPosition(value){
		setCss(this.name, {
			backgroundPosition: value
		});
	}
	get backgroundPosition(){
		return getCss(this.name, 'backgroundPosition');
	}
	setBackgroundPosition(value){
		this.backgroundPosition = value;
		return this;
	}

	set backgroundSize(value){
		setCss(this.name, {
			backgroundSize: value
		});
	}
	get backgroundSize(){
		return getCss(this.name, 'backgroundSize');
	}
	setBackgroundSize(value){
		this.backgroundSize = value;
		return this;
	}

	set color(value){
		setCss(this.name, {
			color: value
		});
	}
	get color(){
		return getCss(this.name, 'color');
	}
	setColor(value){
		this.color = value;
		return this;
	}

	set cursor(value){
		setCss(this.name, {
			cursor: value
		});
	}
	get cursor(){
		return getCss(this.name, 'cursor');
	}
	setCursor(value){
		this.cursor = value;
		return this;
	}

	set zIndex(value){
		setCss(this.name, {
			zIndex: value
		});
	}
	get zIndex(){
		return getCss(this.name, 'zIndex');
	}
	setZIndex(value){
		this.zIndex = value;
		return this;
	}

	set opacity(value){
		setCss(this.name, {
			opacity: value
		});
	}
	get opacity(){
		return getCss(this.name, 'opacity');
	}
	setOpacity(value){
		this.opacity = value;
		return this;
	}

	set content(value){
		setCss(this.name, {
			content: value
		});
	}
	get content(){
		return getCss(this.name, 'content');
	}
	setContent(value){
		this.content = value;
		return this;
	}

	set transition(value){
		setCss(this.name, {
			transition: value
		});
	}
	get transition(){
		return getCss(this.name, 'transition');
	}
	setTransition(value){
		this.transition = value;
		return this;
	}

	set animation(value){
		setCss(this.name, {
			animation: value
		});
	}
	get animation(){
		return getCss(this.name, 'animation');
	}
	setAnimation(value){
		this.animation = value;
		return this;
	}

	set transform(value){
		setCss(this.name, {
			transform: value
		});
	}
	get transform(){
		return getCss(this.name, 'transform');
	}
	setTransform(value){
		this.transform = value;
		return this;
	}

	set userSelect(value){
		setCss(this.name, {
			userSelect: value
		});
	}
	get userSelect(){
		return getCss(this.name, 'userSelect');
	}
	setUserSelect(value){
		this.userSelect = value;
		return this;
	}

	set themeColor(value){
		setCss(this.name, {
			"--f7-theme-color": value
		});
	}
	get themeColor(){
		return getCss(this.name, 'themeColor');
	}
	setThemeColor(value){
		this.themeColor = value;
		return this;
	}

	

	static trimRules(rules){
		return trimRules(rules);
	}

	static register(name, props){
		const s = new Style(name);
		s.set(props);
		return s;
	}

	static fromElement(element, name){
		const styles = getComputedStyle(element);
    const csss = {};
    for (const property of styles) {
      const value = styles.getPropertyValue(property);
      csss[property] = value;
    }
		return Style.register(name, csss);
	}

	static fromWidget(widget, name){
		return Style.fromElement(findEl(widget.id)[0], name);
	}

	static from(target, name){
		if(isHTMLElement(target)){
			return Style.fromElement(target, name);
		} else if(isWidget(target)) {
			return Style.fromWidget(target, name);
		} else {
			throw new Error('Only HTMLElements and Widgets are allowed for style copying.');
		}
	}

	static copy(target, name){
		let all = { ...(getCss(target)) };
		return Style.register(name, all);
	}
}

export default Style;