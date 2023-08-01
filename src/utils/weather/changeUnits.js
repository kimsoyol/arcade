

export default function changeUnits(value, unit) {
    if (unit === "C") {
        return value - 273.15;
    } else {
        return ((value - 273.15) * 9) / 5 + 32;
    }
}
