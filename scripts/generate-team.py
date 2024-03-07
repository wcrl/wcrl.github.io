# THIS SCRIPT WILL NOT WORK IF MULTIPLE PEOPLE HAVE THE SAME NAME

import csv

members = []
with open("team.csv", newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        members.append(row)

for i,col in enumerate(members[0]):
    print(i, col)

def generate_file_name(name):
    return "-".join([x.lower() for x in name.strip().split(" ")])

def generate_file_content(member):
    return f"""---
name: "{member[2]}"
title: "{member[4]}"
role: "{member[3]}"
img: "{member[6] if member[6] else "placeholder.png"}"
email: "{member[1]}"
---
{member[5]}
"""


for member in members[1:]:
    fname = generate_file_name(member[2])
    with open(f'../_team/{fname}.md', 'w') as fil:
        fil.write(generate_file_content(member))