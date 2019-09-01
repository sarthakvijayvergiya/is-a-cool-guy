const express = require('express');
const app = express();
const port = 8080;

app.get('/api/skills', (req, res) => {
    const skills = [
        { id: 1, name: "Cool Skill 1" },
        { id: 2, name: "Cool Skill 2" },
        { id: 3, name: "Cool Skill 3" },
        { id: 4, name: "Cool Skill 4" },
        { id: 5, name: "Cool Skill 5" }
    ];
    
    res.json(skills);
});

app.listen(port, () => console.log(`🌍  Server Started on http://localhost:${port}`))