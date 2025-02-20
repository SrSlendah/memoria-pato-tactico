import os
import tkinter as tk
from tkinter import scrolledtext, messagebox
from datetime import datetime

def leer_archivo(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.readlines()

def comparar_contenidos(carpeta, archivo_js):
    archivos_carpeta = [archivo.replace('.html', '') for archivo in os.listdir(carpeta) if os.path.isfile(os.path.join(carpeta, archivo))]
    contenido_js = leer_archivo(archivo_js)
    diferencias = [archivo for archivo in archivos_carpeta if not any(archivo in linea for linea in contenido_js)]
    return diferencias

def generar_reporte(directorios):
    separador = "\n" + "*" * 50 + "\n"
    reporte = [(separador, "")]
    separador = "\n" + "*" * 50 + "\n"
    
    for carpeta, archivo_js in directorios:
        nombre_js = os.path.basename(archivo_js)
        nombre_carpeta = os.path.basename(os.path.normpath(carpeta)) 
        reporte.append((f"\nDiferencias entre {nombre_js} y /{nombre_carpeta}/*\n\n", "bold"))
        
        if not os.path.exists(carpeta):
            reporte.append((f"{separador}\n\n[ERROR] La carpeta {carpeta} no existe.\n\n{separador}", "bold"))
            continue
        if not os.path.exists(archivo_js):
            reporte.append((f"{separador}\n\n[ERROR] El archivo {archivo_js} no existe.\n\n{separador}", "bold"))
            continue
        
        diferencias = comparar_contenidos(carpeta, archivo_js)
        if diferencias:
            for diferencia in diferencias:
                reporte.append((f"- {diferencia}\n", ""))
        else:
            reporte.append(("No se encontraron diferencias\n", ""))
        
        reporte.append((separador, ""))
    
    return reporte

def mostrar_resultado():
    directorios = [
        ("../lista-anime/", "../js/search-anime.js"),
        ("../lista-manga/", "../js/search-manga.js"),
        ("../lista-marvel/", "../js/search-marvel.js"),
        ("../lista-peliculas-series/", "../js/search-peliculas-series.js"),
        ("../wiki-bh/", "../js/search-wiki-bh.js"),
    ]
    
    resultado = generar_reporte(directorios)
    text_widget.config(state=tk.NORMAL)
    text_widget.delete('1.0', tk.END)
    
    for texto, tag in resultado:
        text_widget.insert(tk.END, texto, tag)
    text_widget.config(state=tk.DISABLED)

def crear_interfaz():
    global text_widget
    root = tk.Tk()
    root.resizable(False, False)
    root.attributes('-toolwindow', True)
    root.title("Comparador de Archivos")
    root.geometry("600x590")
    
    frame = tk.Frame(root)
    frame.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)
    
    text_widget = scrolledtext.ScrolledText(frame, wrap=tk.WORD, height=20)
    text_widget.pack(fill=tk.BOTH, expand=True)
    text_widget.config(state=tk.DISABLED)
    
    text_widget.tag_configure("bold", font=("Arial", 10, "bold"))
    
    boton_actualizar = tk.Button(root, text="Actualizar", command=mostrar_resultado)
    boton_actualizar.pack(pady=5)
    
    mostrar_resultado()
    root.mainloop()

if __name__ == '__main__':
    crear_interfaz()
