export const userAccesToken = () => {
    const accesToken = 
        localStorage.getItem("accesToken") !== "undefined"
        ? JSON.parse(localStorage.getItem("accesToken"))
        : localStorage.clear()

    return accesToken;
}