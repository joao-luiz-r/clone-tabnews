function status(request, response) {
  response.status(200).json({ message: "Não tem problemas!" });
}

export default status;
