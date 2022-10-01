const smart_data = (jsonIn) => {
  let newJson = {
    ...jsonIn
  }
  const elNames = Object.keys(newJson);
  elNames.forEach((elName) => {
    _addSmartData(newJson[elName])
  })
  return newJson
}

const _addSmartData = (el) => {
  el.changeValue = (newValue) => {
    el._value = newValue
    if (el._children) {
      const elNames = Object.keys(el._children)
      elNames.forEach((elName) => {
        addSmartData(el._children[elName])
      })

    }
  }
}

module.exports = smart_data;
// export default smart_data;