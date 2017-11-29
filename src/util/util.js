const Util = {};
Util.getMenuList = function(data){
    const menuList = [];
    data.forEach((item) => {
      if(item.text){
        if(item.children){
          if(item.access == 0){
            item.name = item.children[0].name;
            item.path += "/" + item.children[0].path;
            item.meta = item.children[0].meta;
            delete item.children;
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
