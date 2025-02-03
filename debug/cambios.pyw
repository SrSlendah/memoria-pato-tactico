import os
import tkinter as tk
from tkinter import messagebox
from datetime import datetime

def leer_archivo(file_path):
    
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.readlines()

def comparar_contenidos(carpeta, archivo_js):
    
    archivos_carpeta = [archivo.replace('.html', '') for archivo in os.listdir(carpeta) if os.path.isfile(os.path.join(carpeta, archivo))]
    contenido_js = leer_archivo(archivo_js)

    diferencias = [
        archivo
        for archivo in archivos_carpeta
        if not any(archivo in linea for linea in contenido_js)
    ]
    return diferencias

def generar_reporte(directorios, archivo_salida):
    
    separador = "\n" + "*" * 50 + "\n"
    with open(archivo_salida, 'w', encoding='utf-8') as f:
        for carpeta, archivo_js in directorios:
            nombre_js = os.path.basename(archivo_js)
            f.write(f"\nComparación: {nombre_js}\n\n")
            
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
    
    try:
        os.system(f"code \"{archivo_salida}\"") 
    except Exception as e:
        print(f"No se pudo abrir el archivo en VS Code: {e}")

def limpiar_carpeta(carpeta):
    if os.path.exists(carpeta):
        for archivo in os.listdir(carpeta):
            ruta_completa = os.path.join(carpeta, archivo)
            try:
                if os.path.isfile(ruta_completa) or os.path.islink(ruta_completa):
                    os.remove(ruta_completa)
                elif os.path.isdir(ruta_completa):
                    shutil.rmtree(ruta_completa) 
            except Exception as e:
                print(f"No se pudo eliminar {ruta_completa}: {e}")

def main():

    directorios = [
        ("../lista-anime/", "../js/search-anime.js"),
        ("../lista-manga/", "../js/search-manga.js"),
        ("../lista-marvel/", "../js/search-marvel.js"),
        ("../lista-peliculas-series/", "../js/search-peliculas-series.js"),
        ("../wiki-bh/", "../js/search-wiki-bh.js"),
    ]

    carpeta_salida = "./changes/"
    os.makedirs(carpeta_salida, exist_ok=True)
    
    limpiar_carpeta(carpeta_salida)

    fecha_hora = datetime.now().strftime("%d-%m-%Y_%H-%M-%S")
    archivo_salida = os.path.abspath(os.path.join(carpeta_salida, f"cambios_{fecha_hora}.txt"))

    generar_reporte(directorios, archivo_salida)

    abrir_archivo(archivo_salida)

if __name__ == '__main__':
    main()