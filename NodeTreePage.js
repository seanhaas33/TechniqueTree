const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/NodeTreeStyle.css">
        <title>Sport Tree</title>
    </head>
    <body>
        <header>
            <h1>Sport Tree</h1>
        </header>
        <div class="horizontal-tree-diagram">
            <div class="level">
                <div class="node">Basics</div>
            </div>
            <div class="level">
                <div class="node">More Detail</div>
                <div class="node">More Detail</div>
            </div>
            <div class="level">
                <div class="node">Advanced Info</div>
                <div class="node">Advanced Info</div>
            </div>
            <div class="level">
                <div class="node">Specifics</div>
                <div class="node">Specifics</div>
                <div class="node">Specifics</div>
            </div>
        </div>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
