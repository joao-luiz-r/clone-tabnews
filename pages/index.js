function status(request, response) {
  response.status(200).json({ chave: "ok" });
}

export default status;
