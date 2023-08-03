import { Body, Button, Style, ButtonSegment, Component, DataTable, IconButton, IconLink, Icons, LayoutBuilder, Link, Page, Sidebar, Swiper, SwiperWrapper, Tab, TabBar, TabsWrapper, Tag, Text, Toolbar, View, Widget, createApp, toast, BreadCrumbs, List, ListItem, MessageBar, createPopover, createPopup, RangeSlider, Container } from "../gui/index.js";
import Console from "./widgets/Console.js";
import Editor from "./widgets/Editor.js";
import "./styles/main.scss";

export default function App(){
	const r = new Widget({class: ''});
	Body.add(r);

	let app = createApp({
		el: r.raw()[0],
		routes: [
			{
				path: '/',
				component: new (class H extends Component{
					_onBuild(props, { $body }){
						return new Page({
							body: $body,
							children: [
								new Widget({
									class: 'grid grid-cols-2 grid-gap',
									children: [
										new Editor(),
										new Console()
									]
								})							
							]
						})
					}
				})
			}
		]
	}, () => {
		const v = new View({
			type: 'view-main'
		});
		r.add(v);
		return v.raw()[0];
	});

	return app;
}