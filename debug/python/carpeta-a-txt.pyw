import os
import tkinter as tk
from tkinter import filedialog

root = tk.Tk()
root.withdraw()

directorio_predeterminado = 'C:/Users/slend/Desktop/Proyectos/html/memoria-pato-tactico'

carpeta = filedialog.askdirectory(initialdir=directorio_predeterminado, title="Selecciona la carpeta")

if carpeta:
    archivos = os.listdir(carpeta)
    nombre_carpeta = os.path.basename(carpeta)
    archivo_salida = f'{nombre_carpeta}.txt'

    with open(archivo_salida, 'w') as f:
        for archivo in archivos:
            f.write(f"{archivo}\n")

    print(f"Lista de archivos guardada en {archivo_salida}")
else:
    print("No se seleccionó ninguna carpeta.")
