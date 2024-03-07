const dotenv = require('dotenv');
dotenv.config();

document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const ign = document.getElementById('ign').value;
    const age = document.getElementById('age').value;
    const timezone = document.getElementById('timezone').value;
    const experience = document.getElementById('experience').value;
    const reason = document.getElementById('reason').value;
    const skills = document.getElementById('skills').value;
    const activity = document.getElementById('activity').value;
    const other = document.getElementById('other').value;

    const webhookUrl = process.env.WEBHOOK_URL;

    const data = {
        content: `New application from ${username}! Here are the details: \n\n**In-Game Name:** ${ign} \n**Age:** ${age} \n**Timezone:** ${timezone} \n**Experience:** ${experience} \n**Reason for joining:** ${reason} \n**Skills:** ${skills} \n**Activity:** ${activity} \n**Other:** ${other}`,
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit application');
        }
        alert('Application submitted successfully!')
    }).catch(error => {
        console.error('Error:', error);
    });
});