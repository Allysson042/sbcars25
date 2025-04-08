import time  
from codecarbon import EmissionsTracker  

# Create an EmissionsTracker instance that measures power every 2 seconds for the entire machine  
tracker = EmissionsTracker(measure_power_secs=2, tracking_mode="machine")  

print("\n=== Informações de região  ===")
print(f"País (código ISO): {tracker._geo.country_iso_code}")
print(f"Região elétrica: {tracker._geo.country_name}")
print(f"Região específica: {tracker._geo.region}")

# Start tracking energy consumption and carbon emissions  
tracker.start()  

# emissions are measured during this timed
time.sleep(20)  

# Stop tracking and get total emissions in kg of CO2
emissions: float = tracker.stop()  

print(f"\nEmissões de carbono: {emissions} kg")