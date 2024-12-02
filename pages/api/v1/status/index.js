function status(request, response) {
  response.status(200).json({ message: "Deu tudo certo aqui. testão" });
}

export default status;
