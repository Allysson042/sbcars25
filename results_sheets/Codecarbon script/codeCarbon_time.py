import time
import subprocess
import psutil
import logging
import sys
import os
from datetime import datetime
from codecarbon import EmissionsTracker

def get_running_processes():
    """Retorna uma lista de todos os processos em execução na máquina."""
    processes = []
    for proc in psutil.process_iter(['pid', 'name', 'username']):
        processes.append(proc.info)
    return processes

def setup_codecarbon_logger():
    """Configura o logger do CodeCarbon para gerar o arquivo codecarbon.log."""
    # Remove o arquivo codecarbon.log se ele já existir
    if os.path.exists("codecarbon.log"):
        os.remove("codecarbon.log")

    logger = logging.getLogger("codecarbon")
    while logger.hasHandlers():
        logger.removeHandler(logger.handlers[0])

    # Define um formatador de log
    formatter = logging.Formatter(
        "%(asctime)s - %(name)-12s: %(levelname)-8s %(message)s"
    )

    # Cria um handler para arquivo que registra mensagens de debug
    fh = logging.FileHandler("codecarbon.log")
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(formatter)
    logger.addHandler(fh)

    # Cria um handler para o console que registra mensagens de warning ou superior
    consoleHandler = logging.StreamHandler(sys.stdout)
    consoleHandler.setFormatter(formatter)
    consoleHandler.setLevel(logging.WARNING)
    logger.addHandler(consoleHandler)

    logger.debug("GO!")

def read_codecarbon_log():
    """Lê o conteúdo do arquivo codecarbon.log e retorna como uma string."""
    try:
        with open("codecarbon.log", "r") as log_file:
            return log_file.read()
    except FileNotFoundError:
        return "Arquivo codecarbon.log não encontrado."

def create_log_file(start_time, emissions, execution_time, processes, codecarbon_log):
    """Cria um arquivo de log com os dados coletados."""
    filename = f"codeCarbon_time_log_{start_time.strftime('%Y%m%d_%H%M%S')}.txt"
    with open(filename, 'w') as log_file:
        log_file.write(f"Data e Hora de Início: {start_time}\n")
        log_file.write("\n=== Processos em Execução ===\n")
        for proc in processes:
            log_file.write(f"PID: {proc['pid']}, Nome: {proc['name']}, Usuário: {proc['username']}\n")
        log_file.write("\n=== Dados do CodeCarbon ===\n")
        log_file.write(f"Emissões de carbono: {emissions} kg\n")
        log_file.write(f"Tempo de execução: {execution_time} segundos\n")
        log_file.write("\n=== Log do CodeCarbon ===\n")
        log_file.write(codecarbon_log)
    print(f"Log salvo em {filename}")

def main():


    # Inicia o rastreamento de emissões
    tracker = EmissionsTracker(measure_power_secs=2, tracking_mode="machine")

    # Configura o logger do CodeCarbon
    setup_codecarbon_logger()
    tracker.start()

    start_time = datetime.now()
    processes = get_running_processes()

    # Executa os testes Cypress
    print("============================= Executando com a maquina sem rodar nada ==================================")
    time.sleep(116)
    
    print("============================= ==================================")

    end_time = time.time()
    execution_time = end_time - start_time.timestamp()

    # Para o rastreamento de emissões
    emissions: float = tracker.stop()
    print(f"Emissões de carbono: {emissions} kg")
    print("Tempo de execução: ", execution_time)

    # Lê o conteúdo do arquivo codecarbon.log
    codecarbon_log = read_codecarbon_log()

    # Cria o arquivo de log
    create_log_file(start_time, emissions, execution_time, processes, codecarbon_log)

if __name__ == "__main__":
    main()
