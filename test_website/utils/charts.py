months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
]

colorPalette = ["#ffdb58", "#010B13", "#6CA6C1", "#43AA8B", "#ED2939", "#748E54", "#A7C6DA", "#EA638C"]
colorPrimary, colorSuccess, colorDanger = colorPalette[0], colorPalette[5], colorPalette[4]

def get_year_dict():
    year_dict = dict()

    for month in months:
        year_dict[month] = 0

    return year_dict


def generate_color_palette(amount):
    palette = []

    i = 0
    while i < len(colorPalette) and len(palette) < amount:
        palette.append(colorPalette[i])
        i += 1
        if i == len(colorPalette) and len(palette) < amount:
            i = 0

    return palette
