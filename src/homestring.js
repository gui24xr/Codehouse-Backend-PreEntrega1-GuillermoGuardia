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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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

        .button-section {
            text-align: left;
            max-width: 600px;
            margin: 120px auto;
        }


        .logo {
            width: 80px;
            height: 80px;
            margin: 10px;
            border: 2px solid white;
            border-radius: 8px;
            padding: 5px;
        }
        .rectangular-button {
            display: inline-block;
            padding: 10px 20px;
            text-decoration: none;
            color: #fff;
            background-color: #007bff;
            border: 1px solid #007bff;
            border-radius: 5px;
            font-size: 16px;
            transition: background-color 0.3s ease;
            font-family: 'Courier New', monospace;
          }
          
          .rectangular-button:hover {
            background-color: #0056b3;
          }
    </style>
</head>
<body>

<div class="container">
    <h1>Curso Backend Coderhouse <br> Primer Preentrega</h1>
    <p>Realizado por: Guillermo Guardia</p>

    <div class="info-section">
         <p>30-01-2024 </p>
    </div>

    <div class="logo-section">
    <img class="logo" src="https://imgs.search.brave.com/fAr-gGV6LJ-jK-DGVAYQwz7xfNhw5fxLy9CjCKkA71E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0ovamF2YXNj/cmlwdC1qcy1sb2dv/LTI5NDk3MDE3MDIt/c2Vla2xvZ28uY29t/LnBuZw" alt="JavaScript Logo">
        <img class="logo" src="https://imgs.search.brave.com/tq3hucM-dRx8cLV-5lQQ5Qy22SzDqFN1foHTH9A2ZL8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tRkJFMTIy/RTM3Ny1zZWVrbG9n/by5jb20ucG5n" alt="Node.js Logo">
     
    </div>
    <div class="button-section">
        <a href="/test" class="rectangular-button">Ir a test</a>

    </div>
</div>

</body>
</html>
`