//instead of using res.json(), we're using res.sendFile(),
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
