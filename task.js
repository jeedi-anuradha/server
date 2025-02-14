const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.url='/fake' && req.method == 'GET') {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
    res.write(JSON.stringify(data));
      res.end();
  } else if (req.url='/dummy' &&req.method == 'POST') {
      const response = await fetch("https://dummyjson.com/users");
      const jsondata = await response.json();
      res.write(JSON.stringify(jsondata))
      res.end();
    } 
   else {
    res.writeHead('Please enter GET or POST method');
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
