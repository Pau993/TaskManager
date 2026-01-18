const API_URL = 'http://localhost:3000/api';

// Cargar usuarios y tareas al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    loadTasks();
});

// ===== USUARIOS =====
async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        const users = Array.isArray(data) ? data : (data.data || []);
        
        const usersList = document.getElementById('usersList');
        const taskUserSelect = document.getElementById('taskUserId');
        
        if (users.length === 0) {
            usersList.innerHTML = '<p class="loading">No hay usuarios</p>';
            return;
        }

        // Crear tabla de usuarios
        const tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Fecha de Creación</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(user => `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td class="date-cell">${new Date(user.createdAt).toLocaleDateString('es-ES')}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        usersList.innerHTML = tableHTML;

        // Actualizar select de usuarios para tareas
        taskUserSelect.innerHTML = '<option value="">Seleccionar usuario</option>' + 
            users.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
        
    } catch (error) {
        document.getElementById('usersList').innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

async function createUser() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    if (!name || !email) {
        alert('Por favor completa todos los campos');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });

        if (response.ok) {
            document.getElementById('userName').value = '';
            document.getElementById('userEmail').value = '';
            loadUsers();
        } else {
            alert('Error al crear usuario');
        }
    } catch (error) {
        alert('Error al crear usuario: ' + error.message);
    }
}

// ===== TAREAS =====
async function loadTasks() {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        const data = await response.json();
        const tasks = Array.isArray(data) ? data : (data.data || []);
        
        const tasksList = document.getElementById('tasksList');
        
        if (tasks.length === 0) {
            tasksList.innerHTML = '<p class="loading">No hay tareas</p>';
            return;
        }

        // Crear tabla de tareas
        const tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Fecha de Vencimiento</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${tasks.map(task => `
                        <tr>
                            <td>${task.id}</td>
                            <td>${task.title}</td>
                            <td>${task.description}</td>
                            <td>
                                <span class="status-badge status-${task.status}" 
                                      onclick="changeTaskStatus(${task.id}, '${task.status}')">
                                    ${task.status}
                                </span>
                            </td>
                            <td class="date-cell">${task.dueDate ? new Date(task.dueDate).toLocaleDateString('es-ES') : 'Sin fecha'}</td>
                            <td>${task.userId}</td>
                            <td>
                                <button class="btn-delete" onclick="deleteTask(${task.id})">Eliminar</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        tasksList.innerHTML = tableHTML;
        
    } catch (error) {
        document.getElementById('tasksList').innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

async function createTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const userId = document.getElementById('taskUserId').value;
    const dueDate = document.getElementById('taskDueDate').value;

    if (!title || !description || !userId) {
        alert('Por favor completa todos los campos requeridos');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title, 
                description, 
                userId: parseInt(userId),
                dueDate: dueDate || undefined
            })
        });

        if (response.ok) {
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDescription').value = '';
            document.getElementById('taskDueDate').value = '';
            document.getElementById('taskUserId').value = '';
            loadTasks();
        } else {
            alert('Error al crear tarea');
        }
    } catch (error) {
        alert('Error al crear tarea: ' + error.message);
    }
}

async function changeTaskStatus(taskId, currentStatus) {
    const statuses = ['PENDING', 'IN_PROGRESS', 'DONE'];
    const currentIndex = statuses.indexOf(currentStatus);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];

    try {
        const response = await fetch(`${API_URL}/tasks/${taskId}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: nextStatus })
        });

        if (response.ok) {
            loadTasks();
        } else {
            alert('Error al cambiar estado de la tarea');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

async function deleteTask(taskId) {
    if (!confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            loadTasks();
        } else {
            alert('Error al eliminar la tarea');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}