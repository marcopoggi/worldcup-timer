export const getData = async (url) => {
    let response = await fetch(url)
    .then(res => {
        return (res.ok) ?  res.json() : "Error has ocurred :(";
    })
    .catch(error => console.error(`Error has ocurred :( ${error.message}`));
    return response;
}