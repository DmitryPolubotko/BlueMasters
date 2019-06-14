function menu(sSelector){
	var m = this;
	
	m.menuUl = $(sSelector);
	m.menuLi = m.menuUl.find("li");
	
	m.showSubMenu = function(){
			$(this).children("ul").show();
			}	
	
	m.hideSubMenu = function(){
			$(this).children("ul").hide();
			}
	
	m.menuLi.mouseover(m.showSubMenu);
	m.menuLi.mouseout(m.hideSubMenu);
}