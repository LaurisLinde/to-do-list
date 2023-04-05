(function () {
    const items = [];

    
    
    
    document.querySelector("#addButton").addEventListener("click", () => {
        items.push({
            text: document.querySelector("#textInput").value
        });

        let html = "";
        items.forEach((item) => {
            html += `<div class="item"><span class="itemText">${item.text}</span><button class="del"><i class="fa-solid fa-trash"></i></button></div>` 
        });

        document.querySelector("#list").innerHTML = html;

        document.querySelectorAll(".item button").forEach((item, index) => {
            item.addEventListener("click",  () => {
                items.splice(index, 1);
                document.querySelectorAll(".item")[index].remove();
            })
        })

    })




})();
