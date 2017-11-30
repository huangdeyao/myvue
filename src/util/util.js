const Util = {};
Util.getMenuList = function(data){
    const menuList = [];
    data.forEach((item) => {
      if(item.text){
        if(item.children){
          if(item.access == 0){
            if(item.children.length > 1) return;
          }else{
            item.children.forEach((child, childIndex) => {
              item.children[childIndex].path = item.path + "/" + item.children[childIndex].path;
            })
          }
        }
        menuList.push(item);
      }
    })
    return menuList;
}

export default Util;
