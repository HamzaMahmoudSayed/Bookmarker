let websiteNameInput = document.getElementById("websiteName")
let websiteUrlInput = document.getElementById("websiteUrl")

let bookmarksContainer = []

if (localStorage.getItem("allBookmarks")) {
    bookmarksContainer = JSON.parse(localStorage.getItem("allBookmarks"))
    displayBookmark()
}

function addBookmark() {
    let bookmark = {
        name: websiteNameInput.value,
        url: websiteUrlInput.value,
    }

    bookmarksContainer.push(bookmark)
    localStorage.setItem("allBookmarks", JSON.stringify(bookmarksContainer))
    displayBookmark()
    clearInputs()

}

function displayBookmark() {
    let cartona = ""


    for (let i = 1; i < bookmarksContainer.length; i++) {
        cartona += `
     
     <tr>
                    <td class="text-center">${i}</td>
                    <td class="text-center">${bookmarksContainer[i].name}</td>
                    <td class="text-center">
                        <button class="btn-visit px-3"><a href="${bookmarksContainer[i].url}" target="_blank"><i class="fa-solid fa-eye"></i> Visit</a></button>
                    </td>
                    <td class="text-center"><button onclick="deleteBookmark(${i})" class="btn-delete text-white px-2"><i
                                    class="fa-solid fa-trash-can"></i> Delete</button></td>
                </tr>
     
     
     `
    }

    document.getElementById("demo").innerHTML = cartona
}

function clearInputs() {
    websiteNameInput.value = ""
    websiteUrlInput.value = ""
}

function deleteBookmark(index) {
    bookmarksContainer.splice(index, 1)
    localStorage.setItem("allBookmarks", JSON.stringify(bookmarksContainer))
    displayBookmark()
}


function validateInputs(element) {

    var regex = {
        websiteName: /^\w{3,}(\s+\w+)*$/,
        websiteUrl: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/,
    }
    if (regex[element.id].test(element.value) == true) {

        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        return true;

    } else {

        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        return false;
    }


}

