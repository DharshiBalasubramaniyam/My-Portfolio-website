const dropdownItems = document.querySelectorAll(".dropdown-item")
const ids = ['java-react', 'node', 'react', 'kotlin', 'html', 'php', 'java']

dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.dropdown-toggle').textContent = item.textContent
        document.querySelectorAll('.active').forEach((activeItem) => {
            activeItem.classList.remove('active')
        })
        setTimeout(() => {
            ids.filter(id => id.includes(item.value)).forEach((selectedId) => {
                document.querySelectorAll('#' + selectedId).forEach((selectedItem) => {
                    selectedItem.classList.add('active')
                })
            })
        }, 500)
    })
})