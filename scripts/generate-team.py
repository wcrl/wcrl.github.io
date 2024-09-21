"""
NOTE:
- This script MUST be run in the `scripts` directory
- ADD THE TEAM IMAGES TO "assets/img/team" BEFORE YOU RUN THIS SCRIPT

Input Errors that Have Been Accounted For:
- Miscapitalization of image file
- Including quotes in any of the input fields

Things to Fix:
- Not be vulnerable to injection attacks
- Take into account if people have the same exact name (first and last)
"""

import csv
import os

TEAM_COLLECTION_PATH = "../_team/"
TEAM_IMG_PATH = '../assets/img/team/'
TITLE_WEIGHTS = {
    'League Chairperson': 1
}

def generate_file_name(name):
    return "-".join([x.lower() for x in name.strip().split(" ")])

def format_description(desc):
    desc = desc.replace('"', "'")
    return desc

def format_img_file(img_file):
    if not img_file:
        return "placeholder.png"
    else:
        return img_file.lower()

def format_title(title):
    if title in ["N/A", "n/a", "no", "No"]:
        return ""
    else:
        return title
    
def generate_weight(title):
    if title in TITLE_WEIGHTS:
        return TITLE_WEIGHTS[title]
    else:
        return 0

def generate_file_content(member):
    return f"""---
name: "{member[2]}"
title: "{format_title(member[4])}"
role: "{member[3]}"
img: "{format_img_file(member[6])}"
email: "{member[1]}"
description: "{format_description(member[5])}"
weight: {generate_weight(member[4])}
---
"""

if __name__ == "__main__":
    # parse csv data
    members = []
    with open("team.csv", newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='"')
        for row in reader:
            members.append(row)

    # print all column titles
    for i,col in enumerate(members[0]):
        print(i, col)


    # generate layouts
    for member in members[1:]:
        fname = generate_file_name(member[2])
        with open(f'{TEAM_COLLECTION_PATH}{fname}.md', 'w') as fil:
            fil.write(generate_file_content(member))

    # put all team member image files in lowercase
    img_files = os.listdir(TEAM_IMG_PATH)
    for img_file in img_files:
        os.rename(TEAM_IMG_PATH+img_file, TEAM_IMG_PATH+img_file.lower())

