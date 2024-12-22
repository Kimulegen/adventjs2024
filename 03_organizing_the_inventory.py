def organizeInventory(inventory):
  groupedInventory = {}
  for gift in inventory:
    name, quantity, category = gift.values()
    groupedInventory[category][name] += quantity
  
  return groupedInventory