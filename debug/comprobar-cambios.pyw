import os
import tkinter as tk
from tkinter import messagebox
from datetime import datetime

def leer_archivo(file_path):
    """Lee el contenido de un archivo y devuelve una lista de líneas."""
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.readlines()

def comparar_contenidos(carpeta, archivo_js):
    """Compara el contenido de los archivos en una carpeta con un archivo JS."""
    archivos_carpeta = [archivo.replace('.html', '') for archivo in os.listdir(carpeta) if os.path.isfile(os.path.join(carpeta, archivo))]
    contenido_js = leer_archivo(archivo_js)

    diferencias = [
        archivo
        for archivo in archivos_carpeta
        if not any(archivo in linea for linea in contenido_js)
    ]
    return diferencias

def generar_reporte(directorios, archivo_salida):
    """Genera un reporte con las diferencias encontradas y lo guarda en un archivo."""
    separador = "\n" + "*" * 50 + "\n"  # Separador con una línea en blanco después
    with open(archivo_salida, 'w', encoding='utf-8') as f:
        for carpeta, archivo_js in directorios:
            nombre_js = os.path.basename(archivo_js)
            f.write(f"\nComparación: {nombre_js}\n\n")  # Una línea antes del bloque y después del título
            
            if not os.path.exists(carpeta):
                f.write(f"[ERROR] La carpeta {carpeta} no existe.\n\n{separador}")
                continue
            if not os.path.exists(archivo_js):
                f.write(f"[ERROR] El archivo {archivo_js} no existe.\n\n{separador}")
                continue
            
            diferencias = comparar_contenidos(carpeta, archivo_js)
            if diferencias:
                f.write("Diferencias encontradas:\n")
                for diferencia in diferencias:
                    f.write(f"- {diferencia}\n")
            else:
                f.write("No se encontraron diferencias\n")
            
            f.write(separador)

def abrir_archivo(archivo_salida):
    """Abre el archivo generado según el sistema operativo."""
    try:
        if os.name == 'nt':  # Windows
            os.startfile(archivo_salida)
        elif os.name == 'posix':  # macOS/Linux
            os.system(f"open {archivo_salida}" if "darwin" in os.sys.platform else f"xdg-open {archivo_salida}")
    except Exception as e:
        print(f"No se pudo abrir el archivo: {e}")

def main():
    # Lista de directorios y archivos a comparar
    directorios = [
        ("../lista-anime/", "../js/search-anime.js"),
        ("../lista-manga/", "../js/search-manga.js"),
        ("../lista-marvel/", "../js/search-marvel.js"),
        ("../lista-peliculas-series/", "../js/search-peliculas-series.js"),
        ("../wiki-bh/", "../js/search-wiki-bh.js"),
    ]

    # Ruta del archivo de salida
    carpeta_salida = "./changes/"
    os.makedirs(carpeta_salida, exist_ok=True)
    fecha_hora = datetime.now().strftime("%d-%m-%Y_%H-%M-%S")
    archivo_salida = os.path.abspath(os.path.join(carpeta_salida, f"cambios_{fecha_hora}.txt"))

    # Generar el reporte
    generar_reporte(directorios, archivo_salida)
    
    # Mostrar notificación y preguntar si se desea abrir el archivo
    root = tk.Tk()
    root.withdraw()  # Oculta la ventana principal
    if messagebox.askyesno("Reporte generado", f"El archivo {archivo_salida} ha sido generado.\n¿Deseas abrirlo?"):
        abrir_archivo(archivo_salida)

if __name__ == '__main__':
    main()
