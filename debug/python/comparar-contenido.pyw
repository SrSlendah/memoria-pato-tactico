import os
import tkinter as tk
from tkinter import filedialog, messagebox

def leer_archivo(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.readlines()

def comparar_archivos(archivo1, archivo2):
    contenido1 = [linea.strip().replace('.html', '') for linea in leer_archivo(archivo1)]
    contenido2 = leer_archivo(archivo2)

    faltantes_en_archivo2 = [linea for linea in contenido1 if not any(linea in linea2 for linea2 in contenido2)]

    return faltantes_en_archivo2

def escribir_diferencias(diferencias, file_path):
    with open(file_path, 'w', encoding='utf-8') as file:
        for linea in diferencias:
            file.write(linea + '\n')

def main():
    root = tk.Tk()
    root.withdraw()
    
    archivo1 = filedialog.askopenfilename(title="Selecciona la lista de archivos de la carpeta", filetypes=[("Text files", "*.txt")])
    if not archivo1:
        messagebox.showerror("Error", "No se seleccionó la lista de archivos de la carpeta.")
        return

    archivo2 = filedialog.askopenfilename(title="Selecciona el segundo archivo", filetypes=[("JavaScript files", "*.js")])
    if not archivo2:
        messagebox.showerror("Error", "No se seleccionó el segundo archivo.")
        return

    nombre_archivo1 = os.path.splitext(os.path.basename(archivo1))[0]
    
    script_path = os.path.dirname(os.path.abspath(__file__))
    archivo_diferencias = os.path.join(script_path, f'diferencias-{nombre_archivo1}.txt')

    faltantes_en_archivo2 = comparar_archivos(archivo1, archivo2)

    print("Líneas en archivo1 pero no encontradas en cualquier parte de archivo2:")
    for linea in faltantes_en_archivo2:
        print(linea)

    todas_diferencias = ["Líneas en archivo1 pero no encontradas en cualquier parte de archivo2:\n"] + faltantes_en_archivo2

    escribir_diferencias(todas_diferencias, archivo_diferencias)
    
    os.startfile(archivo_diferencias)

if __name__ == '__main__':
    main()
