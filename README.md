# 🛍️ ProjectReact

Aplicación web desarrollada con **React + Vite** que muestra una estructura modular de componentes reutilizables para una página tipo catálogo o tienda de productos.

El proyecto está enfocado en buenas prácticas de organización de componentes, separación de estilos y estructura escalable.

---

## 🚀 Tecnologías utilizadas

* ⚛️ React
* ⚡ Vite
* 🎨 CSS modular por componente
* 🧹 ESLint
* 📦 Node.js / npm

---

## 📂 Estructura del Proyecto

```
projectReact/
│
├── public/
│   └── data.json          # Datos simulados de productos
│
├── src/
│   ├── assets/            # Recursos estáticos
│   ├── components/
│   │   ├── footer/
│   │   ├── home/
│   │   ├── mainBlock/
│   │   ├── Navbar/
│   │   ├── products/
│   │   └── props/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🧩 Componentes principales

* 🔹 **Navbar** – Barra de navegación principal.
* 🔹 **Home** – Sección principal o landing.
* 🔹 **MainBlock** – Bloque destacado de contenido.
* 🔹 **Products** – Renderizado dinámico de productos desde `data.json`.
* 🔹 **Props** – Manejo y práctica del uso de props en React.
* 🔹 **Footer** – Pie de página.

Cada componente tiene su propio archivo `.jsx` y su archivo de estilos `.css`, manteniendo una estructura organizada y escalable.

---

## 📦 Instalación y ejecución

1️⃣ Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/projectReact.git
```

2️⃣ Entra en la carpeta:

```bash
cd projectReact
```

3️⃣ Instala dependencias:

```bash
npm install
```

4️⃣ Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 🧪 Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa de la build
npm run lint     # Ejecutar ESLint
```

---

## 🎯 Objetivo del proyecto

Este proyecto fue creado con fines de práctica y aprendizaje para:

* Comprender la arquitectura basada en componentes.
* Practicar el uso de props.
* Organizar estilos por componente.
* Simular el consumo de datos locales desde un archivo JSON.
* Aplicar buenas prácticas de estructura en React.

---

## 🚀 Posibles mejoras futuras

* Implementar React Router.
* Agregar estado global (Context API o Redux).
* Conectar a una API real.
* Agregar carrito de compras.
* Mejorar diseño responsive.

---

## 👨‍💻 Autor

Desarrollado como proyecto de práctica en React.

---

⭐ Si te gustó el proyecto, puedes darle una estrella en GitHub.
