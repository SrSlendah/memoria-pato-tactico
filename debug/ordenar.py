import tkinter as tk
from tkinter import simpledialog

class CustomDialog(simpledialog.Dialog):
    def body(self, master):
        self.title("Ordenar Términos")

        # Etiqueta de instrucciones
        tk.Label(master, text="Introduce una lista de términos separados por comas:").pack(pady=(5, 2))

        # Área de entrada más grande
        self.text_box = tk.Text(master, height=5, width=40, wrap="word")  # Wrap evita desplazamiento horizontal
        self.text_box.pack(pady=5)

        return self.text_box  # Poner el foco en el cuadro de texto

    def apply(self):
        # Obtener el texto ingresado
        self.result = self.text_box.get("1.0", tk.END).strip()  # Obtener texto sin espacios extra

def pedir_terminos():
    root = tk.Tk()
    root.withdraw()

    dialogo = CustomDialog(root)
    entrada = dialogo.result  # Capturar el resultado

    if entrada:
        terminos = [t.strip() for t in entrada.split(",")]
        terminos.sort(key=str.lower)

        # Mostrar resultado
        mensaje = "Términos ordenados:\n\n" + "\n".join(terminos)
        tk.messagebox.showinfo("Ordenar Términos", mensaje)

pedir_terminos()
