interface InventoryItem {
    name: string;
    quantity: number;
    category: string;
}

interface GroupedInventory {
    [key: string]: {
        [key: string]: number;
    };
}

function organizeInventory(inventory: InventoryItem[]) {
    const groupedInv = {} as GroupedInventory;
    inventory.forEach(({ name, quantity, category }) => {
        groupedInv[category] ??= {};
        groupedInv[category][name] ??= 0;
        groupedInv[category][name] += quantity;
    });

    return groupedInv;
}