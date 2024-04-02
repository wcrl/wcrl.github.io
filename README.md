# WCRL Website Development

--- WORK IN PROGRESS ---

Development of the WCRL Website.
The site is created using jekyll and based on the beautiful-jekyll theme, but is heavily modified to fit WCRL's needs. The website is designed to be easy to add new content to.

If you have any questions on how the website works, please refer to the jekyll-docs. If you really need help figuring something out, you can contact srijal@binghamton.edu (yantayn on discord).

## Instructions for Use
To run locally, first clone the repo and run the following commands in the root directory:
```bash
jekyll install  \\ this will install all required libraries
bundle exec jekyll serve \\ this command will run the jekyll server
```

### Documentation
All documentation should be placed into the `_documentation` folder. The folder should
follow the following format:
```
\_documentation
    getting-started.md
    \electronics
        arduino.md
    \printing
        printing-guide.md
    ...
```
All documentation filenames should be in lowercase and words should be seperated with dashes. Also, make sure to organize the folders by their categories.

The header for all documentation files should have the following format:
```yml
---
title: /* title name */
layout: documentation
group: /* the name of the subfolder */
---
```

**Note:** If you want the doc file to be included in a dropdown menu, make sure to specify a value for the `group` attribute (if you dont want it in a subfolder, put empty quotes `""`). The value should be the name of the subfolder the doc file is in. If you create a new subfolder, make sure to include it in the `_data/nav.yml` file! It should follow this format:
```yml
documentation:
    foldername: "Folder Title"    
```

### Team Page
The information for the team page is gathered via google form. The form data will be converted into a spreadsheet and downloaded into a csv file. The csv file is then fed into a python script to generate the team page content. Here are some pointers that will help you use/modify the scripts:
...

For now, this has to be manually done, but in the future it would be ideal that this would be done automagically.

## Credits

Thanks to Dean Attali for his free Beautiful Jekyll theme which alot of this website's design stems from! You can find a link to his theme [here](https://github.com/daattali/beautiful-jekyll#plans)!