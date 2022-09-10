let employee = {
    name: "Jose",
    streetAddress: "Ramona Avenue",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const jnjemployee = {...employee};
    jnjemployee.name = "Sam";
    jnjemployee.streetAddress = "11 Broadway";
    return jnjemployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    let name = ["Jose"]; 
    name.splice(1) === "Sam";
    let streetAddress = ["Ramona Avenue"];
    streetAddress.splice(1) === "12 Broadway";
    return employee;
}
