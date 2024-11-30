
function addCategory() {
    const input = document.getElementById('categoryInput');
    const categoryName = input.value.trim();

    if (categoryName === '') {
        alert('Please enter a category name!');
        return;
    }

    const list = document.getElementById('categoryList');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = categoryName;

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'btn btn-primary btn-sm';
    editButton.onclick = () => editCategory(listItem, nameSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.onclick = () => list.removeChild(listItem);

    btnGroup.appendChild(editButton);
    btnGroup.appendChild(deleteButton);

    listItem.appendChild(nameSpan);
    listItem.appendChild(btnGroup);
    list.appendChild(listItem);

    input.value = '';
}

function editCategory(listItem, nameSpan) {
    const newName = prompt('Edit category name:', nameSpan.textContent);
    if (newName !== null && newName.trim() !== '') {
        nameSpan.textContent = newName;
    }
}
