
/**
 * 判断 val 是否存在于数组中
 * 
 * @param {Array} array 
 * @param {any} val 
 */
export function looseIndexOf(array, val) {
  return array.indexOf(val) === -1 ? true : false
}

/**
 * 判断 key 是否为对象或数组的属性 
 * 
 * @param {Object Array} objOrArray 
 * @param {any} key 
 */
export function hasOwn(objOrArray, key) {
  return Object.prototype.hasOwnProperty.call(objOrArray, key)
}

/**
 * 返回给定变量的原型类型字符串
 * 
 * toRawType(1) => Number
 * toRawType(new Date) => Date 
 * 
 * @param {any} val 
 */
export function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

/**
 * 向上查询指定名称的组件
 * 
 * (查询父组件)
 * 
 * @param {object} context 
 * @param {string} componentName 
 * @param {array} componentNames 
 */
export function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

/**
 * 向下查询指定名称的组件
 * 
 * (查询子组件)
 * 
 * @param {object} context 
 * @param {string} componentName 
 */
export function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

/**
 * 向下查询指定名称的组件集合
 * 
 * (查询子组件集合)
 * 
 * @param {object} context 
 * @param {string} componentName 
 */
export function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

/**
 * 向上查询指定名称的组件集合
 * 
 * (查询父组件集合)
 * 
 * @param {object} context 
 * @param {string} componentName 
 */
export function findComponentsUpward(context, componentName) {
  let parents = [];
  const parent = context.$parent;
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}

/**
 * 查询兄弟组件集合
 * 
 * @param {object} context 
 * @param {string} componentName 
 * @param {boolean} exceptMe 
 */
export function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}