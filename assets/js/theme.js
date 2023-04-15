function setTheme(theme) {
    if (theme === 'blue') {
        document.documentElement.style.setProperty('--main-color', '#1c8adb');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-bg-color', '#235a8c');
        document.documentElement.style.setProperty('--header-text-color', '#ffffff');
        document.documentElement.style.setProperty('--even-row-bg-color', '#f0f8ff');
        document.documentElement.style.setProperty('--odd-row-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--border-color', '#d3d3d3');
        document.documentElement.style.setProperty('--editable-cell-bg-color', '#f5deb3');
        document.documentElement.style.setProperty('--editable-cell-text-color', '#000000');
        } else if (theme === 'green') {
        document.documentElement.style.setProperty('--main-color', '#2ecc71');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-bg-color', '#27ae60');
        document.documentElement.style.setProperty('--header-text-color', '#ffffff');
        document.documentElement.style.setProperty('--even-row-bg-color', '#f0f8ff');
        document.documentElement.style.setProperty('--odd-row-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--border-color', '#d3d3d3');
        document.documentElement.style.setProperty('--editable-cell-bg-color', '#f5deb3');
        document.documentElement.style.setProperty('--editable-cell-text-color', '#000000');
        } else if (theme === 'red') {
        document.documentElement.style.setProperty('--main-color', '#e74c3c');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-bg-color', '#c0392b');
        document.documentElement.style.setProperty('--header-text-color', '#ffffff');
        document.documentElement.style.setProperty('--even-row-bg-color', '#f0f8ff');
        document.documentElement.style.setProperty('--odd-row-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--border-color', '#d3d3d3');
        document.documentElement.style.setProperty('--editable-cell-bg-color', '#f5deb3');
        document.documentElement.style.setProperty('--editable-cell-text-color', '#000000');
        }
        }

        const addRowBtn = document.getElementById('add-row-btn');
        const tableBody = document.querySelector('table tbody');
        
        addRowBtn.addEventListener('click', () => {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td><button class="delete-row-btn">Excluir linha</button></td>
          `;
          tableBody.appendChild(newRow);
        
          const deleteRowBtn = newRow.querySelector('.delete-row-btn');
          deleteRowBtn.addEventListener('click', (e) => {
            const row = e.target.parentNode.parentNode;
            row.parentNode.removeChild(row);
          });
        });
        
        const deleteRowBtns = document.querySelectorAll('.delete-row-btn');
        
        deleteRowBtns.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const row = e.target.parentNode.parentNode;
            row.parentNode.removeChild(row);
          });
        });
        