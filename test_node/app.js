require('express')

app= require('express')
app.use(express.json())
app.use()
const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
