export const homeString = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portada - Trabajo Práctico React</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #282c34; /* Color similar al fondo por defecto de React */
            color: white;
        }

        .container {
            display: flex,
            min-height: 100%,
            text-align: center;
            padding: 40px;
        }

        h1 {
            color: #61dafb; /* Azul react */
            margin-bottom: 10px;
        }

        p {
            color: #bbb;
            margin-bottom: 20px;
            font-family: 'Courier New', monospace;
        }

        .info-section {
            text-align: left;
            max-width: 600px;
            margin: 0 auto;
        }

        .logo {
            width: 80px;
            height: 80px;
            margin: 10px;
            border: 2px solid white;
            border-radius: 8px;
            padding: 5px;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Trabajo Práctico React</h1>
    <p>Realizado por: Guillermo Guardia</p>

    <div class="info-section">
        <h2>Información del Trabajo</h2>
        <p><strong>Título:</strong> Primer Preentrega Curso Backend Coderhouse</p>
        <p><strong>Fecha de Presentación:</strong> 30-01-2024 </p>
        <p><strong>Otros datos relevantes:</strong> [Información adicional]</p>
    </div>

    <div class="logo-section">
        <h2>Tecnologías Utilizadas</h2>
        <img class="logo" src="https://iconape.com/wp-content/files/pe/353935/svg/node-js.svg" alt="Node.js Logo">
        <img class="logo" src="https://iconape.com/wp-content/files/pe/353936/svg/express.svg" alt="Express Logo">
        <img class="logo" src="https://iconape.com/wp-content/files/pe/353937/svg/javascript.svg" alt="JavaScript Logo">
    </div>
</div>

</body>
</html>
`