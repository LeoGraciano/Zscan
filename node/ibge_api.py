import http.client

conn = http.client.HTTPSConnection("servicodados.ibge.gov.br")


payload = ""

conn.request("GET", "/api/v1/localidades/estados?view=nivelado&orberBy=nome", payload)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))