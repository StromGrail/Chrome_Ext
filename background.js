
var contextsList=["selection","link","image","page"];

for(i=0;i<contextsList.length;i++){
	var context=contextsList[i];
	var titlex="Twitter Share this "+context+"on your Twitter profile ";

chrome.contextMenus.create({title:titlex,contexts:[context],onclick: clickHandler,id: context });

	function clickHandler(data,tab){
		switch(data.menuItemId){
			case 'selection':
				chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+data.selectionText,type : "panel"});
				break;
			case 'link':
				chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+data.linkUrl,type : "panel"});
				break;
			case 'image':
				chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+data.srcUrl,type : "panel"});
				break;
			case 'page':
				chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+tab.title+"&url="+data.pageUrl,type : "panel"});
				break;
	
		}
		

}
}