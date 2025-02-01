def ordenar_terminos():
    # Solicitar los términos al usuario
    entrada = input("Introduce una lista de términos separados por comas: ")
    
    # Convertir la entrada en una lista y eliminar espacios extra
    terminos = [t.strip() for t in entrada.split(",")]

    # Ordenar ignorando mayúsculas y minúsculas
    terminos.sort(key=str.lower)

    # Mostrar en la terminal
    print("----------------------------------")
    print("\nTérminos ordenados:")
    print("\n----------------------------------\n")
    for termino in terminos:
        print(termino)
    print("\n----------------------------------\n")
    
    input("\nPresiona Enter para salir...")

ordenar_terminos()
