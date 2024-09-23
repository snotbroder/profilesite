const data = await fetch(`https://kxmqexnqozccamiawnbj.supabase.co/rest/v1/table1?`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4bXFleG5xb3pjY2FtaWF3bmJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MDQyNjIsImV4cCI6MjAzNDI4MDI2Mn0.9bmPlpp_agUnjY_gAe2RymTKggwDxzy8JT-XLQNNhRA",
  },
}).then((res) => res.json());
console.log(data);
