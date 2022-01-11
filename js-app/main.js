const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            listBeans(beanVarieties);
            console.log(beanVarieties);
        })
});
function listBeans(beanVarities) {
    const beanElement = document.querySelector(".body-div");
    beanElement.innerHTML = `<ul> ${beanVarities.map(bean => `<li>${bean.name}<li>`).join("\n")}</ul>`
}

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

