const getData = async () => {
  console.log("Loading...");
  const request = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await request.json();
  return data;
};

getData().then((data) => console.log(data));
