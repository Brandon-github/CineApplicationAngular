import app from '../app';

// Listener Server
app.listen(app.get('port'), () => {
    console.log(`Server runnig on port ${app.get('port')}\nhttp://localhost:${app.get('port')}`)
});