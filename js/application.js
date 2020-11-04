


document.addEventListener('DOMContentLoaded', ready)

// @@@@@@@@@@@@@ start  @@@@@@@@@@@@@@@@@@@@


function ready() {
    const addNewLink = document.getElementsByClassName('parent_new')[0]
    const formLinks = document.getElementsByClassName('form_links')[0]
    addNewLink.addEventListener('click', () => {
        const formLinks = document.getElementsByClassName('form_links')[0]
        document.getElementById('url').focus()
        formLinks.style.opacity = "1"
        formLinks.style.transform = "scale(1) "
        formLinks.style.zIndex = "5"
        formLinks.style.borderRadius = "0%"

    })

    // @@@@@@@ start @@@@@@@@@@@

    const menuExit = document.getElementsByClassName('menu_exit')[0]
    menuExit.addEventListener('click', () => {
        const formLinks = document.getElementsByClassName('form_links')[0]
        formLinks.style.opacity = "0"
        formLinks.style.zIndex = "-5"
        formLinks.style.transform = "scale(0) "
        formLinks.style.borderRadius = "50%"

    })

    // @@@@@@@@ end @@@@@@@@@@@

    const URLWebsite = document.getElementById('url').value
    const title = document.getElementById('title').value
    const imageSrc = document.getElementById('src')
    const URL = document.getElementById('url')
    const titless = document.getElementById('title')
    const warn = document.getElementsByClassName('warn_img')[0]
    const warning = document.getElementsByClassName('warning_img')[0]
    const checked = document.getElementsByClassName('checked_img')[0]


    URL.addEventListener('keyup', checkFunc)
    function checkFunc() {
        if (URLWebsite == '' || !URLWebsite.startsWith("https")) {
            truue()
        } if (!URLWebsite == '' || URLWebsite.startsWith("https")) {
            falsse()
        }
    }

    function truue() {
        warn.style.display = 'none'
        warning.style.display = 'flex'
        checked.style.display = 'none'
    }

    function falsse() {
        warn.style.display = 'none'
        warning.style.display = 'none'
        checked.style.display = 'flex'
    }



    // @@@@@@@@ start createIcon @@@@@@@@@@@@@@
    const createIcon = document.getElementsByClassName('add_submit')[0]
    let arrayItems = JSON.parse(localStorage.getItem('icons')) ? JSON.parse(localStorage.getItem('icons')) : []


    imageSrc.addEventListener('change', IMGFUNC)

    function IMGFUNC() {
        const fileImge = imageSrc.files[0]
        var reader = new FileReader()
        reader.onload = function () {
            var SRC = reader.result
            arrayItems.push(SRC)
        }
        reader.readAsDataURL(fileImge)

    }



    createIcon.addEventListener('click', addIcons)
    function addIcons() {
        const URLWebsite = document.getElementById('url').value
        const title = document.getElementById('title').value
        const imgSrccArray = []


        for (let i = 0; i < arrayItems.length; i = i + 3) {
            var mg = arrayItems[i]
            imgSrccArray.push(mg)
        }
        // let objec = {}
        if (URLWebsite == '' || !URLWebsite.startsWith("https")) {
            console.log("sorry the url input is empty")
            alert("Please Fill all Inputs ")
            return

        } else if (title == "") {
            console.log("sorry the title input is empty")
            alert("Please Fill all Inputs ")
            return
        } else if (imageSrc.files[0] == null) {
            console.log("sorry the img file input is empty")
            alert("Please Fill all Inputs ")
            return

        }

        const ask = window.confirm('Are You Sure You Want to Create New Icon')

        if (ask === false) {
            window.console.log("you cancle")
            return
        }
        const createNewParent = document.createElement('a')
        createNewParent.classList.add('parent-div')
        createNewParent.setAttribute('href', `${URLWebsite}`)
        createNewParent.setAttribute('target', '_blank')
        const footer = document.getElementById('footer')
        footer.appendChild(createNewParent)
        const parentContent =
            `
            <img src="${imgSrccArray[imgSrccArray.length - 1]}" alt="${title}" class="first-img">
            <span class="second-span"> ${title}</span>
                `;
        createNewParent.innerHTML = parentContent
        createNewParent.style.background = "white"
        console.log(createNewParent)
        formLinks.style.opacity = "0"
        formLinks.style.zIndex = "-1"
        URLWebsite ==
            imageSrc == " "
        arrayItems.push(URLWebsite, title)
        localStorage.setItem('icons', JSON.stringify(arrayItems))
        console.log(arrayItems)


    }

    // @@@@@@@@@@@@ end  createIcon@@@@@@@@@@@@@@@@@@@@





    // @@@@@@@@@@@@ start  putItemLSIntoHTML @@@@@@@@@@@@@@@@@@@@


    function putItemLSIntoHTML() {


        if (JSON.parse(localStorage.getItem("icons"))) {


            const arryfromls = JSON.parse(localStorage.getItem("icons"))
            const newArr = [...arryfromls]


            const footer = document.getElementsByClassName('footer')[0]
            var hrefLocation;
            var titleName;
            var imgSrcItems;
            var hrefLocationArr = [];
            var titleNameArr = [];
            var imgSrcItemsArr = [];



            for (let i = 0; i < newArr.length; i = i + 3) {
                var imgSrcItems = newArr[i]
                imgSrcItemsArr.push(imgSrcItems)
            }
            for (let i = 1; i < newArr.length; i = i + 3) {
                var hrefLocation = newArr[i]
                hrefLocationArr.push(hrefLocation)


            }
            for (let i = 2; i < newArr.length; i = i + 3) {
                var titleName = newArr[i]
                titleNameArr.push(titleName)
            }



            for (var x = 0; x < hrefLocationArr.length; x++) {


                const newLink = document.createElement('a')
                newLink.classList.add('parent-div')
                newLink.setAttribute('href', `${hrefLocationArr[x]}`)
                newLink.setAttribute('target', '_blank')

                const parentContent = `
                <img src="${imgSrcItemsArr[x]}" alt="${titleNameArr[x]}" class="first-img">
                <span class="second-span"> ${titleNameArr[x]}</span>
                `;
                newLink.style.background = "white"


                newLink.innerHTML = parentContent
                footer.insertBefore(newLink, footer.children[footer.children.length - 1])
            }

        }
    }

    // @@@@@@@@@@@@ end putItemLSIntoHTML@@@@@@@@@@@@@@@@@@@@




    putItemLSIntoHTML()

} //this bracket from ready function




