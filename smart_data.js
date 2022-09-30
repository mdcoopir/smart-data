const smart_data = (jsonIn) => {
    const elNames = Object.keys(jsonIn);
    elNames.forEach((elName) => {
        addSmartData(jsonIn[elName])
    })
}

const addSmartData = (el) => {
    el.changeValue = (newValue) => {
        el._value = newValue
    }
} 

export default smart_data;